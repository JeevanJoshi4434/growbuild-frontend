import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Edit, Trash } from 'react-feather';
import swal from 'sweetalert';

const BuildingTable = (props) => {
    const {i,j,setIsEdit,setAllBuilding,id,setCreateBlock,createBlock} = props;
    const [Name, setName] = useState(null);
    const getBuilding = async()=>{
        const res = await axios.get(process.env.REACT_APP_PORT + '/api/all/building',{
          Headers:{
            'Content-Type': 'application/json'
          }
        })
        setAllBuilding(res.data);
        console.log(res.data);
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
        const edit = (data)=>{
            setCreateBlock({...createBlock, Project:data?.Project, buildingName:data?.buildingName, total_number_of_floors:data?.total_number_of_floors, total_number_of_flats:data?.total_number_of_flats, parkings:data?.parkings,id:data?._id});
            setIsEdit(true);
          }
          const getName = async()=>{
            const res = await axios.get(process.env.REACT_APP_PORT+'/api/project/single/'+i?.Project);
            if(res.status === 200){
              setName(res.data.name);
            }
          }
          useEffect(() => {
            getName();
          }, [])
    return (
        <tr>
            <td>{j + 1}</td>
            <td>{Name !== null ? Name : <>Project Not Found!</>}</td>
            <td>{i?.buildingName}</td>
            <td>{i?.total_number_of_floors}</td>
            <td><Edit className="cursor-pointer" color="green" size={30} onClick={() => { edit(i) }} /><Trash className="cursor-pointer" color="red" size={30} onClick={() => { deleteProject(id) }} /></td>
        </tr>
    )
}

export default BuildingTable
