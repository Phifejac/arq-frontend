import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import Select from "react-select";

import { DragDropContext } from 'react-beautiful-dnd';

import ReactBSAlert from "react-bootstrap-sweetalert";
import { Line} from "react-chartjs-2";
import {
  chartExample1,
} from "variables/charts.js";

// core components
import ReactTable from "./TodaysTable";
import EditTransaction from "../Transactions/Search/SearchResults/EditTransaction";
import Transaction from "../Transactions/Search/SearchResults/Transaction";

const dataTable = [
  ["912810SN9", "7/13/20", "4:50:27 PM", "T 1 1/4 05/15/50", "S", "2000", "98.578125", "HEXAGON AM LLC", "ARQ ADVISORS LLC", "Accepted", "1.3077"],
  ["912810SN9", "7/13/20", "4:48:43 PM", "T 1 1/4 05/15/50", "B", "2000", "98.5627", "HEXAGON AM LLC", "BGC PARTNERS", "Accepted", "1.3083"],
  ["912810SN9", "7/13/20", "4:33:06 PM", "T 1 1/4 05/15/50", "S", "1000", "98.515625", "BGC PARTNERS", "ARQ ADVISORS LLC", "Accepted", "1.3102"],
  ["912810SN9", "7/13/20", "4:22:52 PM", "T 1 1/4 05/15/50", "B", "1000", "98.515625", "HEXAGON AM LLC", "ARQ ADVISORS LLC", "Accepted", "1.3186"],
  ["912810SN9", "7/13/20", "4:19:47 PM", "T 1 1/4 05/15/50", "B", "2000", "98.5627", "ARQ ADVISORS LLC", "BGC PARTNERS", "Accepted", "1.3083"],
  ["912810SN9", "7/13/20", "1:14:09 PM", "T 1 1/4 05/15/50", "S", "2000", "98.578125", "HEXAGON AM LLC", "ARQ ADVISORS LLC", "Accepted", "1.3077"],
  ["912810SN9", "7/13/20", "1:03:54 PM", "T 1 1/4 05/15/50", "B", "2000", "98.5627", "HEXAGON AM LLC", "BGC PARTNERS", "Accepted", "1.3083"],
  ["912810SN9", "7/13/20", "12:20:44 PM", "T 1 1/4 05/15/50", "S", "1000", "98.515625", "BGC PARTNERS", "ARQ ADVISORS LLC", "Accepted", "1.3102"],
  ["912810SN9", "7/13/20", "12:12:25 PM", "T 1 1/4 05/15/50", "B", "1000", "98.515625", "HEXAGON AM LLC", "ARQ ADVISORS LLC", "Accepted", "1.3186"],
  ["912810SN9", "7/13/20", "10:44:43 AM", "T 1 1/4 05/15/50", "B", "2000", "98.5627", "ARQ ADVISORS LLC", "BGC PARTNERS", "Accepted", "1.3083"],
  ["912810SN9", "7/12/20", "4:50:27 PM", "T 1 1/4 05/15/50", "S", "2000", "98.578125", "HEXAGON AM LLC", "ARQ ADVISORS LLC", "Accepted", "1.3077"],
  ["912810SN9", "7/12/20", "4:48:43 PM", "T 1 1/4 05/15/50", "B", "2000", "98.5627", "HEXAGON AM LLC", "BGC PARTNERS", "Accepted", "1.3083"],
  ["912810SN9", "7/12/20", "4:33:06 PM", "T 1 1/4 05/15/50", "S", "1000", "98.515625", "BGC PARTNERS", "ARQ ADVISORS LLC", "Accepted", "1.3102"],
  ["912810SN9", "7/12/20", "4:22:52 PM", "T 1 1/4 05/15/50", "B", "1000", "98.515625", "HEXAGON AM LLC", "ARQ ADVISORS LLC", "Accepted", "1.3186"],
  ["912810SN9", "7/12/20", "4:19:47 PM", "T 1 1/4 05/15/50", "B", "2000", "98.5627", "ARQ ADVISORS LLC", "BGC PARTNERS", "Accepted", "1.3083"],
  ["912810SN9", "7/12/20", "1:14:09 PM", "T 1 1/4 05/15/50", "S", "2000", "98.578125", "HEXAGON AM LLC", "ARQ ADVISORS LLC", "Accepted", "1.3077"],
  ["912810SN9", "7/12/20", "1:03:54 PM", "T 1 1/4 05/15/50", "B", "2000", "98.5627", "HEXAGON AM LLC", "BGC PARTNERS", "Accepted", "1.3083"],
  ["912810SN9", "7/12/20", "12:20:44 PM", "T 1 1/4 05/15/50", "S", "1000", "98.515625", "BGC PARTNERS", "ARQ ADVISORS LLC", "Accepted", "1.3102"],
  ["912810SN9", "7/12/20", "12:12:25 PM", "T 1 1/4 05/15/50", "B", "1000", "98.515625", "HEXAGON AM LLC", "ARQ ADVISORS LLC", "Accepted", "1.3186"],
  ["912810SN9", "7/12/20", "10:44:43 AM", "T 1 1/4 05/15/50", "B", "2000", "98.5627", "ARQ ADVISORS LLC", "BGC PARTNERS", "Accepted", "1.3083"],
];

class TodaysTransactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          cusip: prop[0],
          tradedate: prop[1],
          time:prop[2] ,
          security:prop[3] ,
          side:prop[4] ,
          qty:prop[5],
          price:prop[6],
          customer:prop[7],
          broker:prop[8],
          status:prop[9],
          // yield:prop[10],
          actions: (
            // we've added some custom button actions
            <div className="actions-right grow">
              <Button
                onClick={() => {this.viewButton()}}
                size="md"
                className="btn-icon btn-link edit"
                style={{marginTop:'-.4rem', marginRight:'-.6rem', color:'white'}}
              >
                <i className="fa fa-eye" />
              </Button>{" "}
              <Button
                onClick={() => {this.editButton()}}
                style={{color:'grey'}}
                size="md"
                className="btn-icon btn-link edit white"
                style={{marginTop:'-.3rem',color:'white'}}
              >
                <i className="fa fa-edit white" />
              </Button>{" "}
            </div>
          ),
        };
      }),
    };
  }
  editButton = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          // warning
          style={{ display: "block", marginTop: "-100px", width:'60%', backgroundColor:'#27292D'}}
          className='text-left'
          // title="Edit Transaction"
          onConfirm={() => this.confirmEdit()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="primary"
          cancelBtnBsStyle="danger"
          confirmBtnText="Save Changes"
          cancelBtnText="Cancel"
          showCancel
          btnSize=""
        >
          <div className='text-left'>
            <h5 style={{color:'white'}}>Edit Transaction</h5>
              <p style={{fontSize:'.8rem', color:'white'}}>Edit and confirm changes to save.</p>
              <hr/>
            <EditTransaction/>
          </div>
        </ReactBSAlert>
      ),
    });
  };
  confirmEdit = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          warning
          style={{ display: "block", marginTop: "-100px" , backgroundColor:'#27292D'}}
          title="Confirm Edit"
          onConfirm={() => this.successEdit()}
          onCancel={() => this.editButton()}
          confirmBtnBsStyle="primary"
          cancelBtnBsStyle="danger"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          btnSize=""
          showCancel
        >
          Are you sure you want to make these changes?
        </ReactBSAlert>
      ),
    });
  };
  successEdit = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "-100px" , backgroundColor:'#27292D'}}
          title="Changes Saved!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="primary"
          btnSize=""
        >
          Changes to the transaction have been saved.
        </ReactBSAlert>
      ),
    });
  };
  viewButton = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          // warning
          style={{ display: "block", marginTop: "-100px", width:'60%', backgroundColor:'#27292D'}}
          className='text-left'
          // title="Edit Transaction"
          onConfirm={() => this.confirmEdit()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="primary"
          cancelBtnBsStyle="danger"
          confirmBtnText="Save Changes"
          cancelBtnText="Close"
          showCancel
          showConfirm={false}
          btnSize=""
        >
          <div className='text-left' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <span className='input-category' style={{marginTop:'-1rem', color:'white'}}>Security</span>
            <h5 style={{color:'white'}}>T 1 1/4 05/15/50</h5>
              <hr/>
              <div style={{width:'80%'}}>
              <Line
                    data={chartExample1.data}
                    options={chartExample1.options}
                  />
                <br/><br/>
              </div>
            <Transaction/>
          </div>
        </ReactBSAlert>
      ),
    });
  };
  warningWithConfirmAndCancelMessage = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          // warning
          style={{ display: "block", marginTop: "-100px", width:'90%'}}
          className='text-left'
          // title="Edit Transaction"
          onConfirm={() => this.successDelete()}
          onCancel={() => this.cancelDetele()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
          confirmBtnText="Save Changes"
          cancelBtnText="Cancel"
          showCancel
          btnSize=""
        >
          <div className='text-left'>
            <EditTransaction/>
          </div>
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
          title="Changes Saved!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          btnSize=""
        >
          Transaction data has been updated.
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
          No changes have been saved.
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
    return (
      <>
      {this.state.alert}
        <div className="content" style={{marginTop:'-.5rem'}}>
            <Col>
                  <ReactTable
                    data={this.state.data}
                    
                    columns={[
                      // {
                      //   Header: "ID",
                      //   accessor: "transactionId",
                      // },
                      {
                        Header: "Date",
                        accessor: "tradedate",
                      },
                      {
                        Header: "Time",
                        accessor: "time",
                        sortable: false,
                        filterable: false,
                      },
                      {
                        Header: "Side",
                        accessor: "side",
                      },
                      {
                        Header: "Security",
                        accessor: "security",
                      },
                      {
                        Header: "Price",
                        accessor: "price",
                      },
                      {
                        Header: "Qty (M)",
                        accessor: "qty",
                      },
                      {
                        Header: "Broker",
                        accessor: "broker",
                      },
                      {
                        Header: "Customer",
                        accessor: "customer",
                      },
                      // {
                      //   Header: "Cusip",
                      //   accessor: "cusip",
                      // },
                      // {
                      //   Header: "Status",
                      //   accessor: "status",
                      // },
                      // {
                      //   Header: "Yield",
                      //   accessor: "yield",
                      // },
                      {
                        Header: "",
                        accessor: "actions",
                        sortable: false,
                        filterable: false,
                      },
                    ]}
                    
                    className="-striped -highlight primary-pagination"
                  />
            </Col>
        </div>
      </>
    );
  }
}

export default TodaysTransactions;
