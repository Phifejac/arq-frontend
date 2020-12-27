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
import {getClients, deleteClient, updateClient, addClient} from '../../api/http'


class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert:null,
      client_name: null,
      inventory: null,
      back_execution: null,
      contra_broker: null,
      data: [],
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.getClients()
  }

  async getClients() {
    const clients = await getClients()
    this.setState({
      client_name: null,
      inventory: null,
      back_execution: null,
      contra_broker: null,
      data: clients.map((prop, key) => {
        return {
          id: prop.id,
          client_name: prop.client_name,
          contra_broker: prop.contra_broker,
          inventory: prop.inventory,
          back_execution: prop.back_execution,
          actions: (
            <div className="actions-right grow">
                <Button
                  onClick={() => { this.editButton(prop) }}
                  style={{ color: 'grey' }}
                  size="md"
                  className="btn-icon btn-link edit"
                  style={{ marginTop: '-.3rem', marginRight: '-.6rem' }}
                >
                  <i className="fa fa-edit white" />
                </Button>{" "}
                <Button
                  onClick={() => { this.confirmDelete(prop) }}
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
    })
  }

  handleChange(e) {
    var change = {};
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  editButton = (client) => {
    this.setState({
      alert: (
        <ReactBSAlert
          style={{ display: "block", marginTop: "-100px", width:'70%', backgroundColor:'#27292D'}}
          className='text-left'
          onConfirm={() => this.editClient(client)}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="primary"
          cancelBtnBsStyle="danger"
          confirmBtnText="Save Changes"
          cancelBtnText="Cancel"
          showCancel
          btnSize=""
        >
          <div className='text-left'>
            <EditClient client={client} handleChange={this.handleChange}/>
          </div>
        </ReactBSAlert>
      ),
    });
  };

  async editClient(client) {
    const body = {"id": client.id}
    if (this.state.client_name) {body["client_name"] = this.state.client_name}
    else if (this.state.inventory) {body["inventory"] = this.state.inventory}
    else if (this.state.contra_broker) {body["contra_broker"] = this.state.contra_broker}
    else if (this.state.back_execution) {body["back_execution"] = this.state.back_execution}
    const response = await updateClient(body)
    this.getClients()
    this.hideAlert()
    return response

  }

  async deleteClient(client) {
    const body = {"id": client.id}
    const response = await deleteClient(body)
    this.getClients()
    this.hideAlert()
    return response
  }


  confirmDelete = (client) => {
    this.setState({
      alert: (
        <ReactBSAlert
          warning
          style={{ display: "block", marginTop: "-100px", backgroundColor: '#27292D' }}
          title="Confirm Deletion"
          onConfirm={() => this.deleteClient(client)}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="primary"
          cancelBtnBsStyle="danger"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          btnSize=""
          showCancel
        >
          Are you sure you want to delete this client?
        </ReactBSAlert>
      ),
    });
  };

  async addClient() {
    const body = {
      "client_name": this.state.client_name,
      "contra_broker": this.state.contra_broker,
      "inventory": this.state.inventory,
      "back_execution": this.state.back_execution
    }
    const response = await addClient(body)
    this.getClients()
    this.hideAlert()
    return response
  }

  addButton() {
    const empty = {
      "client_name": "",
      "contra_broker": "",
      "inventory": "",
      "back_execution": ""
    }
    this.setState({
      alert: (
        <ReactBSAlert
          style={{ display: "block", marginTop: "-100px", width: '60%', backgroundColor: '#27292D' }}
          className='text-left'
          onConfirm={() => this.addClient()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="primary"
          cancelBtnBsStyle="danger"
          confirmBtnText="Add Client"
          cancelBtnText="Cancel"
          showCancel
          btnSize=""
        >
          <div className='text-left'>
            <h5 style={{ color: 'white' }}>Add Client</h5>
            <p style={{ fontSize: '.8rem', color: 'white' }}>Fill in all fields and confirm changes to save.</p>
            <hr />
            <EditClient
              client={empty}
              handleChange={this.handleChange}
            />
          </div>
        </ReactBSAlert>
      ),
    })
  }

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
            <div style={{position:'absolute', zIndex:+1 }}>
                <Button color='primary' onClick={() => this.addButton()}>Add Client</Button>
              </div>
            <ClientsTable
              data={this.state.data}

              columns={[
                {
                  Header: "Client Name",
                  accessor: "client_name",
                },
                {
                  Header: "Contrabroker #",
                  accessor: "contra_broker",
                },
                {
                  Header: "Inventory #",
                  accessor: "inventory",
                },
                {
                  Header: "Back Execution #",
                  accessor: 'back_execution',
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
