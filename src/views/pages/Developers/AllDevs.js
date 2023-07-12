import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Badge,
  Input,
  // Button,
} from "reactstrap";
import DataTable from "react-data-table-component";
import { Eye, Edit, Trash, Search } from "react-feather";

const CustomHeader = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      <div className="add-new">
        {/* <Button.Ripple color="primary">Add New</Button.Ripple> */}
      </div>
      <div className="position-relative has-icon-left mb-1">
        <Input value={props.value} onChange={(e) => props.handleFilter(e)} />
        <div className="form-control-position">
          <Search size="15" />
        </div>
      </div>
    </div>
  );
};

class DataTableCustom extends React.Component {
  state = {
    columns: [
      {
        name: "Sl No",
        selector: "slNo",
        sortable: true,
        maxWidth: "16px",
        cell: (row) => (

          <span
            title={row.slNo}
            className="d-block text-bold-500 text-truncate mb-0"
          >
            {row.slNo}
          </span>

        ),
      },
      {
        name: "Company Name",
        selector: "name",
        sortable: true,
        minWidth: "200px",
        cell: (row) => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                title={row.name}
                className="d-block text-bold-500 text-truncate mb-0"
              >
                {row.name}
              </span>
              <small title={row.name}>{row.name}</small>
            </div>
          </div>
        ),
      },
      {
        name: "Phone No",
        selector: "phone",
        sortable: true,
        cell: (row) => (
          <p className="text-bold-500 text-truncate mb-0">{row.phone}</p>
        ),
      },
      {
        name: "Project Status",
        selector: "status",
        sortable: true,
        cell: (row) => (
          <Badge
            color={row.status === "inactive" ? "light-danger" : "light-success"}
            pill
          >
            {row.status}
          </Badge>
        ),
      },
      {
        name: "Key Person",
        selector: "KeyPersons",
        sortable: true,
        cell: (row) => <p className="text-bold-500 mb-0">{row.KeyPersons}</p>,
      },
      {
        name: "Actions",
        selector: "actions",
        sortable: false,
        cell: (row) => {
          return (
            <div className="actions">
              <a href="#!" className="text-primary curser-pointer mx-1"><Eye size="15" /></a>
              <a href="#!" className="text-warning curser-pointer mx-1"><Edit size="15" /></a>
              <a href="#!" className="text-danger curser-pointer mx-1"><Trash size="15" /></a>
            </div>
          );
        },
      },
    ],
    data: [
      {
        slNo: 1,
        name: "AlysShankar",
        phone: "9876543210",
        status: "active",
        KeyPersons: "Rehan",
        Actions: "good",
      },
      {
        slNo: 2,
        name: "Alyss Kal",
        phone: "9876543210",
        status: "active",
        KeyPersons: "Rehan",
        Actions: "good",
      },
      {
        slNo: 3,
        name: "Alyss Gallop",
        phone: "9876543210",
        status: "active",
        KeyPersons: "Rehan",
        Actions: "good",
      },
      {
        slNo: 4,
        name: "Alcrop",
        phone: "9876543210",
        status: "active",
        KeyPersons: "Rehan",
        Actions: "good",
      },
      {
        slNo: 5,
        name: "Al crop",
        phone: "9876543210",
        status: "active",
        KeyPersons: "Rehan",
        Actions: "good",
      },
      {
        slNo: 6,
        name: "Alcrop",
        phone: "9876543210",
        status: "active",
        KeyPersons: "Rehan",
        Actions: "good",
      },
      {
        slNo: 7,
        name: "Aly",
        phone: "9876543210",
        status: "active",
        KeyPersons: "Rehan",
        Actions: "good",
      },
      {
        slNo: 8,
        name: "Lop",
        phone: "9876543210",
        status: "active",
        KeyPersons: "Rehan",
        Actions: "good",
      },
      {
        slNo: 9,
        name: "Alyss",
        phone: "9876543210",
        status: "active",
        KeyPersons: "Rehan",
        Actions: "good",
      },
      {
        slNo: 10,
        name: "Lillecrop",
        phone: "9876543210",
        status: "active",
        KeyPersons: "Rehan",
        Actions: "good",
      },
    ],
    filteredData: [],
    value: "",
  };

  handleFilter = (e) => {
    let value = e.target.value;
    let data = this.state.data;
    let filteredData = this.state.filteredData;
    this.setState({ value });

    if (value.length) {
      filteredData = data.filter((item) => {
        let startsWithCondition =
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.phone.toLowerCase().startsWith(value.toLowerCase()) ||
          item.status.toLowerCase().startsWith(value.toLowerCase()) ||
          item.KeyPersons.toLowerCase().startsWith(value.toLowerCase());
        let includesCondition =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.phone.toLowerCase().includes(value.toLowerCase()) ||
          item.status.toLowerCase().includes(value.toLowerCase()) ||
          item.KeyPersons.toLowerCase().includes(value.toLowerCase());

        if (startsWithCondition) {
          return startsWithCondition;
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition;
        } else return null;
      });
      this.setState({ filteredData });
    }
  };

  render() {
    let { data, columns, value, filteredData } = this.state;
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-alternate text-primary">All Developers</CardTitle>
          <hr />
        </CardHeader>
        <CardBody className="rdt_Wrapper">
          <DataTable
            className="dataTable-custom"
            data={value.length ? filteredData : data}
            columns={columns}
            noHeader
            pagination
            subHeader
            subHeaderComponent={
              <CustomHeader value={value} handleFilter={this.handleFilter} />
            }
          />
        </CardBody>
      </Card>
    );
  }
}

export default DataTableCustom;
