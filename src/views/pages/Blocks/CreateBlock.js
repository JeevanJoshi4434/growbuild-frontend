import axios from "axios";
import React, { useEffect, useState } from "react";
import { Edit, Trash } from "react-feather";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
const CreateBlock = () => {
  var history = useHistory();
  const [isEdit, setIsEdit] = useState(false);
  const [AllBuilding, setAllBuilding] = useState(null);
  const [AllProjects, setAllProjects] = useState(null);
  const [createBlock, setCreateBlock] = useState({
    Project:null, buildingName:null, total_number_of_floors:null, total_number_of_flats:null, parkings:null,id:null
  })
  const getProject = async()=>{
    const res = await axios.get(process.env.REACT_APP_PORT + '/api/all/project',{
      Headers: {
        'Content-Type': 'application/json'
      }
    })
    setAllProjects(res.data);
  }
  useEffect(() => {
    getProject();
  }, [])
  console.log(AllProjects);
  let name,value;
  const handleInputs = (e)=>{
    name = e.target.name;
    value = e.target.value;
    setCreateBlock({...createBlock,[name]:value})
  }

  const uploadBlock = async()=>{
    const res = await axios.post(process.env.REACT_APP_PORT + '/api/create/building',{
      Project:createBlock.Project,
      buildingName:createBlock.buildingName,
      total_number_of_floors:createBlock.total_number_of_floors,
      total_number_of_flats:createBlock.total_number_of_flats,
      parkings:createBlock.parkings
    })
    if(res.status === 200){
      window.alert("Building Upload Done!");
      history.go(0);
    }
  }
  const edit = (data)=>{
    setCreateBlock({...createBlock, Project:data?.Project, buildingName:data?.buildingName, total_number_of_floors:data?.total_number_of_floors, total_number_of_flats:data?.total_number_of_flats, parkings:data?.parkings,id:data?._id});
    setIsEdit(true);
  }
  
  const deleteProject = async(id)=>{
  const willDelete = await swal({
    title: "Are you sure?",
      text: "Are you sure that you want to delete this Block?",
      icon: "warning",
      dangerMode: true,
    });
     
    if (willDelete) {
      const res = await axios.delete(process.env.REACT_APP_PORT + '/api/delete/building/'+id,{
        Headers: {
          'Content-Type': 'application/json'
        }
      })
      getBuilding();
    }
    willDelete();
  }
  const updateBuilding = async(id)=>{
    const res = await axios.put(process.env.REACT_APP_PORT + '/api/update/building/'+id,{
      Project:createBlock.Project,
      buildingName:createBlock.buildingName,
      total_number_of_floors:createBlock.total_number_of_floors,
      total_number_of_flats:createBlock.total_number_of_flats,
      parkings:createBlock.parkings
    })
    if(res.status===200){
      swal('Building Updated successfully!','success')
      history.go(0);
    }
  }
  const getBuilding = async()=>{
      const res = await axios.get(process.env.REACT_APP_PORT + '/api/all/building',{
        Headers:{
          'Content-Type': 'application/json'
        }
      })
      setAllBuilding(res.data);
      console.log(res.data);
  }
  useEffect(() => {
    getBuilding();
  }, [])
  
  return (
    <>
      <div className="container bg-white p-2 rounded-2">
        <form className="row px-4 py-4 mx-2 my-2 justify-content-center shadow-lg">
          <h3 className="text-alternate text-primary">Create Building</h3>
          <hr />
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Select Project</p>
            <div className="input-group">
              <select className="form-control" id="project" name="Project" onChange={handleInputs} value={createBlock.Project} >
                {AllProjects === null ?<option name={null} value={null} >Loading</option>
                :<option name={null} value={null}>Select Project</option>}
                {AllProjects !== null && AllProjects?.length === 0 && <option name={null} value={null} >No projects are Avialable</option>}
                {AllProjects !== null && AllProjects?.length > 0 && AllProjects.map((i)=>{
                    return (
                      <option name={i?._id} value={i?._id}>{i?.Name}</option>
                    )
                })}
              </select>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Building Name</p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="projectName"
                name="buildingName"
                onChange={handleInputs} value={createBlock.buildingName}
                required=""
              />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Total No of Floors</p>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="floors"
                name="total_number_of_floors"
                onChange={handleInputs} value={createBlock.total_number_of_floors}
                required=""
              />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Total No Of Flats</p>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="flats"
                name="total_number_of_flats"
                onChange={handleInputs} value={createBlock.total_number_of_flats}
                required=""
              />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-center">Parkings</p>
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
                aria-label="No Of Parking"
                placeholder="Enter Total No Of Parkings"
                className="form-control"
                id="parkings"
                name="parkings"
                onChange={handleInputs} value={createBlock.parkings}
              />
            </div>
          </div>

          <div className="col-md-12 col-12 text-right">
          {isEdit
              ?<>
              <button type="button" class="btn btn-outline-warning btn-md mb-1 mr-1" onClick={()=>{ setCreateBlock({...createBlock,Project:null, buildingName:null, total_number_of_floors:null, total_number_of_flats:null, parkings:null,id:null});setIsEdit(false); }} > Exit </button>
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1" onClick={() => updateBuilding(createBlock?.id)}> Update </button>
              </>:
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1" onClick={() => uploadBlock()}> Create </button>}
          </div>
        </form>

        {!isEdit && <form
          className="row px-4 py-4 mx-2 my-2 shadow-lg needs-validation"
          novalidate
        >
          <h3 className="text-alternate text-primary">All Blocks</h3>
          <div className="d-flex justify-content-center">
            <table className="table table-striped table-responsive" >
              <tr>
                <th>Sno</th>
                <th>Building Name</th>
                <th>Flats</th>
                <th>Floor</th>
                <th>Action</th>
              </tr>
              {AllBuilding?.map((i, j) => {
                let id = i?._id;
                return (
                  <tr>
                    <td>{j + 1}</td>
                    <td>{i?.buildingName}</td>
                    <td>{i?.total_number_of_flats}</td>
                    <td>{i?.total_number_of_floors}</td>
                    <td><Edit className="cursor-pointer" color="green" size={30} onClick={() => { edit(i) }} /><Trash className="cursor-pointer" color="red" size={30} onClick={() => { deleteProject(id) }} /></td>
                  </tr>
                )
              })}

            </table>
          </div>

        </form>}
      </div>
    </>
  );
};

export default CreateBlock;
