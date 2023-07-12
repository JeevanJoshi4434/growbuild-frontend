import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Input } from 'reactstrap'
import { RequiredField } from '../../../utility/RequiredField'

const renderOptions = (n) => {

  const options = [];

  for (let i = 1; i <= n; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return options;
};

const renderFlat = (n) => {
  const options = [];

  for (let i = 1; i <= n; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return options;
};


const BookingStatus = () => {
  const [getInfo, setGetInfo] = useState(null);
  const [info, setInfo] = useState(false);
  const [allUnits, setAllUnits] = useState(null);
  const [CreateFlat, setCreateFlat] = useState({
   price:null,owner:null, floor: null, building: null, unit: null, flat: null, allotmentDate: null, parking: null, id: null,bookingDate:null,agreementDate:null
  });
  const [allBuilding, setAllBuilding] = useState(null);
  const [Building, setBuilding] = useState(null);
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCreateFlat({ ...CreateFlat, [name]: value });
  }
  const [AllProjects, setAllProjects] = useState(null);
  const getProject = async () => {
    const res = await axios.get('/api/all/project', {
      Headers: {
        'Content-Type': 'application/json'
      }
    })
    setAllProjects(res.data);
  }
  var history = useHistory();
  useEffect(() => {
    getProject();
  }, []);
  const getBuildings = async (id) => {
    if ((id?.length === 24 || id?.length === 12) && id !== "Select Project") {
      const res = await axios.get(`/api/buildings/${id}`, {
        Headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      setAllBuilding(res.data);
    }
  }
  const getUnits = async (id, project) => {
    if ((id?.length === 24 || id?.length === 12) && (project?.length === 24 || project?.length === 12)) {
      const res = await axios.get(`/api/find/unit/${id}/${project}`, {
        Headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      setAllUnits(res.data);
    }
  }
  const getBuildingDetail = async (id) => {
    if ((id?.length === 24 || id?.length === 12)) {
      const res = await axios.get(`/api/building/${id}`, {
        Headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      setBuilding(res.data);
    }
  }

  const getDetails = async (building, project, unit, flat, floor) => {
    if ((building.length === 12 || building.length === 24) && (project.length === 12 || project.length === 24) && (unit.length === 12 || unit.length === 24) && (flat !== 0|| flat !== null) && (floor !== 0||floor !== null) ) {
      const res = await axios.get(`/api/${building}/${project}/${unit}/${flat}/${floor}`, {
        Headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.status === 201){
         setInfo(false);
         setCreateFlat({...CreateFlat,price:0,owner:"No Record Found!", floor: CreateFlat.floor, building: CreateFlat.building, unit: CreateFlat.unit, flat: CreateFlat.flat, allotmentDate: null, parking: 0, id: CreateFlat.id,bookingDate:null,agreementDate:null })
      
        }
      else if (res.status === 200) { 
        setInfo(true);
         setGetInfo(res.data); 
         console.log(res.data);
        let data = res.data;
         setCreateFlat({...CreateFlat,price:data?.booking_price,owner:data?.first_applicant_name, floor: CreateFlat.floor, building: CreateFlat.building, unit: CreateFlat.unit, flat: CreateFlat.flat, allotmentDate: data?.allotment_date, parking: data?.parking, id: CreateFlat.id,bookingDate:data?.booking_date,agreementDate:data?.agreement_date })
      
      }
    }
  }
  return (
    <>
      <div className='container bg-white p-2 rounded-2'>
        <form className="row px-4 py-4 mx-2 my-2 justify-content-center shadow-lg">
          <h3 className="text-alternate text-primary">Set Booking</h3>
          <hr />

          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Select Project</p>
            <div className="input-group">
              <select className="form-control" id="project" onChange={(e) => { handleInputs(e); getBuildings(e.target.value);  }} name="Project" value={CreateFlat.Project}>
                {AllProjects === null ?
                  <option value={null} name={null}>Loading...</option>
                  : <option value={null} name={null}>Select Project</option>}
                {AllProjects !== null && AllProjects?.length === 0 &&
                  <option value={null} name={null}>No projects Avaliable</option>
                }
                {AllProjects !== null && AllProjects?.length > 0 && AllProjects.map((i) => {
                  return (
                    <option name={i?._id} value={i?._id}>{i?.Name}</option>
                  )
                })
                }
              </select>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Select Building</p>
            <div className="input-group">
              <select className="form-control" id="building" name="building" onChange={(e) => { handleInputs(e); getBuildingDetail(e.target.value); getUnits(e.target.value, CreateFlat?.Project); }} value={CreateFlat.building} >
                {CreateFlat.Project === null ? <option value={null} name={null} >First select Project</option>
                  : <>
                    {allBuilding === null && <option value={null} name={null} >Loading...</option>}
                    {allBuilding !== null && allBuilding?.length === 0 && <option value={null} name={null} >No Building Avaliable</option>}
                  </>
                }
                {allBuilding?.length > 0 &&
                  <>
                    <option value={null} name={null} >Select Building</option>
                    {
                      allBuilding?.map((i) => {
                        return (
                          <>
                            <option value={i?._id} name={i?._id}>{i?.buildingName}</option>
                          </>
                        )
                      })
                    }
                  </>
                }
              </select>
            </div>
          </div>
          {/* <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Select Unit</p>
            <div className="input-group">
              <select className="form-control" id="unit" name="unit" onChange={handleInputs} value={CreateFlat.unit}>
                {CreateFlat.Project === null && CreateFlat.building === null && <option value={null} name={null}>Select Project</option>}
                {CreateFlat.building === null && CreateFlat.Project !== null && <option value={null} name={null}>Select Building</option>}
                {CreateFlat.building !== null && CreateFlat.Project !== null && allUnits === null && <option value={null} name={null}>Loading...</option>}
                {allUnits !== null &&
                  <>
                    {allUnits.length === 0
                      ? <option value={null} name={null}>No Units Avaliable.</option>
                      : <option value={null} name={null}>Select Unit</option>

                    }
                    {allUnits.length > 0 && allUnits.map((i) => {
                      return (
                        <option value={i?._id} name={i?._id}>{i?.unit_name}</option>
                      )
                    })}
                  </>
                }
              </select>
            </div>
          </div> */}
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Select Floor</p>
            <div className="input-group">
              <select className="form-control" id="floor" name="floor" onChange={(e)=>{handleInputs(e);}} value={CreateFlat.floor}>
                {Building === null ?
                  <option value={null} name={null}>Loading...</option>
                  : <option value={null} name={null}>Select Floor</option>}
                {Building !== null && Building?.total_number_of_floors === 0 &&
                  <option value={null} name={null}>No Floor Avaliable</option>
                }
                {
                  Building !== null &&
                  Building?.total_number_of_floors > 0 &&
                  renderOptions(Building?.total_number_of_floors)
                }
              </select>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Select Unit</p>
            <div className="input-group">
              <select className="form-control" id="unit" name="unit" onChange={(e)=>{handleInputs(e);}} value={CreateFlat.unit}>
                {CreateFlat.Project === null && CreateFlat.building === null && <option value={null} name={null}>Select Project</option>}
                {CreateFlat.building === null && CreateFlat.Project !== null && <option value={null} name={null}>Select Building</option>}
                {CreateFlat.building !== null && CreateFlat.Project !== null && allUnits === null && <option value={null} name={null}>Loading...</option>}
                {allUnits !== null &&
                  <>
                    {allUnits.length === 0
                      ? <option value={null} name={null}>No Units Avaliable.</option>
                      : <option value={null} name={null}>Select Unit</option>

                    }
                    {allUnits.length > 0 && allUnits.map((i) => {
                      return (
                        <option value={i?._id} name={i?._id}>{i?.unit_name}</option>
                      )
                    })}
                  </>
                }
              </select>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Select Flat</p>
            <div className="input-group">
              <select className="form-control" id="flat" name="flat" value={CreateFlat.flat} onChange={(e)=>{handleInputs(e);}} >
                {Building === null ?
                  <option value={null} name={null}>Loading...</option>
                  : <option value={null} name={null}>Select Flat</option>}
                {Building !== null && Building?.total_number_of_flats === 0 &&
                  <option value={null} name={null}>No Flat Avaliable</option>
                }
                {
                  Building !== null &&
                  Building?.total_number_of_flats > 0 &&
                  renderFlat(Building?.total_number_of_flats)
                }
              </select>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Fetch Data</p>
            <button type='button' className='btn btn-primary ' onClick={()=>getDetails(CreateFlat.building,CreateFlat.Project,CreateFlat.unit,CreateFlat.flat,CreateFlat.floor)} >Fetch Booking</button>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Owner Name</p>
            <div className="input-group">
              <input
                type="text"
                aria-label="ownerName"
                placeholder="Select Flat first"
                readOnly="true"
                value={CreateFlat?.owner}
                name="owner"
                onChange={handleInputs}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Parking</p>
            <div className="input-group">
              <span className="input-group-text">
                <input
                  aria-label="Parkings"
                  id="isParkings"
                  name="isParkings"
                  type="radio"
                  className="form-check-input"
                />
              </span>
              <input
                type="number"
                aria-label="Parking No"
                placeholder="Enter Parking No"
                className="form-control"
                name="parking"
                value={CreateFlat?.parking}
                onChange={handleInputs}
              />
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Booking Price</p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={CreateFlat.price}
                onChange={handleInputs}
                readOnly="true"
                required=""
              />
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate"> Booking Date</p>
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                id="bookingDate"
                name="bookingDate"
                onChange={handleInputs}
                value={CreateFlat?.bookingDate}
                required=""
              />
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate"> Allotment Date</p>
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                id="allotmentDate"
                name="allotmentDate"
                onChange={handleInputs}
                value={CreateFlat?.allotmentDate}
                required=""
              />
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate"> Agreement Date</p>
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                id="agreementDate"
                name="agreementDate"
                onChange={handleInputs}
                value={CreateFlat?.agreementDate}
                required=""
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default BookingStatus
