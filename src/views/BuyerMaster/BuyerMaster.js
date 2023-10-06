import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Trash } from 'react-feather';
import swal from 'sweetalert';

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

const BuyerMaster = () => {
  const [buyerMaster, setBuyerMaster] = useState({
    Project: null, Building: null, floor: null, unit: null, secondfloor: null, flat: null, parking: null, booking_price: null, booking_date: null, allotment_date: null, agreement_date: null, Owner_name: null, payment_stage: null, price: null, payment_receive: null, payment_type: null, check_number: null, date: null, bank_name: null, branch_name: null, bank_account: null, card_number: null, id: null,price_with_tax: null
  });


  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setBuyerMaster({ ...buyerMaster, [name]: value });
    console.log({ data: buyerMaster });
  }

  const [allUnits, setAllUnits] = useState(null);
  const [allBuilding, setAllBuilding] = useState(null);
  const [Building, setBuilding] = useState(null);
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

  const uploadBuyermaster = async () => {
    const res = await axios.post(`${process.env.REACT_APP_PORT}/api/create/buyermaster`, {
      Project: buyerMaster?.Project,
      Building: buyerMaster?.Building,
      floor: buyerMaster?.floor,
      unit: buyerMaster?.unit,
      secondfloor: buyerMaster?.secondfloor,
      flat: buyerMaster?.flat,
      parking: buyerMaster?.parking,
      booking_price: buyerMaster?.booking_price,
      booking_date: buyerMaster?.booking_date,
      allotment_date: buyerMaster?.allotment_date,
      agreement_date: buyerMaster?.agreement_date,
      Owner_name: buyerMaster?.Owner_name,
      payment_stage: buyerMaster?.payment_stage,
      price: buyerMaster?.price,
      payment_receive: buyerMaster?.payment_receive,
      payment_type: buyerMaster?.payment_type,
      check_number: buyerMaster?.check_number,
      date: buyerMaster?.date,
      bank_name: buyerMaster?.bank_name,
      branch_name: buyerMaster?.branch_name,
      bank_account: buyerMaster?.bank_account,
      card_number: buyerMaster?.card_number,
      price_with_tax: buyerMaster?.price_with_tax
    })
    if (res.status === 200) {
      window.alert('Updated Successfully!');
      window.location.reload();
    } else {
      window.alert('Something Error Happened!');
    }
  }
  const [AllStage, setAllStage] = useState(null);
  const getStage = async (building, project) => {
    if ((building?.length === 12 || building?.length === 24) && (project?.length === 12 || project?.length === 24)) {
      const res = await axios.get(`${process.env.REACT_APP_PORT}/api/demand/${building}/${project}`, {
        Headers: {
          'contnt-type': 'application/json'
        }
      })
      if (res.status === 200) {
        setAllStage(res.data);
        console.log(res.data);
      }
    }
  }
  const [buyerDetail, setBuyerDetail] = useState(null);
  const getBuyerDetail = async (building, project, unit, flat, floor) => {
    if ((building?.length === 12 || building?.length === 24) && (project?.length === 12 || project?.length === 24) && (unit?.length === 12 || unit?.length === 24) && (flat !== 0 || flat !== null) && (floor !== 0 || floor !== null)) {
      const res = await axios.get(`${process.env.REACT_APP_PORT}/api/${building}/${project}/${unit}/${flat}/${floor}`, {
        Headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.status === 200) {
        console.log(res.data);
        let data = res.data;
        setBuyerMaster({
          ...buyerMaster,
          Project: buyerMaster?.Project,
          Building: buyerMaster?.Building,
          floor: buyerMaster?.floor,
          unit: buyerMaster?.unit,
          secondfloor: buyerMaster?.secondfloor,
          flat: buyerMaster?.flat,
          parking: buyerMaster?.parking,
          booking_price: data?.booking_price,
          booking_date: buyerMaster?.booking_date,
          allotment_date: buyerMaster?.allotment_date,
          agreement_date: buyerMaster?.agreement_date,
          Owner_name: data?.first_applicant_name,
          payment_stage: buyerMaster?.payment_stage,
          price: buyerMaster?.price,
          payment_receive: buyerMaster?.payment_receive,
          payment_type: buyerMaster?.payment_type,
          check_number: buyerMaster?.check_number,
          date: buyerMaster?.date,
          bank_name: buyerMaster?.bank_name,
          branch_name: buyerMaster?.branch_name,
          bank_account: buyerMaster?.bank_account,
          card_number: buyerMaster?.card_number,
          price_with_tax: buyerMaster?.price_with_tax
        })
        setBuyerDetail(data);
      }
    }
  }
  const [Demand, setDemand] = useState(null);
  const getDemand = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_PORT}/api/get/demand/${id}`, {
      Headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.status === 200) {
      setDemand(res.data);
      let data = res.data;
      setBuyerMaster({
        ...buyerMaster,
        Project: buyerMaster?.Project,
        Building: buyerMaster?.Building,
        floor: buyerMaster?.floor,
        unit: buyerMaster?.unit,
        secondfloor: buyerMaster?.secondfloor,
        flat: buyerMaster?.flat,
        parking: buyerMaster?.parking,
        booking_price: buyerMaster?.booking_price,
        booking_date: buyerMaster?.booking_date,
        allotment_date: buyerMaster?.allotment_date,
        agreement_date: buyerMaster?.agreement_date,
        Owner_name: buyerMaster?.Owner_name,
        payment_stage: buyerMaster?.payment_stage,
        price: data?.amount,
        payment_receive: buyerMaster?.payment_receive,
        payment_type: buyerMaster?.payment_type,
        check_number: buyerMaster?.check_number,
        date: buyerMaster?.date,
        bank_name: buyerMaster?.bank_name,
        branch_name: buyerMaster?.branch_name,
        bank_account: buyerMaster?.bank_account,
        card_number: buyerMaster?.card_number,
        price_with_tax: buyerMaster?.price_with_tax
      })
    }
  }

  const fetchOwner = async (e) => {
    getDemand(e);
  }
  const fetchDetail = () => {
    if (buyerMaster?.flat !== null || buyerMaster?.flat > 0) {
      getBuyerDetail(buyerMaster.Building, buyerMaster.Project, buyerMaster.unit, buyerMaster.flat, buyerMaster.floor);
    }
  }

  const [getData, setGetData] = useState(null);
  const getDataa = async () => {
    const res = await axios.get(`${process.env.REACT_APP_PORT}/api/get/all/buyermaster`, {
      Headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.status === 200) {
      setGetData(res.data);
      console.log(res.data)
    }
  }
  useEffect(() => {
    getDataa();
  }, [])
  const deletemaster= async(id)=>{
    const willDelete = await swal({
      title: "Are you sure?",
        text: "Are you sure that you want to delete?",
        icon: "warning",
        dangerMode: true,
      });
       
      if (willDelete) {
        const res = await axios.delete(process.env.REACT_APP_PORT + '/api/delete/buyermaster/'+id,{
          Headers: {
            'Content-Type': 'application/json'
          }
        })
        getDataa();
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
          <h3 className="text-alternate text-primary">Payment Master</h3>
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
                name="Project"
                value={buyerMaster.Project}
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
                name="Building"
                onChange={(e) => {
                  handleInputs(e);
                  getBuildingDetail(e.target.value);
                  getUnits(e.target.value, buyerMaster?.Project);
                  getStage(e.target.value, buyerMaster?.Project);
                }}
                value={buyerMaster.Building}
              >
                {buyerMaster.Project === null ? (
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
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Select Floor</p>
            <div className="input-group">
              <select
                className="form-control"
                id="floor"
                name="floor"
                onChange={handleInputs}
                value={buyerMaster.floor}
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
              </select>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Select Unit</p>
            <div className="input-group">
              <select
                className="form-control"
                id="unit"
                name="unit"
                onChange={handleInputs}
                value={buyerMaster.unit}
              >
                {buyerMaster.Project === null && buyerMaster.Building === null && (
                  <option value={null} name={null}>
                    Select Project First
                  </option>
                )}
                {buyerMaster.Building === null && buyerMaster.Project !== null && (
                  <option value={null} name={null}>
                    Select Building First
                  </option>
                )}
                {buyerMaster.Building !== null &&
                  buyerMaster.Project !== null &&
                  allUnits === null && (
                    <option value={null} name={null}>
                      Loading...
                    </option>
                  )}
                {allUnits !== null && (
                  <>
                    {allUnits.length === 0 ? (
                      <option value={null} name={null}>
                        No Units Avaliable.
                      </option>
                    ) : (
                      <option value={null} name={null}>
                        Select Unit
                      </option>
                    )}
                    {allUnits.length > 0 &&
                      allUnits.map((i) => {
                        let s= "";
                        s=i.unit_name;
                        s=s.slice(0,1);
                        if(s===buyerMaster.floor)
                        {
                          return (
                          <option value={i?._id} name={i?._id}>
                            {i?.unit_name}
                          </option>
                        );
                        }
                      })}
                  </>
                )}
              </select>
            </div>
          </div>

          {/* <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate">Select Flat</p>
            <div className="input-group">
              <select
                className="form-control"
                id="flat"
                name="flat"
                value={buyerMaster.flat}
                onChange={
                  handleInputs

                }
              >
                {Building === null ? (
                  <option value={null} name={null}>
                    Loading...
                  </option>
                ) :
                  <>
                    {buyerMaster?.floor === null && <option value={null} name={null}>
                      Select Floor first
                    </option>}
                    {buyerMaster?.unit === null && <option value={null} name={null}>
                      Select Unit first
                    </option>}
                    {buyerMaster?.unit !== null && buyerMaster?.floor !== null && <option value={null} name={null}>
                      Select Flat
                    </option>}
                  </>
                }
                {Building !== null && Building?.total_number_of_flats === 0 && (
                  <option value={null} name={null}>
                    No Flat Avaliable
                  </option>
                )}
                {Building !== null && buyerMaster?.unit !== null && buyerMaster?.floor !== null &&
                  Building?.total_number_of_flats > 0 &&
                  renderFlat(Building?.total_number_of_flats)}
              </select>
            </div>
          </div> */}
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Fetch Details</p>
            {buyerMaster?.unit !== null ?
              <button type="button" className="btn btn-primary" onClick={() => fetchDetail(buyerMaster?.payment_stage)}>Fetch Details</button> :
              <button className="btn btn-primary" disabled >Fetch Details</button>}
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Owner Name</p>
            {buyerMaster?.Owner_name !== null ? <p>{buyerMaster?.Owner_name}</p>
              : <p>Loading...</p>}
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Select Payment Stage</p>
            <div className="input-group">
              <select className="form-control" id="stage" name="payment_stage" onChange={handleInputs} value={buyerMaster?.payment_stage}>
                {allBuilding === null ? <option value="1">Select Building First</option> :
                  <>
                    {allBuilding !== null && AllStage?.length === 0 && AllStage !== null && <option value="2">No Stage Available</option>}
                    {allBuilding !== null && AllStage?.length > 0 && AllStage !== null &&
                      <>
                        <option value="2">Select Stage</option>
                        {allBuilding !== null && AllStage?.length > 0 && AllStage !== null &&
                          AllStage?.map((i) => {
                            console.log(i)
                            return (
                              <option value={i?._id} name={i?._id} >{i?.stage_name}</option>
                            )

                          })
                        }
                      </>}
                  </>}
              </select>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Stage</p>
            {buyerMaster?.payment_stage !== null ?
              <button className="btn btn-primary" type="button" onClick={() => fetchOwner(buyerMaster?.payment_stage)}>Fetch Stage</button> :
              <button className="btn btn-primary" disabled >Fetch Stage</button>}
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Stage Price</p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="price"
                aria-label="Select Stage First"
                placeholder="Select Stage First"
                name="price"
                value={buyerMaster.price}
                onChange={handleInputs}
                readonly="true"
                required=""
              />
            </div>
          </div>
          <div className="col-md-6 col-12 mb-2">
            <p className="text-alternate">Payment Recived (Ammount)</p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="price"
                name="payment_receive"
                value={buyerMaster.payment_receive}
                onChange={handleInputs}
                required=""
              />
            </div>
          </div>
          <h4 className="text-alternate text-primary">Payment Details</h4>

          <div className="col-md-6 offset-md-3 col-12 mb-2">
            <p className="text-alternate">Select Payment Type</p>
            <div className="input-group">
              <select
                className="form-control"
                id="paymentType"
                name="payment_type"
                value={buyerMaster?.payment_type}
                onChange={handleInputs}
              >
                <option value="">Payment Type</option>
                <option value="Cash">Cash</option>
                <option value="Cheque">Cheque</option>
                <option value="DD">DD</option>
                <option value="RTGS">RTGS</option>
                <option value="NEFT">NEFT</option>
                <option value="netBanking">Net Banking</option>
                <option value="creditCard">Credit Card</option>
              </select>
            </div>
          </div>
          <hr />
          {buyerMaster?.payment_type === "Cheque" && <>

            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Cheque No</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="chequeNo"
                  name="check_number"
                  value={buyerMaster?.check_number}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Date</p>
              <div className="input-group">
                <input
                  type="date"
                  className="form-control"
                  id="chequeDate"
                  name="date"
                  value={buyerMaster?.date}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Bank Name</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="bankName"
                  name="bank_name"
                  value={buyerMaster?.bank_name}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Branch Name</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="branchName"
                  name="branch_name"
                  value={buyerMaster?.branch_name}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
          </>}
          {buyerMaster?.payment_type === "DD" && <>

            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Cheque No</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="chequeNo"
                  name="check_number"
                  value={buyerMaster?.check_number}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Date</p>
              <div className="input-group">
                <input
                  type="date"
                  className="form-control"
                  id="chequeDate"
                  name="date"
                  value={buyerMaster?.date}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Bank Name</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="bankName"
                  name="bank_name"
                  value={buyerMaster?.bank_name}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Branch Name</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="branchName"
                  name="branch_name"
                  value={buyerMaster?.branch_name}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
          </>}
          {buyerMaster?.payment_type === "NEFT" && <>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Date</p>
              <div className="input-group">
                <input
                  type="date"
                  className="form-control"
                  id="chequeDate"
                  name="date"
                  value={buyerMaster?.date}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Bank Name</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="bankName"
                  name="bank_name"
                  value={buyerMaster?.bank_name}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Branch Name</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="branchName"
                  name="branch_name"
                  value={buyerMaster?.branch_name}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Bank Account</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="bankAccount"
                  name="bank_account"
                  value={buyerMaster?.bank_account}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
          </>}
          {buyerMaster?.payment_type === "RTGS" && <>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Date</p>
              <div className="input-group">
                <input
                  type="date"
                  className="form-control"
                  id="chequeDate"
                  name="date"
                  value={buyerMaster?.date}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Bank Name</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="bankName"
                  name="bank_name"
                  value={buyerMaster?.bank_name}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Branch Name</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="branchName"
                  name="branch_name"
                  value={buyerMaster?.branch_name}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Bank Account</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="bankAccount"
                  name="bank_account"
                  value={buyerMaster?.bank_account}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
          </>}
          {buyerMaster?.payment_type === "netBanking" && <>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Date</p>
              <div className="input-group">
                <input
                  type="date"
                  className="form-control"
                  id="chequeDate"
                  name="date"
                  value={buyerMaster?.date}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Bank Name</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="bankName"
                  name="bank_name"
                  value={buyerMaster?.bank_name}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Branch Name</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="branchName"
                  name="branch_name"
                  value={buyerMaster?.branch_name}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Bank Account</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="bankAccount"
                  name="bank_account"
                  value={buyerMaster?.bank_account}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
          </>}
          {buyerMaster?.payment_type === "creditCard" && <>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Date</p>
              <div className="input-group">
                <input
                  type="date"
                  className="form-control"
                  id="chequeDate"
                  name="date"
                  value={buyerMaster?.date}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Bank Name</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="bankName"
                  name="bank_name"
                  value={buyerMaster?.bank_name}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Branch Name</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="branchName"
                  name="branch_name"
                  value={buyerMaster?.branch_name}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <p className="text-alternate">Card Number</p>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="cardNumber"
                  name="card_number"
                  value={buyerMaster?.card_number}
                  onChange={handleInputs}
                  required=""
                />
              </div>
            </div>
          </>}


          {/* <div className="col-md-4 col-12 mb-2">
            <p className="text-alternate"> Booking Date</p>
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                id="bookingDate"
                name="booking_date"
                value={buyerMaster.booking_date}
                onChange={handleInputs}
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
                name="allotment_date"
                value={buyerMaster.allotment_date}
                onChange={handleInputs}
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
                name="agreement_date"
                value={buyerMaster.agreement_date}
                onChange={handleInputs}
                required=""
              />
            </div>
          </div> */}

          <div className="col-md-12 col-12 text-right">
            <button
              type="button"
              class="btn btn-outline-warning btn-md mb-1 mr-1"
            >
              {" "}
              Exit{" "}
            </button>
            <button
              type="button"
              onClick={() => uploadBuyermaster()}
              class="btn btn-outline-primary btn-md mb-1 mr-1"
            >
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
        <form
            className="row px-4 py-4 mx-2 my-2 shadow-lg needs-validation"
            novalidate
          >
            <h3 className="text-alternate text-primary">Payment History</h3>
            <div className="d-flex justify-content-center">
              <table className="table table-striped table-responsive">
                <tr>
                  <th>Sno.</th>
                  <th>Owner</th>
                  <th>Payment Type</th>
                  <th>Paid</th>
                  <th>Total Stage Price</th>
                </tr>
                {getData?.map((i, j) => {
                  let id = i?._id;
                  return (
                    <tr>
                      <td>{j + 1}</td>
                      <td>{i?.Owner_name}</td>
                      <td>{i?.payment_type}</td>
                      <td>{i?.payment_receive}</td>
                      <td>{i?.price}</td>
                      <td>
                        <Trash
                          className="cursor-pointer"
                          color="red"
                          size={30}
                          onClick={() => {
                            deletemaster(id);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </form>
      </div>
    </>
  );
}

export default BuyerMaster
