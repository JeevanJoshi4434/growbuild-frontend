import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Edit, Trash } from 'react-feather';
import { useHistory } from 'react-router-dom';

const UnitTable = (props) => {
    let history = useHistory();
    const { i, j, setIsEdit, setAllUnit, setCreateUnit, setAllBuilding, CreateUnit, id } = props;
    const [Project, setProject] = useState(null);
    const [building, setbuilding] = useState(null);
    const getProjectName = async () => {
        const res = await axios.get(process.env.REACT_APP_PORT + '/api/project/single/' + i?.Project);
        if (res.status === 200) {
            setProject(res.data.name);
        } else {
            return null;
        }
    }
    const getBuildingName = async () => {
        const res = await axios.get(process.env.REACT_APP_PORT + '/api/building/single/' + i?.building);
        if (res.status === 200) {
            setbuilding(res.data.name);
        } else {
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
    const getAllUnits = async()=>{
        const res = await axios.get(process.env.REACT_APP_PORT + '/api/all/unit', {
          Headers: {
            'Content-Type': 'application/json'
          }
        })
        setAllUnit(res.data);
      }
    const deleteUnit = async () => {
        const res = await axios.delete(`${process.env.REACT_APP_PORT}/api/delete/unit/${id}`)
        if (res.status === 200) {
          window.alert("Unit Deleted!");
          getAllUnits();
          history.go(0);
        }
      }
      const edit = async (data) => {
        setCreateUnit({ ...CreateUnit, Project: data?.Project, building: data?.building, unit_name: data?.unit_name, total_area_this_unit: data?.total_area_this_unit, carpet_area: data?.carpet_area, build_up_area: data?.build_up_area, balcony_area: data?.balcony_area, total_number_of_flat_on_this_unit: data?.total_number_of_flat_on_this_unit, parking_detail: data?.parking_detail, extra_facilities: data?.extra_facilities, id: data?._id });
        setIsEdit(true)
        await getBuildings(data?.Project);
        setCreateUnit({ ...CreateUnit, Project: data?.Project, building: data?.building, unit_name: data?.unit_name, total_area_this_unit: data?.total_area_this_unit, carpet_area: data?.carpet_area, build_up_area: data?.build_up_area, balcony_area: data?.balcony_area, total_number_of_flat_on_this_unit: data?.total_number_of_flat_on_this_unit, parking_detail: data?.parking_detail, extra_facilities: data?.extra_facilities, id: data?._id,price:data?.price,TotalPrice:data?.totalPrice });
      }
    return (
        <tr>
            <td>{j + 1}</td>
            <td>{Project !== null ? Project : <></>}</td>
            <td>{building !== null ? building : <></>}</td>
            <td>{i?.unit_name}</td>
            <td>{i?.balcony_area}</td>
            <td>{i?.build_up_area}</td>
            <td>{i?.carpet_area}</td>
            <td>{i?.total_area_this_unit}</td>
            <td>{i?.price}</td>
            <td>{i?.totalPrice}</td>
            <td>
                <Edit className="cursor-pointer" color="green" size={30} onClick={() => { edit(i) }} />
                <Trash
                    className="cursor-pointer"
                    color="red"
                    size={30}
                    onClick={() => {
                        deleteUnit(id);
                    }}
                />
            </td>
        </tr>
    )
}

export default UnitTable
