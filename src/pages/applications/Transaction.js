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
  Button,
  ButtonGroup,
  Collapse
} from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";

// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      fund: null,
      client: null,
      book: null,
      counterparty: null,
      cusip: null,
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
    const options_cusip = [
      { value: '1', label: '912810SN9' },
      { value: '2', label: 'AR4890242' },
      { value: '3', label: '912810SN9' }
    ]
    const options_broker = [
      { value: '1', label: 'ARQ ADVISORS LLC' },
      { value: '2', label: 'HEXAGON AM LLC' },
      { value: '3', label: 'BGC PARTNERS' }
    ]
    const options_customer = [
      { value: '1', label: 'ARQ ADVISORS LLC' },
      { value: '2', label: 'HEXAGON AM LLC' },
      { value: '3', label: 'BGC PARTNERS' }
    ]
    const options_status = [
      { value: '1', label: 'Accepted' },
      { value: '2', label: 'Pending' },
      { value: '3', label: 'Cancelled' }
    ]
    return (
      <>
      {this.state.alert}
          <Col style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
            <Col md="12">
              {/* <h5>Edit Transaction</h5>
              <p style={{fontSize:'.8rem'}}>Edit and confirm changes to save.</p>
              <hr/> */}
              <FormGroup>
                  <Row style={{justifyContent:'space-between'}}>
                    <Col md="12">
                      <Row>
                        <Col md="6">
                            <p className="input-category">Security</p>
                            <Input placeholder="" type="text" defaultValue="T 1 1/4 05/15/50" />
                        </Col>
                        <Col md="4">
                          <p className="input-category">Cusip #</p>
                          <Select
                            className="react-select primary"
                            classNamePrefix="react-select"
                            name="singleSelect"
                            defaultValue={[options_cusip[0]]}
                            options={options_cusip}
                            onChange={(value) =>
                              this.setState({ cusip: value })
                            }
                          />
                        </Col>
                        <Col md="2">
                            <p className="input-category">Side</p>
                            <ButtonGroup style={{marginTop:'-.4rem', marginLeft:'-1.4rem'}}>
                              <Button
                                className="btn-round"
                                color="info"
                                outline
                                type="button"
                                size='sm'
                              >
                                Buy
                              </Button>
                              <Button
                                className="btn-round"
                                color="info"
                                outline
                                type="button"
                                size='sm'
                              >
                                Sell
                              </Button>
                            </ButtonGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="3">
                          <p className="input-category">Broker</p>
                            <Select
                              className="react-select primary"
                              classNamePrefix="react-select"
                              name="singleSelect"
                              defaultValue={[options_broker[0]]}
                              options={options_broker}
                              onChange={(value) =>
                                this.setState({ cusip: value })
                              }
                            />
                          </Col>
                          <Col md="3">
                            <p className="input-category">Customer</p>
                              <Select
                                className="react-select primary"
                                classNamePrefix="react-select"
                                name="singleSelect"
                                defaultValue={[options_customer[1]]}
                                options={options_customer}
                                onChange={(value) =>
                                  this.setState({ cusip: value })
                                }
                              />
                          </Col>
                        <Col md="3">
                          <p className="input-category">Trade Date</p>
                                    
                                    <ReactDatetime
                                      defaultValue = "7/13/20"
                                      inputProps={{
                                        className: "form-control",
                                        placeholder: "Set date...",
                                        
                                      }}
                                      
                                      // open={true}
                                      // timeFormat={true}
                                    />
                          </Col>   
                          <Col md="3">
                          <p className="input-category">Trade Time</p>
                                    
                                    <ReactDatetime
                                      defaultValue = "4:50:27 PM"
                                      inputProps={{
                                        className: "form-control",
                                        placeholder: "Set date...",
                                        
                                      }}
                                      
                                      // open={true}
                                      // timeFormat={true}
                                    />
                          </Col> 
                      </Row>
                    </Col>
                </Row>
                <div style={{height:'2rem'}}></div>
                <Row className='justify-content-around'>
                    <Col md="2">
                        <p className="input-category">Price</p>
                        <Input placeholder="" type="text" defaultValue="98-18+" />
                    </Col>
                    <Col md="2">
                        <p className="input-category">Price (Dec)</p>
                        <Input placeholder="" type="text" defaultValue="98.57813" />
                    </Col>
                    <Col md="3">
                        <p className="input-category">Quantity (M)</p>
                        <Input placeholder="" type="text" defaultValue="2000" />
                    </Col>
                    <Col md="2">
                        <p className="input-category">Yield</p>
                        <Input placeholder="" type="text" defaultValue="1.3077" />
                    </Col>
                </Row>
                {/* <div style={{height:'2rem'}}></div>
                  <Row>
                    <Col md="8">
                    <p className="input-category">Note</p>
                      <Input placeholder="" type="text" style={{height:'6.7rem'}}/>
                    </Col>
                    <Col md="4" style={{marginTop:'2rem'}}>
                      <p className="input-category">Status</p>
                         <Select
                            className="react-select primary"
                            classNamePrefix="react-select"
                            name="singleSelect"
                            defaultValue={[options_status[0]]}
                            options={options_status}
                            onChange={(value) =>
                              this.setState({ cusip: value })
                            }
                          />
                    </Col>
                  </Row> */}

              </FormGroup>
            </Col>
          </Col>
      </>
    );
  }
}

export default Transaction;
