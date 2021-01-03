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

class EditTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      cusip: this.props.transaction.cusip,
      security: this.props.transaction.security,
      side: this.props.transaction.side,
      broker: this.props.transaction.brkr_name,
      customer: this.props.transaction.customer,
      trade_date: this.props.transaction.trade_date,
      time: this.props.transaction.time,
      price: this.props.transaction.price,
      qty: this.props.transaction.qty,
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
                            <Input placeholder="" type="text" defaultValue={this.state.security} className='bgtext' name="security" onChange={(e) => this.props.handleChange(e)}/>
                        </Col>
                        <Col md="4">
                          <p className="input-category">CUSIP</p>
                          <Input
                            type="text"
                            className='bgtext'
                            defaultValue={this.state.cusip}
                            name="cusip"
                            onChange={(e) => this.props.handleChange(e)}
                          />
                        </Col>
                        <Col md="2">
                            <p className="input-category">Side</p>
                            <div>
                              <div></div>
                            </div>
                            <ButtonGroup style={{marginTop:'-.4rem', marginLeft:'-1rem', padding:'.5rem', paddingTop:0}}>
                              <Button
                                className="btn-round"
                                color={this.state.side === "B" ? "secondary" :"primary"}
                                outline
                                color='primary'
                                type="button"
                                size='sm'
                                name="side"
                                value="B"
                                onClick={(e) => {this.props.handleChange(e); this.setState({side: "B"})}}
                              >
                                Buy
                              </Button>
                              <Button
                                className="btn-round"
                                color={!this.state.side === "S" ? "secondary" :"primary"}
                                outline
                                type="button"
                                size='sm'
                                name="side"
                                value="S"
                                onClick={(e) => {this.props.handleChange(e); this.setState({side: "S"})}}
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
                              className='bgtext'
                              defaultValue={this.state.broker}
                              name="broker"
                              onChange={(e) => this.props.handleChange(e)}
                            />
                          </Col>
                          <Col md="3">
                            <p className="input-category">Customer</p>
                              <Input
                                type="text"
                                className='bgtext'
                                defaultValue={this.state.customer}
                                name="customer"
                                onChange={(e) => this.props.handleChange(e)}
                              />
                          </Col>
                        <Col md="3">
                          <p className="input-category">Trade Date</p>
                                    
                                    <ReactDatetime
                                      defaultValue = {this.state.trade_date}
                                      inputProps={{
                                        className: "form-control bgtext",
                                        placeholder: "Set date...",
                                        
                                      }}
                                      name="trade_date"
                                      onChange={(e) => this.props.handleDateChange(e)}
                                      timeFormat={false}
                                    />
                          </Col>   
                          <Col md="3">
                          <p className="input-category">Trade Time</p>      
                              <Input
                                type="text"
                                className='bgtext'
                                defaultValue={this.state.time}
                                name="time"
                                onChange={(e) => this.props.handleChange(e)}
                              />
                          </Col> 
                      </Row>
                    </Col>
                </Row>
                <div style={{height:'2rem'}}></div>
                <Row className='justify-content-around'>
                  <Col md="5">
                      <p className="input-category">Price (Dec)</p>
                      <Input 
                        placeholder="" 
                        type="text" 
                        defaultValue={this.state.price} 
                        name="price"
                        onChange={(e) => this.props.handleChange(e)}
                        className='bgtext'/>
                  </Col>
                  <Col md="5">
                      <p className="input-category">Quantity (MM)</p>
                      <Input 
                        placeholder="" 
                        type="text" 
                        defaultValue={this.state.qty} 
                        name="qty"
                        onChange={(e) => this.props.handleChange(e)} 
                        className='bgtext'/>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
            <br></br>
            <br></br>
          </Col>
      </>
    );
  }
}

export default EditTransaction;
