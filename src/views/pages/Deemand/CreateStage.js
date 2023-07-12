import axios from "axios";
import React, { useState, useEffect } from "react";
import { Edit, Trash } from "react-feather";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
const CreateStage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [AllStage, setAllStage] = useState(null);
  const [Demand, setDemand] = useState({
    Project: null, Building: null, stage_name: null, amount: null, extra_facilities: null
  })
  const [allBuilding, setAllBuilding] = useState(null);
  const [Building, setBuilding] = useState(null);
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setDemand({ ...Demand, [name]: value });
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
      console.log(res.data);
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
      console.log(res.data);
    }
  }

  const createDemand = async()=>{
    const res = await axios.post('/api/create/demand',{
      Project: Demand.Project,
      Building: Demand.Building,
      stage_name: Demand.stage_name,
      amount: Demand.amount,
      extra_facilities: Demand.extra_facilities
    })
    if(res.status === 200){
      window.alert('Stage Created!');
      window.location.reload();
    }else{
      window.alert('Something went wrong!');
    }
  }
  const edit = async(data)=>{
    setDemand({...Demand, Project: data?.Project, Building: data?.Building, stage_name: data?.stage_name, amount: data?.amount, extra_facilities: data?.extra_facilities,id:data?._id});
    setIsEdit(true)
    await getBuildings(data?.Project);
    setDemand({...Demand,building:data?.building});
    await getBuildingDetail(data?.building);
    setDemand({...Demand, Project: data?.Project, Building: data?.Building, stage_name: data?.stage_name, amount: data?.amount, extra_facilities: data?.extra_facilities,id:data?._id});
   }
   const deleteFlat= async(id)=>{
   const willDelete = await swal({
     title: "Are you sure?",
       text: "Are you sure that you want to delete this Block?",
       icon: "warning",
       dangerMode: true,
     });
      
     if (willDelete) {
       const res = await axios.delete('/api/delete/flat/'+id,{
         Headers: {
           'Content-Type': 'application/json'
         }
       })
       getAllStage();
     }
     willDelete();
   }
   const updateFlat = async(id)=>{
     const res = await axios.put('/api/update/demand/'+id,{
      Project: Demand.Project,
      Building: Demand.Building,
      stage_name: Demand.stage_name,
      amount: Demand.amount,
      extra_facilities: Demand.extra_facilities
     })
     if(res.status===200){
       swal('Stage Updated successfully!','success')
       setTimeout(() => {
         history.go(0);
       }, 2000);
     }
   }
  const getAllStage = async()=>{
      const res = await axios.get(`/api/get/all/demand`,{
        Headers: {
          'Content-Type': 'application/json'
        }
      })
      setAllStage(res.data);
  }
  useEffect(() => {
    getAllStage();
  }, [])
  
  return (
    <>
      <div className="container bg-white p-2 rounded-2">
        <form
          className="row px-4 py-4 mx-2 my-2 shadow-lg needs-validation"
          novalidate
        >
          <h3 className="text-alternate text-primary">Create New Stage</h3>
          <hr />
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Select Project</p>
            <div className="input-group">
            <select className="form-control" id="project" onChange={(e) => { handleInputs(e); getBuildings(e.target.value); }} name="Project" value={Demand.Project}>
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
            <select className="form-control" id="building" name="Building" onChange={(e)=>{handleInputs(e);getBuildingDetail(e.target.value)}} value={Demand.Building} >
                {Demand.Project === null ? <option value={null} name={null} >First select Project</option>
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
            <label htmlFor="stageName" className="text-alternate mb-2">
              {" "}
              Stage Name
            </label>
            <input
              type="text"
              className="form-control"
              id="stageName"
              name="stage_name"
              onChange={handleInputs}
              value={Demand.stage_name}
              required=""
            />
          </div>
          <div className="col-md-6 col-12 mb-2">
            <label htmlFor="ammount" className="text-alternate mb-2">
              {" "}
              Ammount
            </label>
            <input
              type="number"
              className="form-control"
              id="ammount"
              name="amount"
              onChange={handleInputs}
              value={Demand.amount}
              required=""
            />
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
                value={Demand.extra_facilities}
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
                    setDemand({
                      ...Demand,
                      Project: null, Building: null, stage_name: null, amount: null, extra_facilities: null,id:null
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
                  onClick={() => updateFlat(Demand.id)}
                >
                  {" "}
                  Update{" "}
                </button>
              </>
            ) : (
              <button
                type="button"
                class="btn btn-outline-primary btn-md mb-1 mr-1"
                onClick={() => createDemand()}
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
                  <th>Stage Name</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
                {AllStage?.map((i, j) => {
                  let id = i?._id;
                  return (
                    <tr>
                      <td>{j + 1}</td>
                      <td>{i?.stage_name}</td>
                      <td>{i?.amount}</td>
                      <td>
                        <Edit className="cursor-pointer" color="green" size={30} onClick={() => { edit(i) }} />
                        <Trash
                          className="cursor-pointer"
                          color="red"
                          size={30}
                          onClick={() => {
                            deleteFlat(id);
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

export default CreateStage;
