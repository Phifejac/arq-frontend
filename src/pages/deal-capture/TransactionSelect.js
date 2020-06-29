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

class TransactionSelect extends React.Component {
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
          <Col>
          <Row>
            <Col lg="3" md="6" sm="6" style={{height:'11rem', marginBottom:'2rem'}}>
                <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                  <p style={{margin:0, fontSize:'1.25rem'}}>Bond</p>
                </div>
            </Col>
            <Col lg="3" md="6" sm="6" style={{height:'11rem', marginBottom:'2rem'}}>
              <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                <p style={{margin:0, fontSize:'1.25rem'}}>Repo</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6" style={{height:'11rem', marginBottom:'2rem'}}>
              <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                <p style={{margin:0, fontSize:'1.25rem'}}>Money Market</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6" style={{height:'11rem', marginBottom:'2rem'}}>
              <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                <p style={{margin:0, fontSize:'1.25rem'}}>Collateral</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6" sm="6" style={{height:'11rem', marginBottom:'2rem'}}>
              <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                <p style={{margin:0, fontSize:'1.25rem'}}>FX</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6" style={{height:'11rem', marginBottom:'2rem'}}>
              <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                <p style={{margin:0, fontSize:'1.25rem'}}>Future</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6" style={{height:'11rem', marginBottom:'2rem'}}>
              <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                <p style={{margin:0, fontSize:'1.25rem'}}>Swap</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6" style={{height:'11rem', marginBottom:'2rem'}}>
              <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                <p style={{margin:0, fontSize:'1.25rem'}}>Option</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6" sm="6" style={{height:'11rem', marginBottom:'2rem'}}>
              <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                <p style={{margin:0, fontSize:'1.25rem'}}>Cash Flow</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6" style={{height:'11rem', marginBottom:'2rem'}}>
              <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                <p style={{margin:0, fontSize:'1.25rem'}}>Bond Coupon</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6" style={{height:'11rem', marginBottom:'2rem'}}>
              <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                <p style={{margin:0, fontSize:'1.25rem'}}>Swap Payment</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6" style={{height:'11rem', marginBottom:'2rem'}}>
              <div style={{backgroundColor:'white', borderRadius:'1rem', width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} className='grow-shadow'>
                <p style={{margin:0, fontSize:'1.25rem'}}>Unwinds</p>
              </div>
            </Col>
          </Row>
          </Col>
      </>
    );
  }
}

export default TransactionSelect;
