import React from "react";
// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Label,
  Progress,
  Input,
  Button
} from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";

// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import ReportTable from "./ReportTable";

class InternalReports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      fund: null,
      client: null,
      book: null,
      counterparty: null,
      excounterparty: null,
      singleSelect: null,
      multipleSelect: null,
      tagsinput: ["Amsterdam", "Washington", "Sydney", "Beijing"],
    };
  }

  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }
  handleTagsinput = (tagsinput) => {
    this.setState({ tagsinput });
  };

  warningWithConfirmAndCancelMessage = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          warning
          style={{ display: "block", marginTop: "-100px" }}
          title="Are you sure?"
          onConfirm={() => this.successDelete()}
          onCancel={() => this.cancelDetele()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
          btnSize=""
        >
          You will not be able to recover this imaginary file!
        </ReactBSAlert>
      ),
    });
  };
  successDelete = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Deleted!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          btnSize=""
        >
          Your imaginary file has been deleted.
        </ReactBSAlert>
      ),
    });
  };
  cancelDetele = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          danger
          style={{ display: "block", marginTop: "-100px" }}
          title="Cancelled"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          btnSize=""
        >
          Your imaginary file is safe :)
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
        <div className="content" style={{justifyContent:'center', alignItems:'center'}}>
          <Row lg='12' style={{marginBottom:'3rem', display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor:'white', borderRadius:'1rem', padding:'.5rem'}} className='card-shadow'>
            <Col  lg='6' style={{}}>
            <h4>Select Report Type</h4>
              <Row>
                <Col lg="3" style={{height:'3.5rem', marginBottom:'2rem'}}>
                    <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                      <p style={{margin:0, fontSize:'.8rem'}}>Daily Funding</p>
                    </div>
                </Col>
                <Col lg="3" style={{height:'3.5rem', marginBottom:'2rem'}}>
                  <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                    <p style={{margin:0, fontSize:'.8rem'}}>Bond Inventory</p>
                  </div>
                </Col>
                <Col lg="3" style={{height:'3.5rem', marginBottom:'2rem'}}>
                    <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                      <p style={{margin:0, fontSize:'.8rem'}}>Future Settlements</p>
                    </div>
                </Col>
                <Col lg="3" style={{height:'3.5rem', marginBottom:'2rem'}}>
                  <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                    <p style={{margin:0, fontSize:'.8rem'}}>Bank Rec</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="3" style={{height:'3.5rem', marginBottom:'2rem'}}>
                    <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                      <p style={{margin:0, fontSize:'.8rem'}}>Option Expiration</p>
                    </div>
                </Col>
                <Col lg="3" style={{height:'3.5rem', marginBottom:'2rem'}}>
                  <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                    <p style={{margin:0, fontSize:'.8rem'}}>Rate Reset</p>
                  </div>
                </Col>
                <Col lg="3" style={{height:'3.5rem', marginBottom:'2rem'}}>
                    <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                      <p style={{margin:0, fontSize:'.8rem'}}>Unwinds</p>
                    </div>
                </Col>
                <Col lg="3" style={{height:'3.5rem', marginBottom:'2rem'}}>
                  <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                    <p style={{margin:0, fontSize:'.8rem'}}>Outstanding Confirms</p>
                  </div>
                </Col>
              </Row>
            </Col>
              <Col lg='2' style={{justifyContent:'center', display:'flex', flexDirection:'column'}}>
                <p className="input-category">Select Daily Funding</p>
                <Select
                  className="react-select primary"
                  classNamePrefix="react-select"
                  name="singleSelect"
                  value={this.state.book}
                  onChange={(value) =>
                    this.setState({ book: value })
                  }
                  options={[
                    {
                      value: "",
                      label: "Select One",
                      isDisabled: true,
                    },
                    { value: "2", label: "Foobar" },
                    { value: "3", label: "Is great" },
                  ]}
                  placeholder="Select book..."
                />
              </Col>
              <Col lg='2' style={{justifyContent:'center', display:'flex', flexDirection:'column'}}>
                <p className="input-category text-left">From</p>
                <FormGroup>
                  <ReactDatetime
                    inputProps={{
                      className: "form-control",
                      placeholder: "Set date...",
                    }}
                    timeFormat={false}
                  />
                </FormGroup>
                <p className="input-category text-left">To</p>
                <FormGroup>
                  <ReactDatetime
                    inputProps={{
                      className: "form-control",
                      placeholder: "Set date...",
                    }}
                    timeFormat={false}
                  />
                </FormGroup>
              </Col>
              <Col lg='2' style={{justifyContent:'center', display:'flex', flexDirection:'column'}}>
                <Button className="btn-round" color="primary" onClick={this.warningWithConfirmAndCancelMessage} style={{marginLeft:'2.5rem', marginRight:'2.5rem', marginTop:'1.5rem'}} outline>
                  Search
                </Button>
              </Col>          
          <ReportTable/>
          </Row> 

        </div>
      </>
    );
  }
}

export default InternalReports;
