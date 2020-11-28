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

  
  
  render() {
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
                        <Col md="4">
                            <p className="input-category">Security</p>
                            <Input placeholder="" type="text" defaultValue={this.props.transaction.security} disabled style={{backgroundColor:'#27292D', color:'#4a90e2'}} />
                        </Col>
                        <Col md="4">
                          <p className="input-category">CUSIP</p>
                          <Input
                            type="text"
                            defaultValue={this.props.transaction.cusip}
                            style={{backgroundColor:'#27292D', color:'#4a90e2'}}
                            disabled
                          />
                        </Col>
                        <Col md="2">
                            <p className="input-category">Side</p>
                            <ButtonGroup style={{marginTop:'-.4rem', marginLeft:'-1.4rem', padding:'.5rem', paddingTop:0}}>
                              <Button
                                className="btn-round"
                                color={this.props.transaction.side === "B" ? "secondary" :"primary"}
                                outline
                                type="button"
                                size='sm'
                                disabled
                              >
                                Buy
                              </Button>
                              <Button
                                className="btn-round"
                                color={this.props.transaction.side === "S" ? "secondary" :"primary"}
                                outline
                                type="button"
                                size='sm'
                                disabled
                              >
                                Sell
                              </Button>
                            </ButtonGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="3">
                          <p className="input-category">Broker</p>
                            <Input
                            type="text"
                            defaultValue={this.props.transaction.brkr_name}
                            style={{backgroundColor:'#27292D', color:'#4a90e2'}}
                            disabled
                            />
                          </Col>
                          <Col md="3">
                            <p className="input-category">Customer</p>
                              <Input
                              type="text"
                              defaultValue={this.props.transaction.customer}
                              style={{backgroundColor:'#27292D', color:'#4a90e2'}}
                              disabled
                              />
                          </Col>
                        <Col md="3">
                          <p className="input-category">Trade Date</p>                                    
                            <Input
                              defaultValue = {this.props.transaction.trade_date}
                              style={{backgroundColor:'#27292D', color:'#4a90e2'}}
                              disabled
                            />
                          </Col>   
                          <Col md="3">
                          <p className="input-category">Trade Time</p>
                            <Input
                              defaultValue = {this.props.transaction.time}
                              style={{backgroundColor:'#27292D', color:'#4a90e2'}}
                              disabled
                            />
                          </Col> 
                      </Row>
                    </Col>
                </Row>
                <div style={{height:'2rem'}}></div>
                <Row className='justify-content-around'>
                    <Col md="5">
                        <p className="input-category">Price (Dec)</p>
                        <Input placeholder="" type="text" defaultValue={this.props.transaction.price} disabled style={{backgroundColor:'#27292D', color:'#4a90e2'}}/>
                    </Col>
                    <Col md="5">
                        <p className="input-category">Quantity (MM)</p>
                        <Input placeholder="" type="text" defaultValue={this.props.transaction.qty} disabled style={{backgroundColor:'#27292D', color:'#4a90e2'}}/>
                    </Col>
                </Row>
              </FormGroup>
            </Col>
          </Col>
      </>
    );
  }
}

export default Transaction;
