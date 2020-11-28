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
          onCancel={() => this.cancelDelete()}
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
  cancelDelete = () => {
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
  
  dateToString(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return (yyyy + "-" + mm + "-" + dd)
  }

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
              {/* <h5>Edit Transaction</h5>
              <p style={{fontSize:'.8rem'}}>Edit and confirm changes to save.</p>
              <hr/> */}
              <FormGroup>
                  <Row style={{justifyContent:'space-between'}}>
                    <Col md="12">
                      <Row>
                        <Col md="4">
                            <p className="input-category">Security</p>
                            <Input placeholder="" type="text" defaultValue={this.state.security} className='bgtext' onChange={(e) => this.setState({security: e.target.value})}/>
                        </Col>
                        <Col md="4">
                          <p className="input-category">CUSIP</p>
                          <Input
                            defaultValue={this.state.cusip}
                            style={{backgroundColor:'#27292D', color:'#4a90e2'}}
                            onChange={(e) =>
                              this.setState({ cusip: e.target.value })
                            }
                          />
                        </Col>
                        <Col md="2">
                            <p className="input-category">Side</p>
                            <ButtonGroup style={{marginTop:'-.4rem', marginLeft:'-1.4rem', padding:'.5rem', paddingTop:0}}>
                              <Button
                                className="btn-round"
                                color={this.state.side === "B" ? "secondary" :"primary"}
                                outline
                                type="button"
                                size='sm'
                                onClick={() => this.setState({side: "B"})}
                              >
                                Buy
                              </Button>
                              <Button
                                className="btn-round"
                                color={this.state.side === "S" ? "secondary" :"primary"}
                                outline
                                type="button"
                                size='sm'
                                onClick={() => this.setState({side: "S"})}
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
                              defaultValue={this.state.broker}
                              style={{backgroundColor:'#27292D', color:'#4a90e2'}}
                              onChange={(e) =>
                                this.setState({ broker: e.target.value })
                              }
                            />
                          </Col>
                          <Col md="3">
                            <p className="input-category">Customer</p>
                              <Input
                                defaultValue={this.state.customer}
                                style={{backgroundColor:'#27292D', color:'#4a90e2'}}
                                onChange={(e) =>
                                  this.setState({ customer: e.target.value })
                                }
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
                                      onChange={(e) => this.setState({trade_date: this.dateToString(e._d)})}
                                      timeFormat={false}
                                    />
                          </Col>   
                          <Col md="3">
                          <p className="input-category">Trade Time</p>      
                              <Input
                                defaultValue={this.state.time}
                                style={{backgroundColor:'#27292D', color:'#4a90e2'}}
                                onChange={(e) =>
                                  this.setState({ time: e.target.value })
                                }
                              />
                          </Col> 
                      </Row>
                    </Col>
                </Row>
                <div style={{height:'2rem'}}></div>
                <Row className='justify-content-around'>
                  <Col md="5">
                      <p className="input-category">Price (Dec)</p>
                      <Input placeholder="" type="text" defaultValue={this.state.price} onChange={(e) => this.setState({price: e.target.value})} className='bgtext'/>
                  </Col>
                  <Col md="5">
                      <p className="input-category">Quantity (MM)</p>
                      <Input placeholder="" type="text" defaultValue={this.state.qty} onChange={(e) => this.setState({qty: e.target.value})} className='bgtext'/>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Col>
      </>
    );
  }
}

export default EditTransaction;
