import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Eye } from 'react-feather';
import { Input } from 'reactstrap'
import { RequiredField } from '../../../utility/RequiredField'

const PaymentRecieve = () => {
  const [getData, setGetData] = useState(null);
  const getDataa = async () => {
    const res = await axios.get(`/api/get/all/buyermaster`, {
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

  const getBuilding = async (id) => {
    if (id?.length === 12 || id?.length === 24) {

      const res = await axios.get(`/api/building/${id}`, {
        Headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.status === 200) {
        let data = res.data;
        return await data?.buildingName;
      } else {
        return null;
      }
    }
  }
  const getStage = async (id) => {
    if (id?.length === 12 || id?.length === 24) {

      const res = await axios.get(`/api/get/demand/${id}`, {
        Headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.status === 200) {
        let data = res.data;
        return await data?.stage_name;
      } else {
        return null;
      }
    }
  }
  
const PromiseRender = ({ rowIndex, owner, paymentType, paymentReceive, price }) => {
  const [building, setBuilding] = useState(null);
  const [stage, setStage] = useState(null);

  useEffect(() => {
    const buildingPromise = getBuilding(getData[rowIndex]?.Building);
    const stagePromise = getStage(getData[rowIndex]?.payment_stage);

    Promise.all([buildingPromise, stagePromise])
      .then(([buildingValue, stageValue]) => {
        setBuilding(buildingValue);
        setStage(stageValue);
      })
      .catch(error => {
        console.error(error);
      });
  }, [rowIndex]);

  if (!building || !stage) {
    return null; // Render nothing until the promises are resolved
  }

  console.log({ building: building, stage: stage });

  return (
    <tr>
      <td>{rowIndex + 1}</td>
      <td>{owner}</td>
      <td>{paymentType}</td>
      <td>{paymentReceive}</td>
      <td>{price}</td>
      <td>{building}</td>
      <td>{stage}</td>
      <td>
        <Eye className="cursor-pointer" color="orange" size={30} />
      </td>
    </tr>
  );
};
  return (
    <>
      <div className='container bg-white p-2 rounded-2'>
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
                <th>Building</th>
                <th>Stage</th>
                <th>Action</th>
              </tr>

              {getData?.map((i, j) => {
                let id = i?._id;

                return (
                  <PromiseRender
                    key={j}
                    rowIndex={j}
                    owner={i?.Owner_name}
                    paymentType={i?.payment_type}
                    paymentReceive={i?.payment_receive}
                    price={i?.price}
                  />
                );
              })}

            </table>
          </div>
        </form>
      </div>
    </>
  )
}
export default PaymentRecieve
