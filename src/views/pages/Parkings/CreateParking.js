import axios from "axios";
import React, { useState, useEffect } from "react";
import { Edit, Trash } from "react-feather";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import ParkingTable from "./ParkingUti";


const renderOptions = (n) => {
  const options = [];

  for (let i = 0; i < n; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return options;
};

const CreateParking = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [CreateParking, setCreateParking] = useState({
    projectID: null, project: null, floor: null, building: null, parkings: null, Total_Parking_Area_square_feet: null, Single_Parking_Area_square_feet: null, extra_facilities: null, id:null,price:null
  })
  const [allBuilding, setAllBuilding] = useState(null);
  const [Building, setBuilding] = useState(null);
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCreateParking({ ...CreateParking, [name]: value });
  }
  const [AllProjects, setAllProjects] = useState(null);
  const getProject = async () => {
    const res = await axios.get(process.env.REACT_APP_PORT + '/api/all/project', {
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
      const res = await axios.get(`${process.env.REACT_APP_PORT}/api/buildings/${id}`, {
        Headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      setAllBuilding(res.data);
      console.log(res.data);
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
      console.log(res.data);
    }
  }
  const Createparking = async()=>{
    const res = await axios.post(process.env.REACT_APP_PORT + '/api/create/parking',{
      Project:CreateParking.project,
      floor:CreateParking.floor,
      building:CreateParking.building,
      parkings:CreateParking.parkings,
      Total_Parking_Area_square_feet:CreateParking.Total_Parking_Area_square_feet,
      Single_Parking_Area_square_feet:CreateParking.Single_Parking_Area_square_feet,
      extra_facilities:CreateParking.extra_facilities,
      price:CreateParking.price
    })
    if(res.status === 200){
      window.alert("Parking Upload Done!");
      history.go(0);
    }
  }
  const [AllParking, setAllParking] = useState(null)
  const getParkings = async()=>{
    const res = await axios.get(process.env.REACT_APP_PORT + '/api/all/parking',{
      Headers: {
        'Content-Type': 'application/json'
      }
    })
    setAllParking(res.data);
  }
  useEffect(() => {
    getParkings();
  }, [])
  const edit = async(data)=>{
   setCreateParking({...CreateParking, projectID: data?.Project, project: data?.Project, parkings: data?.parkings, Total_Parking_Area_square_feet: data?.Total_Parking_Area_square_feet, Single_Parking_Area_square_feet: data?.Single_Parking_Area_square_feet, extra_facilities: data?.extra_facilities,id:data?._id});
   setIsEdit(true)
   await getBuildings(data?.Project);
   setCreateParking({...CreateParking, building:data?.building});
   await getBuildingDetail(data?.building);
   setCreateParking({...CreateParking, floor:data?.floor});
   setCreateParking({...CreateParking, floor:data?.floor,building:data?.building,projectID: data?.Project, project: data?.Project, parkings: data?.parkings, Total_Parking_Area_square_feet: data?.Total_Parking_Area_square_feet, Single_Parking_Area_square_feet: data?.Single_Parking_Area_square_feet, extra_facilities: data?.extra_facilities,id:data?._id,price:data?.price});
  }
  const deleteParking= async(id)=>{
  const willDelete = await swal({
    title: "Are you sure?",
      text: "Are you sure that you want to delete this Block?",
      icon: "warning",
      dangerMode: true,
    });
     
    if (willDelete) {
      const res = await axios.delete(process.env.REACT_APP_PORT + '/api/delete/parking/'+id,{
        Headers: {
          'Content-Type': 'application/json'
        }
      })
      getParkings();
    }
    willDelete();
  }
  const updateParking = async(id)=>{
    const res = await axios.put(process.env.REACT_APP_PORT + '/api/update/parking/'+id,{
      Project:CreateParking.project,
      floor:CreateParking.floor,
      building:CreateParking.building,
      parkings:CreateParking.parkings,
      Total_Parking_Area_square_feet:CreateParking.Total_Parking_Area_square_feet,
      Single_Parking_Area_square_feet:CreateParking.Single_Parking_Area_square_feet,
      extra_facilities:CreateParking.extra_facilities,
      price:CreateParking.price
    })
    if(res.status===200){
      swal('Building Updated successfully!','success')
      setTimeout(() => {
        history.go(0);
      }, 2000);
    }
  }
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
  return (
    <>
      <div className="container bg-white p-2 rounded-2">
        <form className="row px-4 py-4 mx-2 my-2 justify-content-center shadow-lg">
          <h3 className="text-alternate text-primary">Create Parkings</h3>
          <hr />

          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Select Project</p>
            <div className="input-group">
              <select
                className="form-control"
                id="project"
                onChange={(e) => {
                  handleInputs(e);
                  getBuildings(e.target.value);
                }}
                name="project"
                value={CreateParking.project}
              >
                {AllProjects === null ? (
                  <option value={null} name={null}>
                    Loading...
                  </option>
                ) : (
                  <option value={null} name={null}>
                    Select Project
                  </option>
                )}
                {AllProjects !== null && AllProjects?.length === 0 && (
                  <option value={null} name={null}>
                    No projects Avaliable
                  </option>
                )}
                {AllProjects !== null &&
                  AllProjects?.length > 0 &&
                  AllProjects.map((i) => {
                    return (
                      <option name={i?._id} value={i?._id}>
                        {i?.Name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Select Building</p>
            <div className="input-group">
              <select
                className="form-control"
                id="building"
                name="building"
                onChange={(e) => {
                  handleInputs(e);
                  getBuildingDetail(e.target.value);
                }}
                value={CreateParking.building}
              >
                {CreateParking.project === null ? (
                  <option value={null} name={null}>
                    First select Project
                  </option>
                ) : (
                  <>
                    {allBuilding === null && (
                      <option value={null} name={null}>
                        Loading...
                      </option>
                    )}
                    {allBuilding !== null && allBuilding?.length === 0 && (
                      <option value={null} name={null}>
                        No Building Avaliable
                      </option>
                    )}
                  </>
                )}
                {allBuilding?.length > 0 && (
                  <>
                    <option value={null} name={null}>
                      Select Building
                    </option>
                    {allBuilding?.map((i) => {
                      return (
                        <>
                          <option value={i?._id} name={i?._id}>
                            {i?.buildingName}
                          </option>
                        </>
                      );
                    })}
                  </>
                )}
              </select>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Select Floor</p>
            <div className="input-group">
              <select
                className="form-control"
                id="floor"
                name="floor"
                onChange={handleInputs}
                value={CreateParking.floor}
              >
                {Building === null ? (
                  <option value={null} name={null}>
                    Loading...
                  </option>
                ) : (
                  <option value={null} name={null}>
                    Select Floor
                  </option>
                )}
                {Building !== null && Building?.total_number_of_floors === 0 && (
                  <option value={null} name={null}>
                    No Floor Avaliable
                  </option>
                )}
                {Building !== null &&
                  Building?.total_number_of_floors > 0 &&
                  renderOptions(Building?.total_number_of_floors)}
                {/* <option value="0">Basement</option>
                <option value="1">Ground</option> */}
              </select>
            </div>
          </div>

          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Total No Of Parkings</p>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="totalParkings"
                name="parkings"
                value={CreateParking.parkings}
                onChange={handleInputs}
                required=""
              />
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Total Parking Area In Square Feet</p>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="totalParkingArea"
                name="Total_Parking_Area_square_feet"
                value={CreateParking.Total_Parking_Area_square_feet}
                onChange={handleInputs}
                required=""
              />
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Single Parking Area In Square Feet</p>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="singleParkingArea"
                name="Single_Parking_Area_square_feet"
                value={CreateParking.Single_Parking_Area_square_feet}
                onChange={handleInputs}
                required=""
              />
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Price</p>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={CreateParking.price}
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
                value={CreateParking.extra_facilities}
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
                    setCreateParking({
                      ...CreateParking,
                      projectID: null,
                      project: null,
                      floor: null,
                      building: null,
                      parkings: null,
                      Total_Parking_Area_square_feet: null,
                      Single_Parking_Area_square_feet: null,
                      extra_facilities: null,
                      id: null,
                      price:null
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
                  onClick={() => updateParking(CreateParking?.id)}
                >
                  {" "}
                  Update{" "}
                </button>
              </>
            ) : (
              <button
                type="button"
                class="btn btn-outline-primary btn-md mb-1 mr-1"
                onClick={() => Createparking()}
              >
                {" "}
                Create{" "}
              </button>
            )}
          </div>
        </form>
        {!isEdit && (
          <form
            className="row px-4 py-4 mx-2 my-2 shadow-lg needs-validation"
            novalidate
          >
            <h3 className="text-alternate text-primary">All Parkings</h3>
            <div className="d-flex justify-content-center">
              <table className="table table-striped table-responsive">
                <tr>
                  <th>Sno</th>
                  <th>Project</th>
                  <th>Building</th>
                  <th>Parkings</th>
                  <th>Total Parking Area(square feet)</th>
                  <th>Single Parking Area(square feet)</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
                {AllParking?.map((i, j) => {
                  let id = i?._id;
                  return  <ParkingTable i={i} j={j} setIsEdit={setIsEdit} setCreateParking={setCreateParking} CreateParking={CreateParking} setAllBuilding={setAllBuilding} setBuilding={setBuilding} setAllParking={setAllParking} id={id} />;
                })}
              </table>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default CreateParking;
