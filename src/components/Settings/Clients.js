import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Row,
  Col,
  Progress,
  Collapse,
  NavItem,
  NavLink
} from "reactstrap";
import ClientsTable from './ClientsTable'
import ReactBSAlert from "react-bootstrap-sweetalert";
import EditClient from "./EditClient";

const dataTable = [
    ['Jane Doe', 'Location', 'Firm Name', 'janedoe@email.com']
  ];

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab:'account',
      alert:null,
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          name: prop[0],
          position: prop[1],
          firm: prop[2],
          email: prop[3],
          actions: (
            <div className="actions-right grow">
                <Button
                  onClick={() => { this.editButton() }}
                  style={{ color: 'grey' }}
                  size="md"
                  className="btn-icon btn-link edit"
                  style={{ marginTop: '-.3rem', marginRight: '-.6rem' }}
                >
                  <i className="fa fa-edit white" />
                </Button>{" "}
                <Button
                  onClick={() => { this.confirmDelete() }}
                  style={{ color: 'grey' }}
                  size="md"
                  className="btn-icon btn-link edit"
                  style={{ marginTop: '-.3rem'}}
                >
                  <i className="fa fa-trash white" />
                </Button>
              </div>
          ),
        };
      }),
    };
  }
  editButton = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          style={{ display: "block", marginTop: "-100px", width:'70%', backgroundColor:'#27292D'}}
          className='text-left'
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="primary"
          cancelBtnBsStyle="danger"
          confirmBtnText="Save Changes"
          cancelBtnText="Cancel"
          showCancel
          btnSize=""
        >
          <div className='text-left'>
            <EditClient/>
          </div>
        </ReactBSAlert>
      ),
    });
  };
  confirmDelete = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          warning
          style={{ display: "block", marginTop: "-100px", backgroundColor: '#27292D' }}
          title="Confirm Deletion"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="primary"
          cancelBtnBsStyle="danger"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          btnSize=""
          showCancel
        >
          Are you sure you want to delete this transaction?
        </ReactBSAlert>
      ),
    });
  };

  hideAlert = () => {
    this.setState({
      alert: null,
    });
  };

  render() {
    return (
      <>
      {this.state.alert}
        <Col md='12'style={{paddingLeft:0}}>
            <h4 style={{paddingTop:'1rem', fontFamily:'Poppins', fontWeight:'500', color:'white', margin:0}}>Client List</h4>
            <ClientsTable
              data={this.state.data}

              columns={[
                {
                  Header: "Firm",
                  accessor: "firm",
                },
                {
                  Header: "Location",
                  accessor: "position",
                },
                {
                  Header: "Main Contact",
                  accessor: "name",
                },
                {
                  Header: "Email",
                  accessor: 'email',
                },
                {
                  Header: "",
                  accessor: "actions",
                },
              ]}

              className="-striped -highlight primary-pagination"
            />

            
        </Col>
      </>
    );
  }
}

export default Clients;
