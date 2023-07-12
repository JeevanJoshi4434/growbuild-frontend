import React, { useEffect } from "react";
import { useState } from "react";
import { RequiredField } from "../../../utility/RequiredField";
import AllDevs from './AllDevs';
import axios from 'axios';
import { Eye, Edit, Trash, Search } from "react-feather";
import swal from "sweetalert";
const Developers = () => {
  const [AllDeveloper, setAllDeveloper] = useState(null);
  const [Developer, setDeveloper] = useState({
    Company: '', name: '', phoneNumber: '', faxNumber: '', email: '', address: '', description: '', GSTIN: '', designation: '', phone_res: '', phone_office: '', mobileNumber: '',id:null
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setDeveloper({ ...Developer, [name]: value });
  }
  const [isEdit, setIsEdit] = useState(false);
  const onSubmit = async () => {
    const res = await axios.post("/api/create/dev", {
      Company: Developer.Company,
      name: Developer.name,
      phoneNumber: Developer.phoneNumber,
      faxNumber: Developer.faxNumber,
      email: Developer.email,
      address: Developer.address,
      description: Developer.description,
      GSTIN: Developer.GSTIN,
      designation: Developer.designation,
      phone_res: Developer.phone_res,
      phone_office: Developer.phone_office,
      mobileNumber: Developer.mobileNumber
    })
    if (res.status === 200) {
      console.log(res.data);
      console.log("Created!");
    }
  }
  const updateUser = async (id) => {
    const res = await axios.put("/api/update/dev/"+id, {
      Company: Developer.Company,
      name: Developer.name,
      phoneNumber: Developer.phoneNumber,
      faxNumber: Developer.faxNumber,
      email: Developer.email,
      address: Developer.address,
      description: Developer.description,
      GSTIN: Developer.GSTIN,
      designation: Developer.designation,
      phone_res: Developer.phone_res,
      phone_office: Developer.phone_office,
      mobileNumber: Developer.mobileNumber
    })
    if (res.status === 200) {
      console.log(res.data);
      console.log("Updated!");
    }
  }

  const getDevelopers = async () => {
    const res = await axios.get('/api/all/dev', {
      Headers: {
        'Content-Type': 'application/json'
      }
    })
    setAllDeveloper(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    getDevelopers();
  }, [])
  const view = (user)=>{
      console.log(user);
    }
  const edit = (data)=>{
    setDeveloper({...Developer, Company:data?.Company, name: data?.name, phoneNumber: data?.phoneNumber, faxNumber: data?.faxNumber, email: data?.email, address: data?.address, description: data?.description, GSTIN: data?.GSTIN, designation: data?.designation, phone_res: data?.phone_res, phone_office: data?.phone_office, mobileNumber: data?.mobileNumber,id:data?._id});
    setIsEdit(true);
    console.log(Developer)
  }
  
  const deleteUser = async(id)=>{
  const willDelete = await swal({
    title: "Are you sure?",
      text: "Are you sure that you want to delete this file?",
      icon: "warning",
      dangerMode: true,
    });
     
    if (willDelete) {
      const res = await axios.delete('/api/delete/dev/'+id,{
        Headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(res.data);
      getDevelopers();
    }
    willDelete();
  }
  return (
    <>
      <div className="container bg-white p-2 rounded-2">
        <form
          className="row px-4 py-4 mx-2 my-2 shadow-lg needs-validation"
          novalidate
        >
          <h3 className="text-alternate text-primary">Add Developer</h3>
          <hr />
          <div className="col-md-6 col-12 mb-2">
            <label htmlFor="companyName" className="text-alternate mb-2">
              {" "}
              Company Name {RequiredField}
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="Company"
              required=""
              onChange={handleInputs}
              value={Developer.Company}
            />
          </div>
          <div className="col-md-6 col-12 mb-2">
            <label htmlFor="tele" className="text-alternate mb-2">
              {" "}
              Phone No {RequiredField}
            </label>
            <input
              type="number"
              className="form-control"
              id="tele"
              name="phoneNumber"
              required=""
              onChange={handleInputs}
              value={Developer.phoneNumber}
            />
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Fax No.</p>
            <input
              type="text"
              className="form-control"
              id="FaxNo"
              name="faxNumber"
              required=""
              value={Developer.faxNumber}
              onChange={handleInputs}
            />
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">E-mail {RequiredField}</p>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required=""
              value={Developer.email}
              onChange={handleInputs}
            />
          </div>

          <div className="col-md-12 col-12 mb-2">
            <p className="text-alternate">Address</p>
            <div className="input-group">
              <textarea
                className="form-control"
                id="Address"
                name="address"
                required=""
                onChange={handleInputs}
                value={Developer.address}
              ></textarea>
            </div>
          </div>
          <div className="col-md-12 col-12 mb-2">
            <p className="text-alternate">Description</p>
            <div className="input-group">
              <textarea
                className="form-control"
                id="Description"
                name="description"
                onChange={handleInputs}
                value={Developer.description}
                required=""
              ></textarea>
            </div>
          </div>
          <div className="col-md-12 col-12 mb-2">
            <p className="text-alternate">GSTIN  {RequiredField}</p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="GSTIN"
                name="GSTIN"
                onChange={handleInputs}
                value={Developer.GSTIN}
                required=""
              />
            </div>
          </div>
          <hr />
          <h4 className="text-alternate text-primary">Key Persons</h4>
          <div className="col-md-6 col-12 mb-2">
            <label id="keyPersonName" className="text-alternate">
              Name {RequiredField}
            </label>
            <div className="input-group">
              <input
                type="name"
                className="form-control"
                id="keyPersonName"
                name="name"
                onChange={handleInputs}
                value={Developer.name}
                required
              />
              <div class="invalid-feedback">
                Please enter Name.
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <label id="keyPersonDesignation" className="text-alternate">
              Designation {RequiredField}
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="Designation"
                name="designation"
                onChange={handleInputs}
                value={Developer.designation}
                required
              />
              <div class="invalid-feedback">
                Please enter Designation.
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">phone(Res)</p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="keyPersonNo"
                name="phone_res"
                onChange={handleInputs}
                value={Developer.phone_res}
                required=""
              />
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">phone(Office)</p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="officeNo"
                name="phone_office"
                onChange={handleInputs}
                value={Developer.phone_office}
                required=""
              />
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Mobile Phone</p>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="MobileNo"
                name="mobileNumber"
                onChange={handleInputs}
                value={Developer.mobileNumber}
                required=""
              />
            </div>
          </div>
          <div className="col-md-12 col-12 text-right">
            {isEdit
              ?<>
              <button type="button" class="btn btn-outline-warning btn-md mb-1 mr-1" onClick={()=>{ setDeveloper({...Developer,Company: '', name: '', phoneNumber: '', faxNumber: '', email: '', address: '', description: '', GSTIN: '', designation: '', phone_res: '', phone_office: '', mobileNumber: '',id:null});setIsEdit(false); }} > Exit </button>
            <button type="submit" class="btn btn-outline-primary btn-md mb-1 mr-1" onClick={() => updateUser(Developer?.id)}> Update </button>
              </>:
            <button type="submit" class="btn btn-outline-primary btn-md mb-1 mr-1" onClick={() => onSubmit()}> Create </button>}
          </div>
        </form>
        {!isEdit && <form
          className="row px-4 py-4 mx-2 my-2 shadow-lg needs-validation"
          novalidate
        >
          <h3 className="text-alternate text-primary">All Developer</h3>
          <div className="d-flex justify-content-center">
            <table className="table table-striped table-responsive" >
              <tr>
                <th>Sno</th>
                <th>Company</th>
                <th>Key Person</th>
                <th>Number</th>
                <th>Action</th>
              </tr>
              {AllDeveloper?.map((i,j) => {
                let id = i?._id;
                return (
                  <tr>
                    <td>{j+1}</td>
                    <td>{i?.Company}</td>
                    <td>{i?.name}</td>
                    <td>{i?.mobileNumber}</td> 
                    <td><Edit className="cursor-pointer" color="green" size={30} onClick={()=>{edit(i)}}  /><Trash className="cursor-pointer" color="red" size={30} onClick={()=>{deleteUser(id)}}  /></td>
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

export default Developers;
