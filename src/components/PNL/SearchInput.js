import React, { Component } from "react";


// reactstrap components
import {
  Row,
  FormGroup,
  Label,
  Input,
  Collapse,
  Col,
  Card
} from "reactstrap";

// import TransactionData from './TransactionData'
import Helmet from 'react-helmet'
import DayPicker, { DateUtils } from 'react-day-picker';
import Select from "react-select";

//date formatter
import { formatDate} from "../../api/utils"



class SearchInput extends Component {
  static defaultProps = {
    numberOfMonths: 2,
  };
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      selectedDay: null,
      start_date: null,
      end_date: null,
      client : null,
      cusip : null
    };
    this.toggle = this.toggle.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  startSearch = () => {

    const parameters = {}

    if (this.state.start_date) {
      parameters["start_date"] = formatDate(new Date(this.state.start_date));
      parameters["end_date"] = formatDate(new Date(this.state.end_date));
    }
    if (this.state.client ) parameters["client"] = this.state.client.label;
    if (this.state.cusip) parameters["cusip"] = this.state.cusip;

    console.log("new transactions parameters", parameters)
    this.props.executeSearch(parameters)
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    console.log("range", range)
    this.setState(range);
    this.setState({ start_date: range.from, end_date: range.to });
  }

  // handleResetClick() {
  //   this.setState(this.getInitialState());
  // }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  
  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <>
      {this.state.alert}            
            <div style={{backgroundColor:'#27282d', borderRadius:'1rem', position:'relative', boxShadow:'0 6px 10px -4px rgba(0,0,0,0.15)', marginBottom:'1rem', marginLeft:'.5rem'}}>
              <Row style={{margin:'1rem'}}>
                  <div style={{marginRight:'1rem'}}>
                      <DayPicker
                        className="Range"
                        numberOfMonths={2}
                        fromMonth={from}
                        selectedDays={[from, { from, to }]}
                        onDayClick={this.handleDayClick}
                        modifiers={modifiers}
                        onDayClick={this.handleDayClick}

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
                      <div className='d-flex flex-row justify-content-around white' style={{width:'100%', fontSize:'.8rem'}}>
                        <div>
                          {!from && <span style={{color:'#6C757D'}}>Start date...</span>}
                          {from && <span>{from.toLocaleDateString()}</span>}
                        </div>
                        <div style={{marginLeft:'-7rem', marginRight:'-7rem'}}>
                          {!from && !to && <span style={{color:'#6C757D'}}>to</span>}
                          {!from && to && <span style={{color:'#6C757D'}}>to</span>}
                          {from && !to && <span style={{color:'#6C757D'}}>to</span>}
                          {from && to && <span >to</span>}
                        </div>
                        <div>
                          {!to && <span style={{color:'#6C757D'}}>End date...</span>}
                          {to && <span>{to.toLocaleDateString()}</span>}
                        </div>
                      </div>
                    </div>
                  
                <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', width:'15rem'}}>
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
                  <Input placeholder="Search cusip..." type="text" className='search-textinput' onChange={(e) => this.setState({ cusip: e.target.value })} />
                   </div>
                   <div style={{width:'14rem', paddingTop:'1rem'}}>
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
            <div>
            </div>
      </>
    );
  }
}

export default SearchInput;
