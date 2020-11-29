import React from "react";

// reactstrap components
import {
  Col,
  Row,
  Card,
  Input
} from "reactstrap";

// react plugin used to create charts
import { Bar } from "react-chartjs-2";

// core components
import {
  chartExample10,
} from "variables/charts.js";

// import TransactionData from './TransactionData'
import Helmet from 'react-helmet'
import DayPicker, { DateUtils } from 'react-day-picker';
import Select from "react-select";

//date formatter
import { formatDate} from "../../api/utils"

class PnLSearchBar extends React.Component {
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
      parameters["type"] = "day"
    }
    if (this.state.client ) parameters["client"] = this.state.client.label;
    if (this.state.cusip) parameters["cusip"] = this.state.cusip;

    this.props.executeSearch(parameters)
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    this.setState({ start_date: range.from, end_date: range.to });
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <Row style={{paddingTop:'0rem', paddingBottom:'0rem', marginTop:'5rem'}}>

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
                    {/* <div style={{width:'80%'}} className='align-self-center'>
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
                   </div> */}
                   <div style={{width:'14rem', paddingTop:'1rem'}}>
                      <div className='button-solid grow' onClick={this.startSearch}>
                        <span>{!this.props.loading ? "Search" : <i
                                    className="fa fa-spinner fa-spin"
                                    style={{ marginRight: "5px" }}
                                />}</span>
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

      
      <Col md="5" style={{}}>
      <Card className='homecard'>
        <Bar
            data={chartExample10}
            options={chartExample10.options}
            
          />
      </Card>
      <Card className='homecard'>
        <h4>From 
            {!from && <span style={{color:'#6C757D', paddingLeft:'.5rem', paddingRight:'.5rem'}}>  Select...  </span>}
            {from && <span style={{color:'#1C8CFF', paddingLeft:'.5rem', paddingRight:'.5rem'}}>{from.toLocaleDateString()}</span>} 
            to                           
            {!to && <span style={{color:'#6C757D', paddingLeft:'.5rem', paddingRight:'.5rem'}}>  Select... </span>}
            {to && <span style={{color:'#1C8CFF', paddingLeft:'.5rem', paddingRight:'.5rem'}}>{to.toLocaleDateString()}</span>}</h4>
        <hr/>
        <div className='d-flex flex-row justify-content-around'>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>{this.props.searchStatistics.total_transactions}</h3>
            <label>Transactions</label>
          </div>
        </div>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>{this.props.searchStatistics.total_volume ? "$" + this.props.searchStatistics.total_volume.toLocaleString(undefined, {maximumFractionDigits: 2}) : ""} </h3>
            <label>Volume</label>
          </div>
        </div>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>{this.props.searchStatistics.total_pnl ? "$" +this.props.searchStatistics.total_pnl.toLocaleString(undefined, {maximumFractionDigits: 2}) : ""}</h3>
            <label>P&L</label>
          </div>
        </div>
        </div>
        </Card>
      </Col>

      </Row>
    );
  }
}

export default PnLSearchBar;
