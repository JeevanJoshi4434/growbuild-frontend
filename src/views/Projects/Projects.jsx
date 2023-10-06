import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';
import { Edit, Trash } from 'react-feather';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const Projects = () => {
  const [isEdit, setIsEdit] = useState(false);
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
  const [newProject, setNewProject] = useState({
    Name: null, developer: null, floorNumber: null, startingDate: null, endDate: null, CI: null, demand: null, NOI: null, location: null, address: null, owner: null, profitCenter: null, description: null,id:null
  })
  const [AllDevelopers, setAllDevelopers] = useState(null);
  const getDevelopers = async () => {
    const res = await axios.get(process.env.REACT_APP_PORT + '/api/all/dev', {
      Headers: {
        'Content-Type': 'application/json'
      }
    })
    setAllDevelopers(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    getDevelopers();
    getProject();
  }, []);
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setNewProject({ ...newProject, [name]: value })
  }
  console.log(newProject);
  const uploadProject = async () => {
    const res = await axios.post(process.env.REACT_APP_PORT + '/api/create/project', {
      Name: newProject.Name,
      developer: newProject.developer,
      floorNumber: newProject.floorNumber,
      startingDate: newProject.startingDate,
      endDate: newProject.endDate,
      CI: newProject.CI,
      demand: newProject.demand,
      NOI: newProject.NOI,
      location: newProject.location,
      address: newProject.address,
      owner: newProject.owner,
      profitCenter: newProject.profitCenter,
      description: newProject.description
    })
    if (res.status === 200) {
      window.alert("Project Upload Done!");
      history.go(0);
    }
  }
  const edit = (data)=>{
    setNewProject({...newProject, Name: data?.Name, developer: data?.developer, floorNumber: data?.floorNumber, startingDate: data?.startingDate, endDate: data?.endDate, CI: data?.CI, demand: data?.demand, NOI: data?.NOI, location: data?.location, address: data?.address, owner: data?.owner, profitCenter: data?.profitCenter, description: data?.description,id:data?._id});
    setIsEdit(true);
  }
  
  const deleteProject = async(id)=>{
  const willDelete = await swal({
    title: "Are you sure?",
      text: "Are you sure that you want to delete this Project?",
      icon: "warning",
      dangerMode: true,
    });
     
    if (willDelete) {
      const res = await axios.delete(process.env.REACT_APP_PORT + '/api/delete/project/'+id,{
        Headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(res.data);
      getProject();
    }
    willDelete();
  }

  const updateProject = async(id)=>{
    const res = await axios.put(process.env.REACT_APP_PORT + '/api/update/project/'+id,{
      Name: newProject.Name,
      developer: newProject.developer,
      floorNumber: newProject.floorNumber,
      startingDate: newProject.startingDate,
      endDate: newProject.endDate,
      CI: newProject.CI,
      demand: newProject.demand,
      NOI: newProject.NOI,
      location: newProject.location,
      address: newProject.address,
      owner: newProject.owner,
      profitCenter: newProject.profitCenter,
      description: newProject.description
    })
    if(res.status === 200){
      await swal('Uploaded successfully', "success");
      isEdit(false);
      setNewProject({...newProject,Name: null, developer: null, floorNumber: null, startingDate: null, endDate: null, CI: null, demand: null, NOI: null, location: null, address: null, owner: null, profitCenter: null, description: null,id:null});
      history.go(0);
    }
  }
  return (
    <>
      <div className="container bg-white p-2 rounded-2">
        <div className="row px-4 py-4 mx-2 my-2 shadow-lg">
          <h3 className="text-alternate text-primary">Create Project</h3>
          <hr />
          <div className="col-md-6 col-12">
            <p className="text-alternate">Project Name</p>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="projectName"
                name="Name"
                onChange={handleInputs}
                value={newProject.Name}
                required=""
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate">Select Developer</p>
            <div className="input-group mb-2">
              <select onChange={handleInputs} className="form-control" id="day" name="developer" value={newProject.developer}>
                {AllDevelopers === null ? <option name='null' value="null">Loading</option> :
                  <option name='null' value="null">Select Developer</option>}
                {AllDevelopers !== null && AllDevelopers?.map((i) => {
                  return (
                    <>
                      <option name={i?._id} value={i?._id}>{i?.Company}</option>
                    </>
                  )
                })
                }
              </select>
            </div>
          </div>
          {/* <div className="col-md-6 col-12">
            <p className="text-alternate">Enter No Of Floor</p>
            <div className="input-group mb-2">
              <input
                type="number"
                className="form-control"
                id="floor"
                name="floorNumber"
                onChange={handleInputs}
                value={newProject.floorNumber}
                required=""
              />
            </div>
          </div> */}
          <div className="col-md-6 col-12">
            <p className="text-alternate">Start Date</p>
            <div className="input-group mb-2">
              <input
                type="date"
                className="form-control"
                id="startDate"
                name="startingDate"
                required=""
                onChange={handleInputs}
                value={newProject.startingDate}
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate">End Date</p>
            <div className="input-group mb-2">
              <input
                type="date"
                className="form-control"
                id="endDate"
                name="endDate"
                required=""
                onChange={handleInputs}
                value={newProject.endDate}
              />
            </div>
          </div>
          {/* <div className="col-md-4 col-12">
            <p className="text-alternate ">Compound Interest (in %)</p>
            <div className="input-group mb-2">
              <span className="input-group-text">
                <input
                  aria-label="Compound Interest"
                  id="compoundInterest"
                  name="compoundInterest"
                  type="radio"

                  className="form-check-input"
                />
              </span>
              <input
                aria-label="Rate of Interest (Rs.)"
                placeholder="Rate of Interest (Rs.)"
                className="form-control"
                name='CI'
                onChange={handleInputs}
                value={newProject.CI}
              />
            </div>
          </div> */}
          <div className="col-md-4 col-12">
            <p className="text-alternate">Demand</p>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="projectName"
                name="demand"
                onChange={handleInputs}
                value={newProject.demand}
                required=""
              />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <p className="text-alternate">No of Interval</p>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="projectName"
                name="NOI"
                onChange={handleInputs}
                value={newProject.NOI}
                required=""
              />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <p className="text-alternate">Owner</p>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="owner"
                name="owner"
                onChange={handleInputs}
                value={newProject.owner}
                required=""
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate">Location</p>
            <div className="input-group mb-2">
              <textarea
                className="form-control"
                id="location"
                name="location"
                onChange={handleInputs}
                value={newProject.location}
                required=""
              ></textarea>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <p className="text-alternate">Address</p>
            <div className="input-group mb-2">
              <textarea
                className="form-control"
                id="address"
                name="address"
                onChange={handleInputs}
                value={newProject.address}
                required=""
              ></textarea>
            </div>
          </div>
          
          {/* <div className="col-md-6 col-12">
            <p className="text-alternate">Profit Centre</p>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="profitCentre"
                name="profitCenter"
                onChange={handleInputs}
                value={newProject.profitCenter}
                required=""
              />
            </div>
          </div> */}
          <div className="col-md-12 col-12">
            <p className="text-alternate">Description</p>
            <div className="input-group mb-2">
              <textarea
                className="form-control"
                id="projectDes"
                name="description"
                onChange={handleInputs}
                value={newProject.description}
                required=""
              ></textarea>
            </div>
          </div>
          <div className="col-md-12 col-12 text-right">
          {isEdit
              ?<>
              <button type="button" class="btn btn-outline-warning btn-md mb-1 mr-1" onClick={()=>{ setNewProject({...newProject,Name: null, developer: null, floorNumber: null, startingDate: null, endDate: null, CI: null, demand: null, NOI: null, location: null, address: null, owner: null, profitCenter: null, description: null,id:null});setIsEdit(false); }} > Exit </button>
            <button type="submit" class="btn btn-outline-primary btn-md mb-1 mr-1" onClick={() => updateProject(newProject?.id)}> Update </button>
              </>:
            <button type="submit" class="btn btn-outline-primary btn-md mb-1 mr-1" onClick={() => uploadProject()}> Create </button>}
          </div>
        </div>

        {!isEdit && <form
          className="row  px-4 py-4 mx-2 my-2 shadow-lg needs-validation"
          novalidate
        >
          <h3 className="text-alternate text-primary">All Developer</h3>
          <div className="d-flex justify-content-center">
            <table className="table table-striped table-responsive" >
              <tr>
                <th>Sno</th>
                <th>Project</th>
                <th>owner</th>
                <th>Starting Date</th>
                <th>Action</th>
              </tr>
              {AllProjects?.map((i, j) => {
                let id = i?._id;
                return (
                  <tr>
                    <td>{j + 1}</td>
                    <td>{i?.Name}</td>
                    <td>{i?.owner}</td>
                    <td>{i?.startingDate}</td>
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
}

export default Projects
