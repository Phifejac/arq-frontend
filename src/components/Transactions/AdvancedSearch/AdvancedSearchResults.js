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
import ReactLoading from 'react-loading'

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
import {updateTransaction, deleteTransaction} from "../../../api/http"
import { string } from "prop-types";

const dataTable = [
];

class AdvancedSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.state = {
      alert: null,
      id: null,
      security: null,
      cusip: null,
      side: null,
      broker: null,
      customer: null,
      trade_date: null,
      time: null,
      price: null,
      qty: null,
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          cusip: prop.cusip,
          tradedate: prop.trade_date,
          time: prop.time,
          security: prop.security,
          side: prop.side,
          qty: prop.qty,
          price: prop.price,
          customer: prop.customer,
          broker: prop.brkr_name,
          status: prop.status,
          actions: (
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
            time: prop.time,
            security: prop.security,
            side: prop.side,
            qty: prop.qty,
            price: prop.price,
            customer: prop.customer,
            broker: prop.brkr_name,
            status: prop.status,
            actions: (
              <div className="actions-right grow">
                <Button
                  onClick={() => { this.viewButton(prop) }}
                  style={{ color: 'grey' }}
                  size="md"
                  className="btn-icon btn-link edit"
                  style={{ marginTop: '-.4rem', marginRight: '-.6rem' }}
                >
                  <i className="fa fa-eye white" />
                </Button>{" "}
                <Button
                  onClick={() => { this.editButton(prop) }}
                  style={{ color: 'grey' }}
                  size="md"
                  className="btn-icon btn-link edit"
                  style={{ marginTop: '-.3rem', marginRight: '-0.6rem' }}
                >
                  <i className="fa fa-edit white" />
                </Button>
                <Button
                  onClick={() => { this.confirmDelete(prop) }}
                  style={{ color: 'grey' }}
                  size="md"
                  className="btn-icon btn-link edit"
                  style={{ marginTop: '-.3rem'}}
                >
                  <i className="fa fa-trash white" />
                </Button>
              </div>
            )
          }
        })
      })
    }
  }
  handleChange(e) {
    var change = {};
    change[e.target.name] = e.target.value
    this.setState(change)
  }
  handleDateChange(e) {
    this.setState({trade_date: this.dateToString(e._d)})
  }
  dateToString(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return (yyyy + "-" + mm + "-" + dd)
  }
  addButton() {
    const empty = {
      "security": "",
      "cusip": "",
      "side": "",
      "broker": "",
      "customer": "",
      "trade_date": new Date(),
      "time": "",
      "price": "",
      "qty": ""
    }
    this.setState({
      trade_date: this.dateToString(new Date()),
      alert: (
        <ReactBSAlert
          style={{ display: "block", marginTop: "-100px", width: '60%', backgroundColor: '#27292D' }}
          className='text-left'
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
            <h5 style={{ color: 'white' }}>Add Transaction</h5>
            <p style={{ fontSize: '.8rem', color: 'white' }}>Fill in all fields and confirm changes to save.</p>
            <hr />
            <EditTransaction 
              transaction={empty}
              handleChange={this.handleChange}
              handleDateChange={this.handleDateChange}
            />
          </div>
        </ReactBSAlert>
      ),
    })
  }

  editButton = (transaction) => {
    this.setState({
      id: transaction.id,
      security: transaction.security,
      cusip: transaction.cusip,
      side: transaction.side,
      broker: transaction.brkr_name,
      customer: transaction.customer,
      trade_date: transaction.trade_date,
      time: transaction.time,
      price: transaction.price,
      qty: transaction.qty,
      alert: (
        <ReactBSAlert
          style={{ display: "block", marginTop: "-100px", width: '60%', backgroundColor: '#27292D' }}
          className='text-left'
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
            <EditTransaction 
              transaction={transaction}
              handleChange={this.handleChange}
              handleDateChange={this.handleDateChange}
            />
          </div>
        </ReactBSAlert>
      ),
    });
  };
  async changeTransaction() {
    const body = {
      "id": this.state.id,
      "security": this.state.security,
      "cusip": this.state.cusip,
      "side": this.state.side,
      "broker": this.state.broker,
      "customer": this.state.customer,
      "trade_date": this.state.trade_date,
      "time": this.state.time,
      "price": this.state.price,
      "qty": this.state.qty
    }
    this.loading()
    const update = await updateTransaction(body)
    this.successEdit()
  }
  loading() {
    this.setState({
      alert: (
        <ReactBSAlert
          style={{ display: "block", marginTop: "-100px", backgroundColor: '#27292D' }}
          title="Loading... "
          btnSize=""
          showCancel={false}
          showConfirm={false}
        >
        Please do not leave the page!
        <div style={{ display: "flex", justifyContent: "center"}}>
          <ReactLoading
            type={"bars"}
            color={"white"}
          />
        </div>
        </ReactBSAlert>
      ),
    })
  }
  confirmEdit = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          warning
          style={{ display: "block", marginTop: "-100px", backgroundColor: '#27292D' }}
          title="Confirm Edit"
          onConfirm={() => this.changeTransaction()}
          onCancel={() => this.hideAlert()}
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
          style={{ display: "block", marginTop: "-100px", backgroundColor: '#27292D' }}
          title="Changes Saved!"
          onConfirm={() => {this.hideAlert(); window.location.reload()}}
          onCancel={() => {this.hideAlert(); window.location.reload()}}
          confirmBtnBsStyle="primary"
          btnSize=""
        >
          The database has been updated accordingly.
        </ReactBSAlert>
      ),
    });
  };
  viewButton = (transaction) => {
    this.setState({
      alert: (
        <ReactBSAlert
          // warning
          style={{ display: "block", marginTop: "-100px", width: '60%', backgroundColor: '#27292D' }}
          className='text-left'
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
            <Transaction transaction={transaction}/>
          </div>
        </ReactBSAlert>
      ),
    });
  };
  confirmDelete = (transaction) => {
    this.setState({
      id: transaction.id,
      trade_date: transaction.trade_date,
      alert: (
        <ReactBSAlert
          warning
          style={{ display: "block", marginTop: "-100px", backgroundColor: '#27292D' }}
          title="Confirm Deletion"
          onConfirm={() => this.deleteTransaction()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="primary"
          cancelBtnBsStyle="danger"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          btnSize=""
          showCancel
        >
          Are you sure you want to delete this transaction?
        </ReactBSAlert>
      ),
    });
  };
  deleteTransaction = async() => {
    const body = {
      "id": this.state.id,
      "trade_date": this.state.trade_date,
    }
    this.loading()
    const del = await deleteTransaction(body)
    this.successEdit()
  }


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
            <div style={{justifyContent: "right"}}>
              <Button onClick={() => this.addButton()}>Add Transaction</Button>
            </div>
            <ReactTable
              data={this.state.data}

              columns={[
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
                  sortable: false,
                },
                {
                  Header: "Security",
                  accessor: "security",
                  sortable: false,
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
