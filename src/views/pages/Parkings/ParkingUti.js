import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Edit, Trash } from 'react-feather';
import swal from 'sweetalert';

const ParkingTable = (props) => {
    const {i,j,setIsEdit,setCreateParking,CreateParking,setAllBuilding,setBuilding,setAllParking,id} = props;
    const [parking, setparking] = useState(null);
    const [buildingq, setbuildingq] = useState(null);
    const getProjectName = async()=>{
        const res = await axios.get(process.env.REACT_APP_PORT+'/api/project/single/'+i?.Project);
        if(res.status === 200){
           setparking(res.data.name);
        }else{
          return null;
        }
      }
      const getBuildingName = async()=>{
        const res = await axios.get(process.env.REACT_APP_PORT+'/api/building/single/'+i?.building);
        if(res.status === 200){
           setbuildingq(res.data.name);
        }else{
          return null;
        }
      };
      useEffect(() => {
        getProjectName();
        getBuildingName();
      }, []);
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
  return (
    <tr>
                      <td>{j + 1}</td>
                      <td>{parking!==null?parking:<></>}</td>
                      <td>{buildingq!==null?buildingq:<></>}</td>
                      <td>{i?.parkings}</td>
                      <td>{i?.Total_Parking_Area_square_feet}</td>
                      <td>{i?.Single_Parking_Area_square_feet}</td>
                      <td>{i?.price}</td>
                      <td>
                        <Edit className="cursor-pointer" color="green" size={30} onClick={() => { edit(i) }} />
                        <Trash
                          className="cursor-pointer"
                          color="red"
                          size={30}
                          onClick={() => {
                            deleteParking(id);
                          }}
                        />
                      </td>
                    </tr>
  )
}

export default ParkingTable
