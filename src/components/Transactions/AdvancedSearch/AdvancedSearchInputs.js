import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Row,
  Col,
  Input,
} from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";

// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import Helmet from 'react-helmet'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import 'react-input-range/lib/css/index.css';

//date formatter
import { formatDate } from "../../../api/utils"

const animatedComponents = makeAnimated();

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted grey',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor:'red',
    borderColor:'transparent',
    border:0,
    color:'red'
  }),
  container: () => ({
    // none of react-select's styles are passed to <Control />
    color: '#FFFFFF99',
  }),
}

class AdvancedSearchInputs extends React.Component {
  static defaultProps = {
    numberOfMonths: 2,
  };
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      side: null,
      start_date: null,
      end_date: null,
      min_price: null,
      max_price: null,
      min_qty: null,
      max_qty: null,
      fund: null,
      client: null,
      cusip: null,
      book: null,
      brkr_name: null,
      security: null,
      counterparty: null,
      singleSelect: null,
      multipleSelect: null,
    };
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
      today: new Date (),
      todayFormatted: formatDate(new Date()),
    };
  }

  startSearch = () => {

    const parameters = {}

    if (this.state.start_date) {
      parameters["start_date"] = formatDate(new Date(this.state.start_date));
      parameters["end_date"] = formatDate(new Date(this.state.end_date));
    }
    if (this.state.client) parameters["client"] = this.state.client.label;
    if (this.state.cusip) parameters["cusip"] = this.state.cusip;
    if (this.state.security) parameters["security"] = this.state.security;
    if (this.state.counterparty) parameters["counterpart"] = this.state.counterparty;
    if (this.state.brkr_name) parameters["brkr_name"] = this.state.brkr_name;
    if (this.state.yield) parameters["yield"] = this.state.yield;
    if (this.state.min_qty) {
      parameters["min_qty"] = this.state.min_qty;
      parameters["max_qty"] = this.state.max_qty;
    }

    if (this.state.min_price) {
      parameters["min_price"] = this.state.min_price;
      parameters["max_price"] = this.state.max_price;
    }

    if (this.state.side && this.state.side !== "both") {
      if (this.state.side === "buy") parameters["side"] = "B";
      if (this.state.side === "sell") parameters["side"] = "S";
    }
    console.log(parameters)
    this.props.executeSearch(parameters)
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    this.setState({ start_date: range.from, end_date: range.to });
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



  hideAlert = () => {
    this.setState({
      alert: null,
    });
  };

  setBuy = () => {
    this.setState({ side: 'buy' })
  }
  setSell = () => {
    this.setState({ side: 'sell' })
  }
  setBoth = () => {
    this.setState({ side: 'both' })
  }
  

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div>
        {this.state.alert}
        <div className='d-flex flex-row' style={{margin:0}}>
          <div style={{ flex: 4, backgroundColor: '#27282d', borderRadius: '1rem', boxShadow: '0 6px 10px -4px rgba(0,0,0,0.15)',padding: '2rem', paddingTop: '.5rem', marginLeft: '0rem', flexWrap: 'wrap-reverse', paddingRight: '.5rem' }} className='d-flex flex-row'>
            <div className='d-flex flex-column align-items-center justify-content-center' style={{ flex: .5, minWidth: '32rem', maxWidth: '35rem' }}>
              <Row>
                <Col md="4">
                  <label className="labeltext">Side</label>
                  <div className='d-flex flex-row' style={{ marginTop: '.1rem' }}>
                    <div className={this.state.side === 'buy' ? 'buy tributton-selected' : 'buy'} onClick={this.setBuy}>
                      Buy
                      </div>
                    <div className={this.state.side === 'both' ? 'both tributton-selected' : 'both'} onClick={this.setBoth}>
                      Both
                      </div>
                    <div className={this.state.side === 'sell' ? 'sell tributton-selected' : 'sell'} onClick={this.setSell}>
                      Sell
                      </div>

                  </div>
                </Col>
                <Col md="8" style={{paddingLeft:'2rem'}}>
                  <label className="labeltext">Cusip</label>
                  <Input placeholder="Search cusip..." type="text" className='search-textinput' onChange={(e) => this.setState({ cusip: e.target.value })} />
                </Col>
                <Col md="4">
                  <label className="labeltext">Price</label>
                  <div className='d-flex'>
                    <div className='rangeinput'>
                      <Input placeholder="0" type="number" className='search-numberinput' onChange={(e) => this.setState({ min_price: e.target.value })} />
                    </div>
                    <div className='d-flex align-items-center justify-content-center white'>
                      <i className="fa fa-caret-right" />
                    </div>
                    <div className='rangeinput'>
                      <Input placeholder="200" type="number" className='search-numberinput' onChange={(e) => this.setState({ max_price: e.target.value })} />
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <label className="labeltext">Qty (MM)</label>
                  <div className='d-flex'>
                    <div className='rangeinput'>
                      <Input placeholder="0" type="number" className='search-numberinput' onChange={(e) => this.setState({ min_qty: e.target.value })} />
                    </div>
                    <div className='d-flex align-items-center justify-content-center white'>
                      <i className="fa fa-caret-right" />
                    </div>
                    <div className='rangeinput'>
                      <Input placeholder="5" type="number" className='search-numberinput' onChange={(e) => this.setState({ max_qty: e.target.value })} />
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <label className="labeltext">Security</label>
                  <Input placeholder="Search security..." type="text" className='search-textinput' onChange={(e) => this.setState({ security: e.target.value })} />
                </Col>
                <Col lg='6'>
                  <label className="labeltext">Broker Name</label>
                  <Input placeholder="Search broker..." type="text" className='search-textinput' onChange={(e) => this.setState({ brkr_name: e.target.value })} />
                </Col>
                <Col lg='6'>
                  <label className="labeltext">Customer</label>
                  <Input placeholder="Search customer..." type="text" className='search-textinput' onChange={(e) => this.setState({ counterparty: e.target.value })} />
                </Col>
              </Row>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center' style={{ flex: .5 , marginTop:'1rem'}}>
              <DayPicker
                numberOfMonths={2}
                fromMonth={from}
                toMonth={new Date()}
                selectedDays={[from, { from, to }]}
                onDayClick={this.handleDayClick}
                modifiers={modifiers}
                onDayClick={this.handleDayClick}

              />
              <Helmet>
                <style>{`
                  .DayPicker {
                    width:35.75rem
                  }
                  .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                  background-color: #202125 !important;
                  color: #4a90e2;
                  }
                  .DayPicker-Day {
                  border-radius: 0rem !important;
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
          </div>
          <div className='ml-auto d-flex flex-column justify-content-center' style={{ flex: 1 }}>
            <div style={{ width: '14rem' }}>
              <div className='button-solid' onClick={() => this.startSearch()}>
                {this.state.collapse ? <span>Custom Export</span> : <span>
                                {!this.props.loading ? "Search" : <i
                                    className="fa fa-spinner fa-spin"
                                    style={{ marginRight: "5px" }}
                                />}</span>}
              </div>
              <div className='button-red' onClick={this.handleResetClick}>
                Clear
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default AdvancedSearchInputs;
