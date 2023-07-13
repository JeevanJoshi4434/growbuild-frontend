import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { Edit, Trash } from "react-feather";
import swal from "sweetalert";
const CreateUnit = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [allUnit, setAllUnit] = useState(null);
  const [CreateUnit, setCreateUnit] = useState({
    Project: null, building: null, unit_name: null, total_area_this_unit: null, carpet_area: null, build_up_area: null, balcony_area: null, total_number_of_flat_on_this_unit: null, parking_detail: null, extra_facilities: null, id: null
  });
  const [allBuilding, setAllBuilding] = useState(null);
  const [Building, setBuilding] = useState(null);
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCreateUnit({ ...CreateUnit, [name]: value });
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

  const createUnit = async () => {
    const res = await axios.post(process.env.REACT_APP_PORT + '/api/create/unit', {
      Project: CreateUnit.Project,
      building: CreateUnit.building,
      unit_name: CreateUnit.unit_name,
      total_area_this_unit: CreateUnit.total_area_this_unit,
      carpet_area: CreateUnit.carpet_area,
      build_up_area: CreateUnit.build_up_area,
      balcony_area: CreateUnit.balcony_area,
      total_number_of_flat_on_this_unit: CreateUnit.total_number_of_flat_on_this_unit,
      parking_detail: CreateUnit.parking_detail,
      extra_facilities: CreateUnit.extra_facilities
    })
    if (res.status === 200) {
      window.alert("Unit Upload Done!");
      history.go(0);
    }
  }

  const deleteUnit = async () => {
    const res = await axios.delete(`${process.env.REACT_APP_PORT}/api/delete/unit/${CreateUnit._id}`)
    if (res.status === 200) {
      window.alert("Unit Deleted!");
      getAllUnits();
      history.go(0);
    }
  }
  const edit = async (data) => {
    setCreateUnit({ ...CreateUnit, Project: data?.Project, building: data?.building, unit_name: data?.unit_name, total_area_this_unit: data?.total_area_this_unit, carpet_area: data?.carpet_area, build_up_area: data?.build_up_area, balcony_area: data?.balcony_area, total_number_of_flat_on_this_unit: data?.total_number_of_flat_on_this_unit, parking_detail: data?.parking_detail, extra_facilities: data?.extra_facilities, id: data?._id });
    setIsEdit(true)
    await getBuildings(data?.Project);
    setCreateUnit({ ...CreateUnit, Project: data?.Project, building: data?.building, unit_name: data?.unit_name, total_area_this_unit: data?.total_area_this_unit, carpet_area: data?.carpet_area, build_up_area: data?.build_up_area, balcony_area: data?.balcony_area, total_number_of_flat_on_this_unit: data?.total_number_of_flat_on_this_unit, parking_detail: data?.parking_detail, extra_facilities: data?.extra_facilities, id: data?._id });
  }

  const updateUnit = async (id) => {
    const res = await axios.put(`${process.env.REACT_APP_PORT}/api/update/unit/${id}`, {
      Project: CreateUnit.Project,
      building: CreateUnit.building,
      unit_name: CreateUnit.unit_name,
      total_area_this_unit: CreateUnit.total_area_this_unit,
      carpet_area: CreateUnit.carpet_area,
      build_up_area: CreateUnit.build_up_area,
      balcony_area: CreateUnit.balcony_area,
      total_number_of_flat_on_this_unit: CreateUnit.total_number_of_flat_on_this_unit,
      parking_detail: CreateUnit.parking_detail,
      extra_facilities: CreateUnit.extra_facilities
    })
    if (res.status === 200) {
      swal("Unit Updated!");
      setTimeout(() => {
        history.go(0);
      }, 2000);
    }
  }


  const getAllUnits = async()=>{
    const res = await axios.get(process.env.REACT_APP_PORT + '/api/all/unit', {
      Headers: {
        'Content-Type': 'application/json'
      }
    })
    setAllUnit(res.data);
  }
  useEffect(() => {
    getAllUnits();
  }, [])
  
  return (
    <>
      <div className="container bg-white p-2 rounded-2">
        <form className="row px-4 py-4 mx-2 my-2 justify-content-center shadow-lg">
          <h3 className="text-alternate text-primary">Create New Unit</h3>
          <hr />

          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Select Project</p>
            <div className="input-group">
              <select className="form-control" id="project" onChange={(e) => { handleInputs(e); getBuildings(e.target.value); }} name="Project" value={CreateUnit.Project}>
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
              <select className="form-control" id="building" name="building" onChange={(e) => { handleInputs(e); getBuildingDetail(e.target.value) }} value={CreateUnit.building} >
                {CreateUnit.project === null ? <option value={null} name={null} >First select Project</option>
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
            <p className="text-alternate">Unit Name</p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="unitName"
                name="unit_name"
                onChange={handleInputs}
                value={CreateUnit.unit_name}
                required=""
              />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Total Area This Unit</p>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="totalArea"
                name="total_area_this_unit"
                onChange={handleInputs}
                value={CreateUnit.total_area_this_unit}
                required=""
              />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Carpet Area</p>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="carpet"
                name="carpet_area"
                onChange={handleInputs}
                value={CreateUnit.carpet_area}
                required=""
              />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Built-Up Area</p>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="builtup"
                name="build_up_area"
                onChange={handleInputs}
                value={CreateUnit.build_up_area}
                required=""
              />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Balcony Area</p>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="balcony"
                name="balcony_area"
                onChange={handleInputs}
                value={CreateUnit.balcony_area}
                required=""
              />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Total No Of Flat On This Unit</p>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="totalflats"
                name="total_number_of_flat_on_this_unit"
                onChange={handleInputs}
                value={CreateUnit.total_number_of_flat_on_this_unit}
                required=""
              />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Parking Details</p>
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
                aria-label="No Of Parking"
                placeholder="Enter Total No Of Parkings"
                className="form-control"
                name='parking_detail'
                onChange={handleInputs}
                value={CreateUnit.parking_detail}
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
                onChange={handleInputs}
                value={CreateUnit.extra_facilities}
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
                    setCreateUnit({
                      ...CreateUnit,
                      Project: null,
                      building: null,
                      unit_name: null,
                      total_area_this_unit: null,
                      carpet_area: null,
                      build_up_area: null,
                      balcony_area: null,
                      total_number_of_flat_on_this_unit: null,
                      parking_detail: null,
                      extra_facilities: null, id: null
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
                  onClick={() => updateUnit(CreateUnit?.id)}
                >
                  {" "}
                  Update{" "}
                </button>
              </>
            ) : (
              <button
                type="button"
                class="btn btn-outline-primary btn-md mb-1 mr-1"
                onClick={() => createUnit()}
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
            <h3 className="text-alternate text-primary">All Parkings</h3>
            <div className="d-flex justify-content-center">
              <table className="table table-striped table-responsive">
                <tr>
                  <th>Sno</th>
                  <th>Unit Name</th>
                  <th>Balcony Area</th>
                  <th>Build Up Area</th>
                  <th>Carpet Area</th>
                  <th>Total Area</th>
                  <th>Action</th>
                </tr>
                {allUnit?.map((i, j) => {
                  let id = i?._id;
                  console.log(i);
                  return (
                    <tr>
                      <td>{j + 1}</td>
                      <td>{i?.unit_name}</td>
                      <td>{i?.balcony_area}</td>
                      <td>{i?.build_up_area}</td>
                      <td>{i?.carpet_area}</td>
                      <td>{i?.total_area_this_unit}</td>
                      <td>
                        <Edit className="cursor-pointer" color="green" size={30} onClick={() => { edit(i) }} />
                        <Trash
                          className="cursor-pointer"
                          color="red"
                          size={30}
                          onClick={() => {
                            deleteUnit(id);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </form>
        }
      </div>
    </>
  );
};

export default CreateUnit;
