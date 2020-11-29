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

//date formatter
import { formatDate} from "../../../api/utils"



class SearchInput extends Component {
  static defaultProps = {
    numberOfMonths: 1,
  };
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      selectedDay: null,
      client : null,
      cusip : null
    };
    this.toggle = this.toggle.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  startSearch = () => {

    const parameters = {}

    if (this.state.selectedDay ) { 
      parameters["start_date"] = formatDate(new Date(this.state.selectedDay));
      parameters["end_date"] = formatDate(new Date(this.state.selectedDay));
    }
    if (this.state.client ) parameters["client"] = this.state.client.label;
    if (this.state.cusip) parameters["cusip"] = this.state.cusip;

    this.props.executeSearch(parameters)
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  
  render() {
    return (
      <>
      {this.state.alert}            
            <div style={{display:'flex', flexDirection:'column', backgroundColor:'#27282d', borderRadius:'1rem', position:'relative', boxShadow:'0 6px 10px -4px rgba(0,0,0,0.15)'}}>
            <div style={{display:'flex', flexDirection:'row'}}>
              <Row style={{margin:'1rem'}}>
                  <div style={{marginRight:'1rem'}}>
                      <DayPicker
                        className="Range"
                        numberOfMonths={1}
                        selectedDays={this.state.selectedDay}
                        onTodayButtonClick={(day, modifiers) => console.log(day, modifiers)}
                        onDayClick={this.handleDayClick}
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
                  
                <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', width:'15rem'}}>
                        <div style={{display:'flex', flexDirection:'column', paddingRight:'2rem', backgroundColor:'#202225', borderRadius:'.5rem', padding:'1rem', paddingTop:'.5rem', paddingBottom:'.5rem'}} className='align-self-center d-flex'>
                           <span className='inputlabel'>Set Date</span>
                             {!this.state.selectedDay && 
                             <span style={{color:'white', width:'10rem'}}>Select...</span>
                             }
                             {this.state.selectedDay && 
                             <span style={{color:'white', width:'10rem'}}>{this.state.selectedDay.toLocaleDateString()}</span>
                             }
                        </div> 
                        <br></br> 
                        <div style={{width:'14rem'}}>
                        <div className='button-solid grow' onClick={this.startSearch}>
                          <span>                        
                                  {!this.props.loading ? "Search" : <i
                                      className="fa fa-spinner fa-spin"
                                      style={{ marginRight: "5px" }}
                                  />}</span>
                        </div>
                        <div className='button-red' onClick={this.handleResetClick}>
                          <span>Clear</span>
                        </div>
                        <div style={{height:'1rem'}}/>
                        <div className='button'>
                          {this.state.collapse ? <span>Custom Export</span> : <span>Export</span> }
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
