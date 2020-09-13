import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Input,
} from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";

// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import Helmet from 'react-helmet'
import DayPicker, { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
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
      side:null,
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
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
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
      <>
      {this.state.alert}
        <div className='d-flex flex-row'>
            <div style={{flex:4, backgroundColor:'#27282d', borderRadius:'1rem', boxShadow:'0 6px 10px -4px rgba(0,0,0,0.15)', marginTop:'.5rem', padding:'2rem', paddingTop:'.5rem', marginLeft:'1rem', flexWrap:'wrap-reverse', paddingRight:'.5rem'}} className='d-flex flex-row'>
              <div className='d-flex flex-column align-items-center justify-content-center' style={{flex:.5, minWidth:'32rem', maxWidth:'35rem'}}>
              <Row>
                  <Col md="4">
                    <label className="labeltext">Side</label>
                    <div className='d-flex flex-row' style={{marginTop:'.1rem'}}>
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
                  <Col md="8">
                    <label className="labeltext">Cusip</label>
                    <Input placeholder="Search cusip..." type="text" className='search-textinput'/>
                  </Col>
                  <Col md="4">
                    <label className="labeltext">Price (M)</label>
                    <div className='d-flex'>
                      <div className='rangeinput'>
                        <Input placeholder="0" type="number" className='search-numberinput'/> 
                      </div>
                      <div className='d-flex align-items-center justify-content-center white'>
                        <i className="fa fa-caret-right" />
                      </div>
                      <div className='rangeinput'>
                        <Input placeholder="200" type="number" className='search-numberinput'/> 
                      </div>
                    </div>
                    {/* <form className="form">
                    <InputRange
                      maxValue={20}
                      minValue={0}
                      formatLabel={value => `$${value}`}
                      value={this.state.value4}
                      onChange={value => this.setState({ value4: value })}
                      onChangeComplete={value => console.log(value)} />
                      </form> */}
                   </Col>
                   <Col md="4">
                    <label className="labeltext">Qty (M)</label>
                    <div className='d-flex'>
                      <div className='rangeinput'>
                        <Input placeholder="0" type="number" className='search-numberinput'/> 
                      </div>
                      <div className='d-flex align-items-center justify-content-center white'>
                        <i className="fa fa-caret-right" />
                      </div>
                      <div className='rangeinput'>
                        <Input placeholder="200" type="number" className='search-numberinput'/> 
                      </div>
                    </div>
                    {/* <form className="form">
                      <InputRange
                        maxValue={20}
                        minValue={0}
                        formatLabel={value => `${value}`}
                        value={this.state.value5}
                        onChange={value => this.setState({ value5: value })}
                        onChangeComplete={value => console.log(value)} />
                        </form> */}
                   </Col>
                   <Col md="4">
                    <label className="labeltext">Security</label>
                    <Input placeholder="Search name..." type="text" className='search-textinput'/>
                   </Col>
                   <Col lg='6'>
                    <label className="labeltext">Broker Name</label>
                    <Input placeholder="Search broker..." type="text" className='search-textinput'/>  
                  </Col>
                  <Col lg='6'>
                    <label className="labeltext">Counterparty</label>
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
                    <label className="labeltext">Client</label>
                    <Input placeholder="Search client..." type="text" className='search-textinput'/>    
                  </Col>
                  <Col lg='6'>
                    <label className="labeltext">Yield</label>
                    <Input placeholder="Search yeild..." type="number" className='search-textinput'/>  
                  </Col>          
                </Row>
            </div>
              <div className='d-flex flex-column align-items-center' style={{flex:.5}}>
              <div className='d-flex flex-row' style={{marginTop:'1rem'}}>
                  <div className='datefilter'>30 Days</div>
                  <div className='datefilter'>All Time</div>
                  <div className='datefilter'>This Month</div>
                  <div className='datefilter'>Last Month</div>
              </div>
              <DayPicker
                  numberOfMonths={2}
                  fromMonth={from}
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
            </div>
            </div>
            <div className=' d-flex flex-column justify-content-center'>
                  <div style={{width:'9rem'}}>
                    <div className='button-solid'>
                      {this.state.collapse ? <span>Custom Export</span> : <span>Search</span> }
                    </div>
                    <div className='button-red' onClick={this.handleResetClick}>
                      Clear
                    </div>
                  </div>
              </div>
          </div>
      </>
    );
  }
}

export default AdvancedSearchInputs;
