import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";

// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import Helmet from 'react-helmet'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const animatedComponents = makeAnimated();

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted grey',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

class AdvancedSearchInputs extends React.Component {
  static defaultProps = {
    numberOfMonths: 2,
  };
  constructor(props) {
    super(props);
    this.state = {
      value4: {
        min: 5,
        max: 10,
      },
      value5: {
        min: 5,
        max: 15,
      },
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
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  getInitialState() {
    return {
      from: null,
      to: null,
      enteredTo: null, // Keep track of the last day for mouseEnter.
    };
  }

  isSelectingFirstDay(from, to, day) {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  }

  handleDayClick(day) {
    const { from, to } = this.state;
    if (from && to && day >= from && day <= to) {
      this.handleResetClick();
      return;
    }
    if (this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null,
      });
    } else {
      this.setState({
        to: day,
        enteredTo: day,
      });
    }
  }

  handleDayMouseEnter(day) {
    const { from, to } = this.state;
    if (!this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day,
      });
    }
  }

  handleResetClick() {
    this.setState(this.getInitialState());
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
    const { from, to, enteredTo } = this.state;
    const modifiers = { start: from, end: enteredTo, Month: {color:'white'}};
    const disabledDays = { before: this.state.from };
    const selectedDays = [from, { from, to: enteredTo }];
    return (
      <>
      {this.state.alert}
          <Row>
            <Col>
              <Row>
                
              </Row>
            </Col>
            <Col>
            </Col>
          </Row>

          <Row style={{}}>
            <div style={{backgroundColor:'#27282d', borderRadius:'1rem', position:'relative', boxShadow:'0 6px 10px -4px rgba(0,0,0,0.15)', padding:'1rem', marginTop:'1rem', paddingTop:'0rem'}}>
            <Row>
            <Col lg='6'>
                <Row>
                  <Col md="4">
                          <label className="labeltext">Side</label>
                          <div style={{padding:'.5rem', paddingLeft:'2.3rem'}}>
                          <span style={{paddingRight:'.5rem', fontSize:'small', color:'#FFFFFF50'}}>Sell</span>
                          <Switch
                            offColor=""
                            onColor=""
                            onText=""
                            offText=""
                          />
                          <span style={{color:'#4a90e2', paddingLeft:'.5rem', fontSize:'small'}}>Buy</span>
                          </div>
                        </Col>
                  <Col md="8">
                          <label className="labeltext">Security</label>
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
                    <label className="labeltext">Price (M)</label>
                    <form className="form">
                    <InputRange
                      maxValue={20}
                      minValue={0}
                      formatLabel={value => `$${value}`}
                      value={this.state.value4}
                      onChange={value => this.setState({ value4: value })}
                      onChangeComplete={value => console.log(value)} />
                      </form>
                   </Col>
                   <Col md="4">
                    <label className="labeltext">Qty (M)</label>
                    <form className="form">
                      <InputRange
                        maxValue={20}
                        minValue={0}
                        formatLabel={value => `${value}`}
                        value={this.state.value5}
                        onChange={value => this.setState({ value5: value })}
                        onChangeComplete={value => console.log(value)} />
                        </form>
                   </Col>
                   <Col md="4">
                    <label className="labeltext">Cusip</label>
                      <Select
                            className="react-select primary"
                            classNamePrefix="react-select"
                            components={animatedComponents}
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
                            placeholder="Select side..."
                            styles={customStyles}
                          />
                   </Col>
                   <Col lg='6'>
                    <label className="labeltext">Fund</label>
                    <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      components={animatedComponents}
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
                      styles={customStyles}
                      />   
                  </Col>
                  <Col lg='6'>
                    <label className="labeltext">Book</label>
                    <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      components={animatedComponents}
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
                      styles={customStyles}
                      />   
                  </Col>
                  <Col lg='6'>
                    <label className="labeltext">Customer</label>
                    <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      components={animatedComponents}
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
                      placeholder="Select customer..."
                      styles={customStyles}
                      />   
                  </Col>
                  <Col lg='6'>
                    <label className="labeltext">Executing Counterparty</label>
                    <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      components={animatedComponents}
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
                      placeholder="Select counterparty..."
                      styles={customStyles}
                      />   
                  </Col>          
                </Row>
              </Col>               
            <Col md='6' style={{}}>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginRight:'1rem', marginTop:'.5rem'}}>
                  <div className="labeltext" style={{marginLeft:'1rem'}}>Trade Date</div>
                  <div>
                    <div className="labeltext" style={{paddingLeft:'1rem', fontWeight:'500'}}>
                    {!from && 
                          <span style={{color:'white', marginRight:'.5rem'}}>Select...</span>
                          }
                          {from && 
                          <span style={{color:'white', marginRight:'.5rem'}}>{from.toLocaleDateString()}</span>
                          }
                    {!from && 
                          <span style={{color:'grey', fontWeight:600, transition:'200ms ease', cursor:'pointer'}} className='mr-auto' onClick={this.handleResetClick}>Clear</span>
                          }
                          {from && 
                          <span style={{color:'#4a90e2', fontWeight:600, transition:'200ms ease', cursor:'pointer'}} className='mr-auto' onClick={this.handleResetClick}>Clear</span>
                          }
                    </div>
                  </div>
                </div>
                <DayPicker
                  numberOfMonths={2}
                  fromMonth={from}
                  selectedDays={this.state.selectedDay}
                  onDayClick={this.handleDayClick}
                  disabledDays={disabledDays}
                  modifiers={modifiers}
                  onDayClick={this.handleDayClick}
                  onDayMouseEnter={this.handleDayMouseEnter}
                  // showOutsideDays

                />
                <Helmet>
                  <style>{`
                .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                background-color: #202125 !important;
                color: #4a90e2;
                }
                .DayPicker-Day {
                border-radius: .5rem !important;
                color: white;
                }
                .DayPicker-Day:hover {
                border-radius: .5rem !important;
                color: #4a90e2;
                font-weight:bold
                }
                .DayPicker-OuDay {
                border-radius: 0 !important;
                color: white;
                }
                .DayPicker-Caption {
                border-radius: 0 !important;
                color: white;
                }
                `}</style>
                </Helmet>
              </Col>
            </Row>
            </div>
            <Col lg='5' style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
               
               <Col md ='2' style={{display:'flex', flexDirection:'column', alignItems:'center', paddingLeft:'8rem'}}>
                    <div className='d-flex flex-row' style={{marginTop:'-1.5rem'}}>
                      <div className='datefilter'>30 Days</div>
                      <div className='datefilter'>All Time</div>
                    </div>
                    <div className='d-flex flex-row'>
                      <div className='datefilter'>This Month</div>
                      <div className='datefilter'>Last Month</div>
                    </div>
                    <div style={{width:'14rem'}}>
                      <div className='button-solid'>
                        {this.state.collapse ? <span>Custom Export</span> : <span>Search</span> }
                      </div>
                      <div className='button-red' onClick={this.toggle}>
                        Clear
                      </div>
                    </div>
                </Col>
                    
            </Col>
          </Row>
          <Col>
          </Col>
      </>
    );
  }
}

export default AdvancedSearchInputs;
