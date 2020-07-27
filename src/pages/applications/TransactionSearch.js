import React, { Component } from "react";
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
import ReportTable from "../internal-reports/ReportTable";
import TransactionTable from "./TransactionTable";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TransactionData from './TransactionData'
import TransactionColumn from "./TransactionColumn";

const Transactions = [
  // {id: uuid(), content:'First Task'},
  // {id: uuid(), content:'First Task'}
]


class TransactionSearch extends Component {
  state = TransactionData;
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
      collapse: false
    };
    this.toggle = this.toggle.bind(this);
  }

  onDragEnd = result => {
    console.log(result)
  };

  toggle() {
    this.setState({ collapse: !this.state.collapse });
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
          <div style={{backgroundColor:'white'}}>
          <Col lg='12' style={{marginBottom:'0rem', padding:'1.5rem', marginTop:'-1rem'}}>
              <h4 style={{marginTop:'0rem', fontFamily:'Rubik'}}>Transaction Search</h4>
          </Col>
          <Col lg='12'>
          <p className='info' style={{color:'lightgrey', fontSize:'1.1rem', marginTop:'-1rem', marginLeft:'33%'}}>Quick Analytics</p>
          <Row style={{display:'flex', flexDirection:'row'}}>
            <div style={{flex:.8, display:'flex', justifyContent:'flex-start', alignItems:'center', marginTop:'-3rem', paddingLeft:'2rem'}}>
              <div>
                <p className="input-category">Start Date</p>
                    <FormGroup>
                      <ReactDatetime
                        inputProps={{
                          className: "form-control",
                          placeholder: "Set date...",
                        }}
                        // timeFormat={false}
                      />
                    </FormGroup>
                    <p className="input-category">End Date</p>
                    <FormGroup>
                      <ReactDatetime
                        inputProps={{
                          className: "form-control",
                          placeholder: "Set date...",
                        }}
                        // timeFormat={false}
                      />
                    </FormGroup>
              </div>
              <div style={{paddingLeft:'1rem'}}>
                  <Button className="btn-round" color="primary" onClick={this.warningWithConfirmAndCancelMessage} style={{}}>
                    Search
                  </Button>
              </div>
            </div>
            <div style={{display:'flex', flexDirection:'row', flex:1}}>
            <Col>
              <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <span style={{color:'grey', fontFamily:'Rubik', fontSize:'2rem', color:'#96C35E'}}>1000</span>
                <p style={{color:'grey', fontFamily:'Rubik', fontSize:'1rem'}}>Net Notional</p>
              </div>
            </Col>
            <Col>
              <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <span style={{color:'grey', fontFamily:'Rubik', fontSize:'2rem', color:'#3E526D'}}>1000</span>
                <p style={{color:'grey', fontFamily:'Rubik', fontSize:'1rem'}}>Avg. Weighted Price</p>
              </div>
            </Col>
            <Col>
              <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <span style={{color:'grey', fontFamily:'Rubik', fontSize:'2rem', color:'#3E526D'}}>1000</span>
                <p style={{color:'grey', fontFamily:'Rubik', fontSize:'1rem'}}>Other Stat</p>
              </div>
            </Col>
            </div>
            <div style={{flex:.8}}></div>
          </Row>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', paddingRight:'1rem', marginTop:'0rem', zIndex:1}}>
            <Button className="btn-round" color="info" outline>
              {this.state.collapse ? <span>Custom Export</span> : <span>Quick Export</span> }
            </Button>
            <Button className="btn-round" color="primary" outline onClick={this.toggle}>
              Customize Report
            </Button>
            </div>
            <Collapse isOpen={this.state.collapse}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', paddingRight:'1rem', marginTop:'0rem', marginBottom:'.5rem', zIndex:1}}>
              <div>
                <p style={{fontSize:'small', marginBottom:'.5rem', color:'#3E526D'}}>Default</p>
                <div style={{display:'flex', flexDirection:'row'}}>

                  <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{flex:1, justifyContent:'center'}}>
                      <FormGroup check inline>
                        <Label check>
                          <Input defaultChecked type="checkbox" />
                          <span className="form-check-sign" />ID
                        </Label>
                      </FormGroup>{" "}
                    </div>
                    <div style={{flex:1, justifyContent:'center'}}>
                      <FormGroup check inline>
                        <Label check>
                          <Input defaultChecked type="checkbox" />
                          <span className="form-check-sign" />Trade Date
                        </Label>
                      </FormGroup>{" "}
                    </div>
                  </div>

                  <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{flex:1, justifyContent:'center'}}>
                      <FormGroup check inline>
                        <Label check>
                          <Input defaultChecked type="checkbox" />
                          <span className="form-check-sign" />Type
                        </Label>
                      </FormGroup>{" "}
                    </div>
                    <div style={{flex:1, justifyContent:'center'}}>
                      <FormGroup check inline>
                        <Label check>
                          <Input defaultChecked type="checkbox"/>
                          <span className="form-check-sign" />Counterparty
                        </Label>
                      </FormGroup>{" "}
                    </div>
                  </div>

                  <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{flex:1, justifyContent:'center'}}>
                      <FormGroup check inline>
                        <Label check>
                          <Input defaultChecked type="checkbox" />
                          <span className="form-check-sign" />Fund
                        </Label>
                      </FormGroup>{" "}
                    </div>
                    <div style={{flex:1, justifyContent:'center'}}>
                      <FormGroup check inline>
                        <Label check>
                          <Input defaultChecked type="checkbox"/>
                          <span className="form-check-sign" />Amount
                        </Label>
                      </FormGroup>{" "}
                    </div>
                  </div>

                </div>
              </div>
              <div style={{paddingLeft:'2rem'}}>
                <p style={{fontSize:'small', marginBottom:'.5rem', color:'grey'}}>Advanced</p>
                <div style={{display:'flex', flexDirection:'row'}}>

                  <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{flex:1, justifyContent:'center'}}>
                      <FormGroup check inline>
                        <Label check>
                          <Input type="checkbox" />
                          <span className="form-check-sign" />Direction
                        </Label>
                      </FormGroup>{" "}
                    </div>
                    <div style={{flex:1, justifyContent:'center'}}>
                      <FormGroup check inline>
                        <Label check>
                          <Input  type="checkbox" />
                          <span className="form-check-sign" />Currency
                        </Label>
                      </FormGroup>{" "}
                    </div>
                  </div>

                  <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{flex:1, justifyContent:'center'}}>
                      <FormGroup check inline>
                        <Label check>
                          <Input  type="checkbox"/>
                          <span className="form-check-sign" />Confirmed
                        </Label>
                      </FormGroup>{" "}
                    </div>
                    <div style={{flex:1, justifyContent:'center'}}>
                      <FormGroup check inline>
                        <Label check>
                          <Input  type="checkbox"/>
                          <span className="form-check-sign" />Client
                        </Label>
                      </FormGroup>{" "}
                    </div>
                  </div>

                </div>
              </div>
            </div>
            </Collapse>
          <div style={{zIndex:-1}}>
            <TransactionTable/>
          </div>  
          {/* <Col lg='12'>
            <DragDropContext
              // onDragStart
              // onDragUpdate
              onDragEnd={this.onDragEnd}
              >
                {this.state.columnOrder.map((columnId) => {
                const column = this.state.columns[columnId];
                const items = column.itemIds.map(itemId => this.state.items[itemId]);
                
                return <TransactionColumn key={column.id} column={items} items={items}/>;
              })}
            </DragDropContext>

          </Col> */}

          </Col> 
          </div>
      </>
    );
  }
}

export default TransactionSearch;
