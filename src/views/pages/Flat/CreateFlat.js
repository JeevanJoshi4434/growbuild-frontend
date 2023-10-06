import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import swal from "sweetalert";
import { Edit, Trash } from "react-feather";
import FlatTable from "./FlatUtils";


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

const CreateFlat = () => {
  const [allFlat, setAllFlat] = useState(null);
  const [isEdit, setIsEdit] = useState(false);  
  const [allUnits, setAllUnits] = useState(null);
  const [CreateFlat, setCreateFlat] = useState({
    bedRoom:null,Project: null, floor: null, building: null, unit: null, flat: null, flat_area: null, parking: null, starting_price: null, extra_facilities: null,id:null
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
    const res = await axios.get(process.env.REACT_APP_PORT + '/api/all/project', {
      Headers: {
        'Content-Type': 'application/json'
      }
    })
    setAllProjects(res?.data);
  }
  var history = useHistory();
  useEffect(() => {
    getProject();
  }, []);
  const getBuildings = async (id) => {
    if ((id?.length === 24 || id?.length === 12) && id !== "Select Project") {
      const res = await axios.get(`${process.env.REACT_APP_PORT}/api/buildings/${id}`, {
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
      const res = await axios.get(`${process.env.REACT_APP_PORT}/api/find/unit/${id}/${project}`, {
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
      const res = await axios.get(`${process.env.REACT_APP_PORT}/api/building/${id}`, {
        Headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      setBuilding(res.data);
    }
  }

  const uploadFlat = async () => {
    const res = await axios.post(process.env.REACT_APP_PORT + '/api/create/flat', {
      Project: CreateFlat.Project,
      floor: CreateFlat.floor,
      building: CreateFlat.building,
      unit: CreateFlat.unit,
      flat: CreateFlat.flat,
      flat_area: CreateFlat.flat_area,
      parking: CreateFlat.parking,
      starting_price: CreateFlat.starting_price,
      extra_facilities: CreateFlat.extra_facilities,
      bedRoom:CreateFlat.bedRoom
    })
    if (res.status === 200) {
      window.alert("Flat Upload Done!");
      history.go(0);
    } else {
      window.alert("Something Error!");
    }
  }
  const edit = async(data)=>{
    setCreateFlat({...CreateFlat, Project: data?.Project, floor: data?.floor, building: data?.building, unit: data?.unit, flat: data?.flat, flat_area: data?.flat_area, parking: data?.parking, starting_price: data?.starting_price, extra_facilities: data?.extra_facilities,id:data?._id});
    setIsEdit(true)
    await getBuildings(data?.Project);
    setCreateFlat({...CreateFlat,building:data?.building});
    await getBuildingDetail(data?.building);
    setCreateFlat({...CreateFlat,floor: data?.floor, flat: data?.flat});
    await getUnits(data?.building,data?.Project);
    setCreateFlat({...CreateFlat,unit: data?.unit});
    setCreateFlat({...CreateFlat, Project: data?.Project, floor: data?.floor, building: data?.building, unit: data?.unit, flat: data?.flat, flat_area: data?.flat_area, parking: data?.parking, starting_price: data?.starting_price, extra_facilities: data?.extra_facilities,id:data?._id,bedRoom:data?.bedRoom});
   }
   const deleteFlat= async(id)=>{
   const willDelete = await swal({
     title: "Are you sure?",
       text: "Are you sure that you want to delete this Block?",
       icon: "warning",
       dangerMode: true,
     });
      
     if (willDelete) {
       const res = await axios.delete(process.env.REACT_APP_PORT + '/api/delete/flat/'+id,{
         Headers: {
           'Content-Type': 'application/json'
         }
       })
       getAllFlat();
     }
     willDelete();
   }
   const updateFlat = async(id)=>{
     const res = await axios.put(process.env.REACT_APP_PORT + '/api/update/flat/'+id,{
       Project: CreateFlat.Project,
       floor: CreateFlat.floor,
       building: CreateFlat.building,
       unit: CreateFlat.unit,
       flat: CreateFlat.flat,
       flat_area: CreateFlat.flat_area,
       parking: CreateFlat.parking,
       starting_price: CreateFlat.starting_price,
       extra_facilities: CreateFlat.extra_facilities,
       bedRoom:CreateFlat.bedRoom
     })
     if(res.status===200){
       swal('Building Updated successfully!','success')
       setTimeout(() => {
         history.go(0);
       }, 2000);
     }
   }
   const getAllFlat = async()=>{
    const res = await axios.get(`${process.env.REACT_APP_PORT}/api/all/flat`,{
      Headers: {
        'Content-Type': 'application/json'
      }
    })
    if(res.status === 200)
    setAllFlat(res.data);
  }
  useEffect(() => {
    getAllFlat();
  }, [])
  const getProjectName = async(idd)=>{
    const res = await axios.get(process.env.REACT_APP_PORT+'/api/project/'+idd);
    if(res.status === 200){
      return res.data.name;
    }else{
      return null;
    }
  }
  const getBuildingName = async(idd)=>{
    const res = await axios.get(process.env.REACT_APP_PORT+'/api/building/'+idd);
    if(res.status === 200){
      return res.data.name;
    }else{
      return null;
    }
  }
  const [currentFloor, setCurrentFloor] = useState(0);

  const filteredUnits =
    allUnits?.filter(allUnits =>{
      const unitFloor = allUnits?.unit_name.charAt(0);
      return unitFloor === currentFloor.toString();
    });
  
  return (
    <>
      <div className="container bg-white p-2 rounded-2">
        <form className="row px-4 py-4 mx-2 my-2 justify-content-center shadow-lg">
          <h3 className="text-alternate text-primary">Create New Flat</h3>
          <hr />

          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Select Project</p>
            <div className="input-group">
              <select className="form-control" id="project" onChange={(e) => { handleInputs(e); getBuildings(e.target.value); }} name="Project" value={CreateFlat.Project}>
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
           <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Select Floor</p>
            <div className="input-group">
              <select className="form-control" id="floor" name="floor" onChange={(e)=>{handleInputs(e);setCurrentFloor(e.target.value);console.log(filteredUnits);}} value={CreateFlat.floor}>
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
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Select Unit</p>
            <div className="input-group">
              <select className="form-control" id="unit" name="unit" onChange={handleInputs} value={CreateFlat.unit}>
                {CreateFlat.Project === null && CreateFlat.building === null && <option value={null} name={null}>Select Project</option>}
                {CreateFlat.building === null && CreateFlat.Project !== null && <option value={null} name={null}>Select Building</option>}
                {CreateFlat.building !== null && CreateFlat.Project !== null && allUnits === null && <option value={null} name={null}>Loading...</option>}
                {allUnits !== null &&
                  <>
                    {filteredUnits.length === 0
                      ? <option value={null} name={null}>No Units Avaliable.</option>
                      : <option value={null} name={null}>Select Unit</option>

                    }
                    {filteredUnits.length > 0 && filteredUnits.map((i) => {
                      return (
                        <option value={i?._id} name={i?._id}>{i?.unit_name}</option>
                      )
                    })}
                  </>
                }
              </select>
            </div>
          </div>
          {/* <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Select Flat</p>
            <div className="input-group">
              <select className="form-control" id="flat" name="flat" value={CreateFlat.flat} onChange={handleInputs} >
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
          </div> */}
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Flat Area</p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="flat_area"
                name="flat_area"
                value={CreateFlat.flat_area}
                onChange={handleInputs}
                required=""
              />
            </div>
          </div>
          {/* <div className="col-md-6 col-12 mb-2">
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
                id="parking"
                name="parking"
                value={CreateFlat.parking}
                onChange={handleInputs}
              />
            </div>
          </div> */}
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Bed Room</p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="bedRoom"
                name="bedRoom"
                value={CreateFlat.bedRoom}
                onChange={handleInputs}
                required=""
              />
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Starting Price</p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="price"
                name="starting_price"
                value={CreateFlat.starting_price}
                onChange={handleInputs}
                required=""
              />
            </div>
          </div>
          <div className="col-md-12 col-12 mb-2">
            <p className="text-alternate">Extra Facilities</p>
            <div className="input-group">
              <textarea
                type="text"
                className="form-control"
                id="facilities"
                name="extra_facilities"
                value={CreateFlat.extra_facilities}
                onChange={handleInputs}
                required=""
              ></textarea>
            </div>
          </div>

          <div className="col-md-12 col-12 text-right">
          {isEdit ? (
              <>
                <button
                  type="button"
                  class="btn btn-outline-warning btn-md mb-1 mr-1"
                  onClick={() => {
                    setCreateFlat({
                      ...CreateFlat,
                      Project: null, floor: null, building: null, unit: null, flat: null, flat_area: null, parking: null, starting_price: null, extra_facilities: null,id:null,bedRoom:null
                    });
                    setIsEdit(false);
                  }}
                >
                  {" "}
                  Exit{" "}
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary btn-md mb-1 mr-1"
                  onClick={() => updateFlat(CreateFlat?.id)}
                >
                  {" "}
                  Update{" "}
                </button>
              </>
            ) : (
              <button
                type="button"
                class="btn btn-outline-primary btn-md mb-1 mr-1"
                onClick={() => uploadFlat()}
              >
                {" "}
                Create{" "}
              </button>
            )}
          </div>
        </form>

        {!isEdit &&
          <form
            className="row px-4 py-4 mx-2 my-2 shadow-lg needs-validation"
            novalidate
          >
            <h3 className="text-alternate text-primary">All Flats</h3>
            <div className="d-flex justify-content-center">
              <table className="table table-striped table-responsive">
                <tr>
                  <th>Sno.</th>
                  <th>Project</th>
                  <th>Building</th>
                  <th>Flat</th>
                  <th>Floor</th>
                  <th>Flat Area</th>
                  <th>Bed Room</th>
                  <th>Starting Price</th>
                  <th>Action</th>
                </tr>
                {allFlat?.map((i, j) => {
                  let id = i?._id;
                  console.log(i);
                  return <FlatTable i={i} j={j} setIsEdit={setIsEdit} setCreateFlat={setCreateFlat} CreateFlat={CreateFlat} setAllBuilding={setAllBuilding} setBuilding={setBuilding} setAllUnits={setAllUnits} setAllFlat={setAllFlat} id={id} />;
                })}
              </table>
            </div>
          </form>
        }
      </div>
    </>
  );
};

export default CreateFlat;
