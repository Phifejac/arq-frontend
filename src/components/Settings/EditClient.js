import React from "react";


// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Row,
  Col,
  FormGroup,
  Input,
  Button,
  ButtonGroup,
} from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";

// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

class EditClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        client_name:this.props.client.client_name,
        contra_broker:this.props.client.contra_broker,
        inventory: this.props.client.inventory,
        back_execution:this.props.client.back_execution,
    };
  }

  
  render() {
    return (
      <>
      <label style={{color:'#f1f1f1', fontWeight:'bold'}}>Firm Details</label>
      <Row>
        <Col md="6">
            <p className="input-category">Client Name</p>
            <Input
            type="text"
            className='bgtext'
            value={this.state.client_name}
            name="client_name"
            onChange={(e) => {this.props.handleChange(e); this.setState({client_name: e.target.value})}}
            />
        </Col>
        <Col md="6">
            <p className="input-category">Contrabroker #</p>
            <Input
            type="text"
            className='bgtext'
            value={this.state.contra_broker}
            name="contra_broker"
            onChange={(e) => {this.props.handleChange(e); this.setState({contra_broker: e.target.value})}}
            />
        </Col>
      </Row>
      <br/>
      <Row>
        <Col md="6">
            <p className="input-category">Inventory #</p>
            <Input
            type="text"
            className='bgtext'
            value={this.state.inventory}
            name="inventory"
            onChange={(e) => {this.props.handleChange(e); this.setState({inventory: e.target.value})}}
            />
        </Col>
        <Col md="6">
            <p className="input-category">Back Execution #</p>
            <Input
            type="text"
            className='bgtext'
            value={this.state.back_execution}
            name="back_execution"
            onChange={(e) => {this.props.handleChange(e); this.setState({back_execution: e.target.value})}}
            />
        </Col>
        {/* <Col md="2">
            <p className="input-category">Clearer #</p>
            <Input
            type="text"
            className='bgtext'
            value={this.state.clearerNumber}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
        <Col md="2">
            <p className="input-category">Contrabroker #</p>
            <Input
            type="text"
            className='bgtext'
            value={this.state.contrabrokerNumber}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
        <Col md="2">
            <p className="input-category">Back Execution #</p>
            <Input
            type="text"
            className='bgtext'
            value={this.state.backExecNumber}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col> */}
      </Row>
      <br/>
      {/* <label style={{color:'#f1f1f1', fontWeight:'bold'}}>Contacts <i className="fa fa-plus white" style={{marginLeft:'1rem'}} /></label>
      <Row>
        <Col md="4">
            <p className="input-category">Name</p>
            <Input
            type="text"
            className='bgtext'
            defaultValue={this.state.maincontact.name}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
        <Col md="3">
            <p className="input-category">Position</p>
            <Input
            type="text"
            className='bgtext'
            defaultValue={this.state.maincontact.position}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
        <Col md="3">
            <p className="input-category">Email</p>
            <Input
            type="text"
            className='bgtext'
            defaultValue={this.state.maincontact.email}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
      </Row>
      <Row>
        <Col md="4">
            <p className="input-category">Name</p>
            <Input
            type="text"
            className='bgtext'
            defaultValue={this.state.secondarycontact1.name}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
        <Col md="3">
            <p className="input-category">Position</p>
            <Input
            type="text"
            className='bgtext'
            defaultValue={this.state.secondarycontact1.position}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
        <Col md="3">
            <p className="input-category">Email</p>
            <Input
            type="text"
            className='bgtext'
            defaultValue={this.state.secondarycontact1.email}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
      </Row>
      <Row>
        <Col md="4">
            <p className="input-category">Name</p>
            <Input
            type="text"
            className='bgtext'
            defaultValue={this.state.secondarycontact2.name}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
        <Col md="3">
            <p className="input-category">Position</p>
            <Input
            type="text"
            className='bgtext'
            defaultValue={this.state.secondarycontact2.position}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
        <Col md="3">
            <p className="input-category">Email</p>
            <Input
            type="text"
            className='bgtext'
            defaultValue={this.state.secondarycontact2.email}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
      </Row> */}
      <br/>
      </>
    );
  }
}

export default EditClient;
