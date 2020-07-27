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
  TabContent,
  TabPane,
  Nav,
  NavLink,
  NavItem
} from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";

// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import ReportTable from "../internal-reports/ReportTable";
import TransactionTable from "./TransactionTable";

class TradeLinking extends React.Component {
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

      horizontalTabs: "home",
      verticalTabs: "info",
      pageTabs: "homePages",
      openedCollapses: ["collapseOne", "collapse1"],
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
          <Row style={{marginBottom:'3rem', display:'flex', flexDirection:'column', justifyContent:'space-between', backgroundColor:'white', borderRadius:'1rem', padding:'.5rem'}} className='card-shadow'>
                  <div className="nav-tabs-navigation" style={{width:'40%'}}>
                    <div className="nav-tabs-wrapper">
                      <Nav id="tabs" role="tablist" tabs>
                        <NavItem>
                          <NavLink
                            aria-expanded={this.state.horizontalTabs === "home"}
                            data-toggle="tab"
                            href="#pablo"
                            role="tab"
                            className={
                              this.state.horizontalTabs === "home"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              this.setState({ horizontalTabs: "home" })
                            }
                          >
                            Home
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-expanded={
                              this.state.horizontalTabs === "profile"
                            }
                            data-toggle="tab"
                            href="#pablo"
                            role="tab"
                            className={
                              this.state.horizontalTabs === "profile"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              this.setState({ horizontalTabs: "profile" })
                            }
                          >
                            Profile
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-expanded={
                              this.state.horizontalTabs === "messages"
                            }
                            data-toggle="tab"
                            href="#pablo"
                            role="tab"
                            className={
                              this.state.horizontalTabs === "messages"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              this.setState({ horizontalTabs: "messages" })
                            }
                          >
                            Messages
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </div>
                  <TabContent
                    className="text-center"
                    id="my-tab-content"
                    activeTab={this.state.horizontalTabs}
                  >
                    <TabPane tabId="home" role="tabpanel">

                      <p>
                        Larger, yet dramatically thinner. More powerful, but
                        remarkably power efficient. With a smooth metal surface
                        that seamlessly meets the new Retina HD display.
                      </p>
                      
                    </TabPane>
                    <TabPane tabId="profile" role="tabpanel">
                      <p>Here is your profile.</p>
                    </TabPane>
                    <TabPane tabId="messages" role="tabpanel">
                      <p>Here are your messages.</p>
                    </TabPane>
                  </TabContent>
              <Col lg='5'>
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
                          <p className="input-category">Account</p>
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
                            placeholder="Select account..."
                          />
                        </Col>
                      </Row>  
              </Col>
              <Col lg='2' style={{justifyContent:'center', display:'flex', flexDirection:'column'}}>
                <Button className="btn-round" color="primary" onClick={this.warningWithConfirmAndCancelMessage} style={{marginLeft:'2.5rem', marginRight:'2.5rem', marginTop:'3rem'}} outline>
                  Search
                </Button>
              </Col>
              <Col lg='5' style={{}}>
                <h4 style={{marginTop:'.5rem'}}>Link Trades</h4>
              </Col>
              <Col lg='7' style={{paddingTop:10}}>
                <TransactionTable/>
              </Col>
              <Col lg='5'>
                <div style={{borderRadius:5, backgroundColor:'#F7FAFF', width:'100%', height:'100%'}}>

                </div>
              </Col>
          </Row>
      </>
    );
  }
}

export default TradeLinking;
