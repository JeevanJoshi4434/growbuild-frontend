import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Edit, Trash } from 'react-feather';
import swal from 'sweetalert';

const FlatTable = (props) => {
    const {i,j,setIsEdit,setCreateFlat,CreateFlat,setAllBuilding,setBuilding,setAllUnits,setAllFlat,id} = props;
    const [Project, setProject] = useState(null);
    const [building, setbuilding] = useState(null);
    const getProjectName = async()=>{
        const res = await axios.get(process.env.REACT_APP_PORT+'/api/project/single/'+i?.Project);
        if(res.status === 200){
          setProject(res.data.name);
        }else{
          return null;
        }
      }
      const getBuildingName = async()=>{
        const res = await axios.get(process.env.REACT_APP_PORT+'/api/building/single/'+i?.building);
        if(res.status === 200){
          setbuilding(res.data.name);
        }else{
          return null;
        }
      }
      useEffect(() => {
        getProjectName();
        getBuildingName();
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
      const getAllFlat = async()=>{
        const res = await axios.get(`${process.env.REACT_APP_PORT}/api/all/flat`,{
          Headers: {
            'Content-Type': 'application/json'
          }
        })
        if(res.status === 200)
        setAllFlat(res.data);
      }
      const deleteFlat= async(id)=>{
        const willDelete = await swal({
          title: "Are you sure?",
            text: "Are you sure that you want to delete this Block?",
            icon: "warning",
            dangerMode: true,
          });
           
          if (willDelete) {
            const res = await axios.delete(process.env.REACT_APP_PORT + '/api/delete/flat/'+id,{
              Headers: {
                'Content-Type': 'application/json'
              }
            })
            getAllFlat();
          }
          willDelete();
        }
      const edit = async(data)=>{
        setCreateFlat({...CreateFlat, Project: data?.Project, floor: data?.floor, building: data?.building, unit: data?.unit, flat: data?.flat, flat_area: data?.flat_area, parking: data?.parking, starting_price: data?.starting_price, extra_facilities: data?.extra_facilities,id:data?._id});
        setIsEdit(true)
        await getBuildings(data?.Project);
        setCreateFlat({...CreateFlat,building:data?.building});
        await getBuildingDetail(data?.building);
        setCreateFlat({...CreateFlat,floor: data?.floor, flat: data?.flat});
        await getUnits(data?.building,data?.Project);
        setCreateFlat({...CreateFlat,unit: data?.unit});
        setCreateFlat({...CreateFlat, Project: data?.Project, floor: data?.floor, building: data?.building, unit: data?.unit, flat: data?.flat, flat_area: data?.flat_area, parking: data?.parking, starting_price: data?.starting_price, extra_facilities: data?.extra_facilities,id:data?._id,bedRoom:data?.bedRoom});
       }
  return (
    <tr>
                      <td>{j + 1}</td>
                      <td>{Project!==null?Project:<></>}</td>
                      <td>{building!==null?building:<></>}</td>
                      <td>{i?.flat}</td>
                      <td>{i?.floor}</td>
                      <td>{i?.flat_area}</td>
                      <td>{i?.bedRoom}</td>
                      <td>{i?.starting_price}</td>
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
  )
}

export default FlatTable
