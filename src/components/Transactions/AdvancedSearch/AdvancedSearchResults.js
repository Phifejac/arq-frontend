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
import { Line } from "react-chartjs-2";
import {
  chartExample1,
} from "variables/charts.js";

// core components
import ReactTable from "../Search/SearchResults/ReactTableFilters.js";
import EditTransaction from "../Search/SearchResults/EditTransaction";
import Transaction from "../Search/SearchResults/Transaction";
import TransactionSearch from "pages/transactions/TransactionSearch/TransactionSearch.js";

const dataTable = [
];

class AdvancedSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      // fund: null,
      // client: null,
      // book: null,
      // counterparty: null,
      // excounterparty: null,
      // singleSelect: null,
      // multipleSelect: null,
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          cusip: prop.cusip,
          tradedate: prop.trade_date,
          time: "4:22:52 PM",
          security: prop.security,
          side: prop.side,
          qty: prop.qty,
          price: prop.price,
          customer: prop.customer,
          broker: prop.brkr_name,
          status: prop.status,
          yield: prop.yield,
          actions: (
            // we've added some custom button actions
            <div className="actions-right grow">
              <Button
                onClick={() => { this.viewButton() }}
                style={{ color: 'grey' }}
                size="md"
                className="btn-icon btn-link edit"
                style={{ marginTop: '-.4rem', marginRight: '-.6rem' }}
              >
                <i className="fa fa-eye white" />
              </Button>{" "}
              <Button
                onClick={() => { this.editButton() }}
                style={{ color: 'grey' }}
                size="md"
                className="btn-icon btn-link edit"
                style={{ marginTop: '-.3rem', marginRight: '2rem' }}
              >
                <i className="fa fa-edit white" />
              </Button>{" "}
              <Input style={{ marginTop: '.5rem' }} type="checkbox" />

              {/* use this button to add a edit kind of action */}

              {/* use this button to remove the data row */}
              {/* <Button
                onClick={() => {
                  var data = this.state.data;
                  data.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i, 1);
                      console.log(data);
                      return true;
                    }
                    return false;
                  });
                  this.setState({ data: data });
                }}
                color="danger"
                size="sm"
                className="btn-icon btn-link remove"
              >
                <i className="fa fa-times" />
              </Button>{" "} */}
            </div>
          ),
        };
      }),
    };
  }

  componentWillReceiveProps = (newProps) => {
    if (newProps.transactions) {
      this.setState({
        data: newProps.transactions.map((prop, key) => {
          return {
            id: key,
            cusip: prop.cusip,
            tradedate: prop.trade_date,
            time: "4:22:52 PM",
            security: prop.security,
            side: prop.side,
            qty: prop.qty,
            price: prop.price,
            customer: prop.customer,
            broker: prop.brkr_name,
            status: prop.status,
            yield: prop.yield,
            actions: (
              // we've added some custom button actions
              <div className="actions-right grow">
                <Button
                  onClick={() => { this.viewButton() }}
                  style={{ color: 'grey' }}
                  size="md"
                  className="btn-icon btn-link edit"
                  style={{ marginTop: '-.4rem', marginRight: '-.6rem' }}
                >
                  <i className="fa fa-eye white" />
                </Button>{" "}
                <Button
                  onClick={() => { this.editButton() }}
                  style={{ color: 'grey' }}
                  size="md"
                  className="btn-icon btn-link edit"
                  style={{ marginTop: '-.3rem', marginRight: '2rem' }}
                >
                  <i className="fa fa-edit white" />
                </Button>{" "}
                <Input style={{ marginTop: '.5rem' }} type="checkbox" />

                {/* use this button to add a edit kind of action */}

                {/* use this button to remove the data row */}
                {/* <Button
                onClick={() => {
                  var data = this.state.data;
                  data.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i, 1);
                      console.log(data);
                      return true;
                    }
                    return false;
                  });
                  this.setState({ data: data });
                }}
                color="danger"
                size="sm"
                className="btn-icon btn-link remove"
              >
                <i className="fa fa-times" />
              </Button>{" "} */}
              </div>
            )
          }
        })
      })
    }
  }
  editButton = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          // warning
          style={{ display: "block", marginTop: "-100px", width: '60%', backgroundColor: '#27292D' }}
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
            <h5 style={{ color: 'white' }}>Edit Transaction</h5>
            <p style={{ fontSize: '.8rem', color: 'white' }}>Edit and confirm changes to save.</p>
            <hr />
            <EditTransaction />
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
          style={{ display: "block", marginTop: "-100px", backgroundColor: '#27292D' }}
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
          style={{ display: "block", marginTop: "-100px", backgroundColor: '#27292D' }}
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
          style={{ display: "block", marginTop: "-100px", width: '60%', backgroundColor: '#27292D' }}
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
          <div className='text-left' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span className='input-category' style={{ marginTop: '-1rem', color: 'white' }}>Security</span>
            <h5 style={{ color: 'white' }}>T 1 1/4 05/15/50</h5>
            <hr />
            <div style={{ width: '80%' }}>
              <Line
                data={chartExample1.data}
                options={chartExample1.options}
              />
              <br /><br />
            </div>
            <Transaction />
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
          style={{ display: "block", marginTop: "-100px", width: '90%' }}
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
            <EditTransaction />
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
        <div className="content" style={{ marginTop: '-.5rem' }}>
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
                // {
                //   Header: "Broker",
                //   accessor: "broker",
                // },
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
                {
                  Header: "Yield",
                  accessor: "yield",
                },
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

export default AdvancedSearchResults;
