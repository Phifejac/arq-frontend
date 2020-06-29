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
  Collapse
} from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";

// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

class OptionTransaction extends React.Component {
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
          <Col style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
            <Col md="12">
              <Card>
                <CardBody>
                  <Progress max="100" value="25" />
                  <Row style={{justifyContent:'space-between'}}>


                    <Col md="6">
                      <CardTitle tag="h4">Overview</CardTitle>
                      <Row>
                        <Col md="4">
                          <p className="input-category">Fund</p>
                          <Select
                            className="react-select primary"
                            classNamePrefix="react-select"
                            name="singleSelect"
                            value={this.state.fund}
                            onChange={(value) =>
                              this.setState({ fund: value })
                            }
                            options={[
                              {
                                value: "",
                                label: "Select One",
                                isDisabled: true,
                              },
                              { value: "2", label: "Fund" },
                              { value: "3", label: "Option2" },
                            ]}
                            placeholder="Select fund..."
                          />
                        </Col>
                        <Col md="4">
                          <p className="input-category">Client</p>
                          <Select
                            className="react-select primary"
                            classNamePrefix="react-select"
                            name="singleSelect"
                            value={this.state.client}
                            onChange={(value) =>
                              this.setState({ client: value })
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
                            placeholder="Select client..."
                          />
                        </Col>
                        <Col md="4">
                          <p className="input-category">Book</p>
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
                      </Row>
                      <Row>
                        <Col md="6">
                          <p className="input-category">Counterparty</p>
                          <Select
                            className="react-select primary"
                            classNamePrefix="react-select"
                            name="singleSelect"
                            value={this.state.counterparty}
                            onChange={(value) =>
                              this.setState({ counterparty: value })
                            }
                            options={[
                              {
                                value: "",
                                label: "Single Option",
                                isDisabled: true,
                              },
                              { value: "2", label: "Foobar" },
                              { value: "3", label: "Is great" },
                            ]}
                            placeholder="Select counterparty..."
                          />
                        </Col>
                        <Col md="6">
                          <p className="input-category">Executing Counterparty</p>
                          <Select
                            className="react-select primary"
                            classNamePrefix="react-select"
                            name="singleSelect"
                            value={this.state.excounterparty}
                            onChange={(value) =>
                              this.setState({ excounterparty: value })
                            }
                            options={[
                              {
                                value: "",
                                label: "Single Option",
                                isDisabled: true,
                              },
                              { value: "2", label: "Foobar" },
                              { value: "3", label: "Is great" },
                            ]}
                            placeholder="Select executing counterparty..."
                          />
                        </Col>
                      </Row>
                      
                    </Col>


                    <Col md="5">
                      <CardTitle tag="h4" style={{color:'white'}}>.</CardTitle>
                      <Row>
                        <Col md="4">
                          <p className="input-category">Currency</p>
                          <Select
                            className="react-select primary"
                            classNamePrefix="react-select"
                            name="singleSelect"
                            value={this.state.fund}
                            onChange={(value) =>
                              this.setState({ fund: value })
                            }
                            options={[
                              {
                                value: "",
                                label: "Select One",
                                isDisabled: true,
                              },
                              { value: "2", label: "Fund" },
                              { value: "3", label: "Option2" },
                            ]}
                            placeholder="Select currency..."
                          />
                        </Col>
                        <Col md="4">
                          <p className="input-category">Direction</p>
                          <Select
                            className="react-select primary"
                            classNamePrefix="react-select"
                            name="singleSelect"
                            value={this.state.client}
                            onChange={(value) =>
                              this.setState({ client: value })
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
                            placeholder="Select direction..."
                          />
                        </Col>
                        <Col md="4">
                          <p className="input-category">Underlying Instrument</p>
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
                            placeholder="Select instrument..."
                          />
                        </Col>
                      </Row>
                      <Row>
                      <Col md="4">
                          <p className="input-category">Trade Date</p>
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
                        <Col md="4">
                          <p className="input-category">Settle Date</p>
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
                        <Col md="4">
                          <p className="input-category">Expiration Date</p>
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
                      </Row>
                    </Col>


                    <Col md="6" style={{}}>
                      <CardTitle tag="h4">Transaction Details</CardTitle>
                      <Row>
                        <Col md="6">
                          <p className="input-category">Swap Start Date</p>
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
                          <Col md="6">
                            <p className="input-category">Swap End Date</p>
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
                      </Row>
                      <Row>
                          <Col md="4">
                            <p className="input-category">Forward</p>
                            <Input placeholder="" type="text" />
                          </Col>
                          <Col md="4" style={{marginTop:'2rem', justifyContent:'flex-end', display:'flex'}}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" />
                                <span className="form-check-sign"/>
                                Fixed End Date
                              </Label>
                            </FormGroup>
                          
                          </Col>
                          <Col md="4">
                            <p className="input-category">Tenor</p>
                            <Input placeholder="" type="text" />
                          </Col>
                      </Row>
                      <Row>
                          <Col md="4">
                            <p className="input-category">Premium</p>
                            <Input placeholder="" type="text" />
                          </Col>
                          <Col md="4">
                            <p className="input-category">Premium Amount</p>
                            <Input placeholder="" type="text" />
                          </Col>
                          <Col md="4">
                            <p className="input-category">Percent On</p>
                            <Input placeholder="" type="text" />
                          </Col>
                      </Row>
                    </Col>
                    
                    
                    <Col md="6">
                      <Row style={{marginTop:'4.7rem'}}>
                        <Col md="4">
                          <p className="input-category">Option Direction</p>
                          <Select
                            className="react-select primary"
                            classNamePrefix="react-select"
                            name="singleSelect"
                            value={this.state.counterparty}
                            onChange={(value) =>
                              this.setState({ counterparty: value })
                            }
                            options={[
                              {
                                value: "",
                                label: "Single Option",
                                isDisabled: true,
                              },
                              { value: "2", label: "Foobar" },
                              { value: "3", label: "Is great" },
                            ]}
                            placeholder="Select direction..."
                          />
                        </Col>
                        <Col md="8">
                          <p className="input-category">Notional</p>
                          <Input placeholder="" type="text" />
                        </Col>
                      </Row>
                      <Row style={{marginTop:'.5rem'}}>
                          <Col md="4">
                            <p className="input-category">Option Type</p>
                            <Select
                              className="react-select primary"
                              classNamePrefix="react-select"
                              name="singleSelect"
                              value={this.state.counterparty}
                              onChange={(value) =>
                                this.setState({ counterparty: value })
                              }
                              options={[
                                {
                                  value: "",
                                  label: "Single Option",
                                  isDisabled: true,
                                },
                                { value: "2", label: "Foobar" },
                                { value: "3", label: "Is great" },
                              ]}
                              placeholder="Select type..."
                            />
                          </Col>
                          <Col md="8">
                            <p className="input-category">Strike</p>
                            <Input placeholder="" type="text" />
                          </Col>
                        </Row>
                        <Row>
                          <Col md="4">
                            <p className="input-category">Strategy</p>
                            <Select
                              className="react-select primary"
                              classNamePrefix="react-select"
                              name="singleSelect"
                              value={this.state.fund}
                              onChange={(value) =>
                                this.setState({ fund: value })
                              }
                              options={[
                                {
                                  value: "",
                                  label: "Select One",
                                  isDisabled: true,
                                },
                                { value: "2", label: "Fund" },
                                { value: "3", label: "Option2" },
                              ]}
                              placeholder="Select strategy..."
                            />
                          </Col>
                          <Col md="4">
                            <p className="input-category">Post Date</p>
                            <Select
                              className="react-select primary"
                              classNamePrefix="react-select"
                              name="singleSelect"
                              value={this.state.client}
                              onChange={(value) =>
                                this.setState({ client: value })
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
                              placeholder="Set date..."
                            />
                          </Col>
                          <Col md="4">
                            <div className="form-check-radio" style={{marginBottom:-3,  marginTop:6}}>
                            <Label check>
                              <Input
                                defaultValue="option1"
                                id="exampleRadios11"
                                name="exampleRadioz"
                                type="radio"
                              />
                              Underlying Swap <span className="form-check-sign" />
                            </Label>
                          </div>
                          <div className="form-check-radio" style={{marginBottom:-3}}>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue="option2"
                                id="exampleRadios12"
                                name="exampleRadioz"
                                type="radio"
                              />
                              Unwind <span className="form-check-sign" />
                            </Label>
                          </div>
                          <div className="form-check-radio">
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue="option2"
                                id="exampleRadios12"
                                name="exampleRadioz"
                                type="radio"
                              />
                              Collateral Amount <span className="form-check-sign" />
                            </Label>
                          </div>

                          </Col>
                        </Row>
                    </Col>
                 
                  </Row>


                  <Row>
                    <Col md="4">
                    <p className="input-category">Note</p>
                      <Input placeholder="" type="text" style={{height:'6.7rem'}}/>
                    </Col>
                    <Col md="3">
                    <p className="input-category">Proposed By</p>
                            <Select
                              className="react-select primary"
                              classNamePrefix="react-select"
                              name="singleSelect"
                              value={this.state.client}
                              onChange={(value) =>
                                this.setState({ client: value })
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
                              placeholder="Select client..."
                            />
                      <p className="input-category">Executed By</p>
                            <Select
                              className="react-select primary"
                              classNamePrefix="react-select"
                              name="singleSelect"
                              value={this.state.client}
                              onChange={(value) =>
                                this.setState({ client: value })
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
                              placeholder="Select client..."
                            />
                    </Col>
                    <Col md="5" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                      <Col md='7'>  
                        <p className="input-category">Transaction ID</p>
                        <Input placeholder="" type="text" />
                        <Row style={{paddingTop:10}}>
                          <Button className="btn-round" color="primary" onClick={this.warningWithConfirmAndCancelMessage}>
                            Search
                          </Button>
                          <Button className="btn-round" color="primary" outline>
                            Insert
                          </Button>
                          <Button className="btn-round" color="danger" outline>
                            Delete
                          </Button>
                        </Row>
                      </Col>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Col>
      </>
    );
  }
}

export default OptionTransaction;
