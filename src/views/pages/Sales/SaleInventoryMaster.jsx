import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RequiredField } from '../../../utility/RequiredField';
import axios from 'axios';
const SaleInventoryMaster = () => {
  const [createInventory, setCreateInventory] = useState({
    Project:null, block:null, DP_discount:null,unit_number:null, RS_squareFeet:null,buildUpArea:null,carpetArea:null, balconyArea:null, salableArea:null, floor:null, bedrooms:null, unit_type:null,numOfUnits:null, optionalUnit:null 
  })
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
  let name,value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCreateInventory({ ...createInventory, [name]: value });
  }
  return (
    <>
      <div className='container bg-white p-2 rounded-2'>
        <form className="row needs-validation" novalidate>
          <div className="col-md-10 col-12">
            <label htmlFor="companyName" className="text-alternate mb-1">{RequiredField} Project</label>
            <div className="input-group mb-1">
            <select className="form-control" id="project" onChange={(e) => { handleInputs(e);}} name="Project" value={createInventory.Project}>
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
            <label htmlFor="companyName" className="text-alternate mb-1">{RequiredField} Block</label>
            <div className="input-group mb-3">
              <select className="form-control" id="companyName" name="companyName" required>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
          </div>
          <div className='col-md-2 col-12 justify-content-center d-flex flex-column align-item-center' >
            <button className="btn btn-outline-primary" type="button">Print</button>
          </div>
          <div className='col-md-3 col-12 justify-content-center d-flex flex-column align-item-center' >
            <p className="text-alternate">DP Discount(%)</p>
            <input type="text" className="form-control" id="DPDiscount" name="DPDiscount" required="" />
          </div>
        </form>
        <form className='row'>
          <div className="col-md-3 col-12">
            <label id='Unit' className="text-alternate mb-3">{RequiredField}Unit Type</label>
            <div className="input-group mb-3">
              <textarea required className="form-control" id="Unit" name="Unit" ></textarea>
            </div>
          </div>
          <div className='row col-md-9 col-12'>
            <div className="col-md-2 col-12">
              <label id='Units' className="text-alternate mb-3">{RequiredField}Unit/No.</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" id="Units" name="Units" required />
              </div>
            </div>
            <div className="col-md-2 col-12">
              <label htmlFor='SFTprice' className="text-alternate mb-3">{RequiredField}Rs. /SFt</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" id="SFTprice" name="SFTprice" required="" />
              </div>
            </div>
            <div className="col-md-2 col-12">
              <p className="text-alternate mb-2">Build Up Area(SFt)</p>
              <div className="input-group mb-3">
                <input type="text" className="form-control" id="Exta" name="Exta" required="" />
              </div>
            </div>
            <div className="col-md-2 col-12">
              <p className="text-alternate mb-2">Carpet Area(SFt)</p>
              <div className="input-group mb-3">
                <input type="number" className="form-control" id="MobileNo" name="MobileNo" required="" />
              </div>
            </div>
            <div className="col-md-2 col-12">
              <p className="text-alternate mb-3">Balcony Area</p>
              <div className="input-group mb-3">
                <input type="text" className="form-control" id="PagerNo" name="PagerNo" required="" />
              </div>
            </div>
            <div className="col-md-4 col-12">
              <label htmlFor='salable' className="text-alternate mb-1">{RequiredField}Salable Area</label>
              <div className="input-group mb-1">
                <input type="text" className="form-control" id="salable" name="salable" required/>
              </div>
              <label htmlFor='floor' className="text-alternate mb-1">{RequiredField}Floor</label>
              <select className="form-control" id="companyName" name="companyName" required>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
              <label htmlFor='bedRoom' className="text-alternate mb-1">{RequiredField}Bed Rooms</label>
              <select className="form-control mb-3" id="companyName" name="companyName" required>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
            <div className="col-md-7 col-12">
              <label id='Unit' className="text-alternate mb-3">{RequiredField}Unit Type</label>
              <div className="input-group mb-3">
                <textarea required className="form-control" id="Unit" name="Unit" ></textarea>
              </div>
            </div>
          </div>

          <div className="col-md-1 col-12 d-flex flex-column" >
            <button type="button" class="btn btn-outline-primary btn-sm mb-1"> &gt; &gt; </button>
            <button type="button" class="btn btn-outline-primary btn-sm mb-1"> &lt; &lt; </button>
            <button type="button" class="btn btn-outline-primary btn-sm mb-1">&#10005;</button>
            <button type="button" class="btn btn-outline-primary btn-sm mb-1">Cls</button>
          </div>
          <div className="col-md-11 col-12">
            <div className=" d-flex justify-content-between"><p className='text-alternate'>Unit</p><p className='text-alternate'>Unit No.</p><p className='text-alternate'>Rs./SFt</p><p className='text-alternate'>Stable Area (SFt)</p><p className='text-alternate'>Floor</p><p className='text-alternate'>Bed Rooms</p></div>
            <div className="input-group mb-3">
              <textarea className="form-control" id="ownerList" name="OwnerList" required=""></textarea>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className=" d-flex justify-content-between"><p className='text-alternate'>Optional Units</p></div>
            <div className="input-group mb-3">
              <textarea className="form-control" id="ownerList" name="OwnerList" required=""></textarea>
            </div>
          </div>

          <div className="col-md-2 mt-1 col-12 d-flex flex-column" >
            <div className=" d-flex flex-column"><p className='text-alternate'>No. of Units</p></div>
            <input className='form-control' type="text" id="NoofUnits" name="NoofUnits" />
          </div>
          <div className="col-md-1 mt-1 col-12 d-flex flex-column" >
            <button type="button" class="btn btn-outline-primary btn-sm mb-1"> &gt; &gt; </button>
            <button type="button" class="btn btn-outline-primary btn-sm mb-1"> &lt; &lt; </button>
            <button type="button" class="btn btn-outline-primary btn-sm mb-1">&#10005;</button>
            <button type="button" class="btn btn-outline-primary btn-sm mb-1">Cls</button>
          </div>
          <div className="col-md-5 col-12">
            <div className=" d-flex justify-content-between"><p className='text-alternate'>Optional Units</p><p className='text-alternate'>Nos.</p></div>
            <div className="input-group mb-3">
              <textarea className="form-control" id="ownerList" name="OwnerList" required=""></textarea>
            </div>
          </div>
        </form>
        <form className='row'>
          <div className="col-md-3 col-12 p-1">
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1"> Add </button>
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1"> Edit </button>
          </div>
          <div className="col-md-6 col-12 p-1">
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1"> View </button>
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1"> Delete </button>
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1"> Clear </button>
          </div>
          <div className="col-md-3 col-12 p-1">
            <button type="submit" class="btn btn-outline-primary btn-md mb-1 mr-1"> Ok </button>
            <button type="button" class="btn btn-outline-primary btn-md mb-1 mr-1"> Exit </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SaleInventoryMaster
