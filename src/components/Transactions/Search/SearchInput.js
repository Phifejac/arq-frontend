import React, { Component } from "react";


// reactstrap components
import {
  Row,
  FormGroup,
  Label,
  Input,
  Collapse
} from "reactstrap";

// import TransactionData from './TransactionData'
import Helmet from 'react-helmet'
import DayPicker, { DateUtils } from 'react-day-picker';
import Select from "react-select";



class SearchInput extends Component {
  static defaultProps = {
    numberOfMonths: 2,
  };
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.toggle = this.toggle.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
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


  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  
  render() {
    const { from, to, enteredTo } = this.state;
    const modifiers = { start: from, end: enteredTo, Month: {color:'white'}};
    const disabledDays = { before: this.state.from };
    const selectedDays = [from, { from, to: enteredTo }];
    return (
      <>
      {this.state.alert}            
            <div style={{display:'flex', flexDirection:'column', backgroundColor:'#27282d', borderRadius:'1rem', position:'relative', boxShadow:'0 6px 10px -4px rgba(0,0,0,0.15)'}}>
            <div style={{display:'flex', flexDirection:'row'}}>
              <Row style={{margin:'1rem'}}>
                  <div style={{marginRight:'1rem'}}>
                      <DayPicker
                        className="Range"
                        numberOfMonths={this.state.range === '1day' ? 1 : 2}
                        fromMonth={from}
                        selectedDays={selectedDays}
                        disabledDays={disabledDays}
                        modifiers={modifiers}
                        onDayClick={this.handleDayClick}
                        onDayMouseEnter={this.handleDayMouseEnter}
                        // showOutsideDays

                      />
                      <Helmet>
                        <style>{`
                .Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                  background-color: #202125 !important;
                  color: #4a90e2;
                }
                .Range .DayPicker-Day {
                  border-radius: 0 !important;
                  color: white;
                }
                .Range .DayPicker-OuDay {
                  border-radius: 0 !important;
                  color: white;
                }
                .Range .DayPicker-Caption {
                  border-radius: 0 !important;
                  color: white;
                }
              `}</style>
                      </Helmet>
                    </div>
                  
                <div style={{ display:'flex', flexDirection:'column', justifyContent:'center'}}>
                  <div style={{height:'4rem', backgroundColor:'#202225', borderRadius:'1rem', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', padding:'2rem', marginBottom:'1rem'}}>
                        {this.state.range === '1day' ? 
                        
                        <div style={{display:'flex', flexDirection:'column', paddingRight:'2rem'}}>
                           <span className='inputlabel'>Set Date</span>
                             {!from && 
                             <span style={{color:'white'}}>Select...</span>
                             }
                             {from && 
                             <span style={{color:'white'}}>{from.toLocaleDateString()}</span>
                             }
                         </div>                     
                        
                        :
                        <div style={{display:'flex', flexDirection:'row'}}>
                        <div style={{display:'flex', flexDirection:'column', paddingRight:'2rem'}}>
                          <span className='inputlabel'>Start Date</span>
                            {!from && 
                            <span style={{color:'white'}}>Select...</span>
                            }
                            {from && 
                            <span style={{color:'white'}}>{from.toLocaleDateString()}</span>
                            }
                        </div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                          <span className='inputlabel'>Start Date</span>
                            {!to && 
                            <span style={{color:'white'}}>Select...</span>
                            }
                            {to && 
                            <span style={{color:'white'}}>{to.toLocaleDateString()}</span>
                            }
                        </div>
                        </div>
                         }
                      
                        <div className="link" onClick={this.handleResetClick} style={{paddingLeft:'1rem'}}>
                          {!from && 
                            !to && (
                              <span style={{color:'grey', fontWeight:600, transition:'200ms ease'}}>Clear</span>
                          )}
                          {!from && 
                            to && (
                              <span style={{color:'#4a90e2', fontWeight:600, transition:'200ms ease'}}>Clear</span>
                          )}
                          {from && 
                            !to && (
                              <span style={{color:'#4a90e2', fontWeight:600, transition:'500ms ease'}}>Clear</span>
                          )}
                          {from && 
                            to && (
                              <span style={{color:'#4a90e2', fontWeight:600, transition:'500ms ease'}}>Clear</span>
                          )}
                        </div>
                    </div>
                    <div style={{width:'80%'}} className='align-self-center'>
                    <label className="labeltext">Customer</label>
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
                            placeholder="Select customer..."
                          />
                   </div>
                   <div style={{width:'80%'}} className='align-self-center'>
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
                            placeholder="Select security..."
                          />
                   </div>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <div style={{width:'14rem'}}>
                      <div className='button-solid grow'>
                        <span>Search</span>
                      </div>
                      <div className='button-red' onClick={this.handleResetClick}>
                        <span>Clear</span>
                      </div>
                      <div style={{height:'1rem'}}/>
                      <div className='button'>
                        {this.state.collapse ? <span>Custom Export</span> : <span>Quick Export</span> }
                      </div>
                      <div className='button' onClick={this.toggle}>
                        {this.state.collapse ? 'Custom  -' : 'Custom  +'}
                      </div>
                    </div>
                </div>
              </Row>
            </div>


            <Collapse isOpen={this.state.collapse}>
            <div style={{display:'flex', flexDirection:'row', paddingLeft:'2.5rem', marginTop:'0rem', marginBottom:'1rem', zIndex:1}}>
              <div>
                <p style={{fontSize:'large', marginBottom:'.5rem', color:'white'}}>Export Settings</p>
                <div style={{display:'flex', flexDirection:'row', color:'#FFFFFF50'}}>

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
            </div>
            </Collapse>
            </div>
      </>
    );
  }
}

export default SearchInput;
