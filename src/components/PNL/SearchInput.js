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
import { formatDate} from "../../api/utils"



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

    console.log("new transactions parameters", parameters)
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
            <div style={{backgroundColor:'#27282d', borderRadius:'1rem', position:'relative', boxShadow:'0 6px 10px -4px rgba(0,0,0,0.15)', marginTop:'5rem', marginBottom:'1rem'}}>
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
                    <div style={{width:'80%'}} className='align-self-center'>
                    <label className="labeltext">Client</label>
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
                              { value: 1, label: "Hexagon AM LLC" },
                              { value: 2, label: "BGC Partners" },
                            ]}
                            placeholder="Select client..."
                          />
                   </div>
                   <div style={{width:'80%'}} className='align-self-center'>
                    <label className="labeltext">Cusip</label>
                    <Input placeholder="Enter cusip..." type="text" defaultValue="" style={{backgroundColor:'#27292D', color:'#FFFFFF80', padding:'.5rem', fontSize:'small', paddingTop:'.8rem', paddingBottom:'.8rem'}} onChange ={(e) => this.setState({ cusip : e.target.value})} />
                   </div>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <div style={{width:'14rem'}}>
                      <div className='button-solid grow' onClick={this.startSearch}>
                        <span>Search</span>
                      </div>
                      <div className='button-red' onClick={this.handleResetClick}>
                        <span>Clear</span>
                      </div>
                    </div>
                </div>
              </Row>
            </div>
      </>
    );
  }
}

export default SearchInput;
