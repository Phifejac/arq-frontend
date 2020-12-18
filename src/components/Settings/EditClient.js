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
        firm:'Example Firm',
        location:'Seattle, WA',
        acctName:'',
        acctNumber:'',
        clearerNumber:'',
        contrabrokerNumber:'',
        backExecNumber:'',
        maincontact: {
          name: 'Jane Doe',
          position:'Position Title',
          email:'example@firm.com'
        },
        secondarycontact1: {
          name: 'Mark Teddy',
          position:'Position Title',
          email:'example@firm.com'
        },
        secondarycontact2: {
          name: 'Phil Todd',
          position:'Position Title',
          email:'example@firm.com'
        }
    };
  }

  
  render() {
    return (
      <>
      <label style={{color:'#f1f1f1', fontWeight:'bold'}}>Firm Details</label>
      <Row>
        <Col md="4">
            <p className="input-category">Firm</p>
            <Input
            type="text"
            className='bgtext'
            value={this.state.firm}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
        <Col md="4">
            <p className="input-category">Location</p>
            <Input
            type="text"
            className='bgtext'
            value={this.state.location}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
      </Row>
      <br/>
      <Row>
        <Col md="3">
            <p className="input-category">Acct Name</p>
            <Input
            type="text"
            className='bgtext'
            value={this.state.acctName}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
        <Col md="3">
            <p className="input-category">Acct Number</p>
            <Input
            type="text"
            className='bgtext'
            value={this.state.acctNumber}
            name="cusip"
            onChange={(e) => this.props.handleChange(e)}
            />
        </Col>
        <Col md="2">
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
        </Col>
      </Row>
      <br/>
      <label style={{color:'#f1f1f1', fontWeight:'bold'}}>Contacts <i className="fa fa-plus white" style={{marginLeft:'1rem'}} /></label>
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
      </Row>
      <br/>
      </>
    );
  }
}

export default EditClient;
