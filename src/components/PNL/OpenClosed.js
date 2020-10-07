import React from "react";

// reactstrap components
import {
  Col,
  Row,
  Card,
} from "reactstrap";

import ReactBSAlert from "react-bootstrap-sweetalert";
import { Line } from "react-chartjs-2";
import {
  chartExample1,
} from "variables/charts.js";

import Transaction from '../Transactions/Search/SearchResults/Transaction'

class OpenClosed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
    };
  }

  componentDidMount() {
    console.log("this.props", this.props)
  }

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
  hideAlert = () => {
    this.setState({
      alert: null,
    });
  };

  render() {

    return (
      <Row style={{ paddingTop: '0rem', paddingBottom: '1rem', justifyContent: 'space-around' }}>
        {this.state.alert}
        <Col md="4">
          <Card className='card-openclosed' style={{ minHeight: '35.5rem' }}>
            <h4>Open Positions</h4>
            {/* <hr/> */}
            <div className='positions'>
              <ul className='positions-list card-shadow'>
                <div className='positions-head' style={{ flex: 1.1 }}>
                  <div>
                    Security
                  </div>
                </div>
                <div className='positions-head'>
                  <div>
                    CUSIP
                  </div>
                </div>
                <div className='positions-head-sm'>
                  <div>
                    Qty
                  </div>
                </div>
                <div className='positions-head justify-content-end' >
                  <div>
                    Avg. Entry Price
                  </div>
                </div>
                <div className='positions-head-sm'>
                  
                </div>
              </ul>
              <ul className='positions-header' style={{ width: '100%' }}>

                {this.props.openPositions.map((position, i) => {
                  console.log("running")
                  return (<li className='positions-listitem-pair grow-small'><div className='pair'>
                    <div className='positions-row' style={{ flex: 1.1 }}>
                      <div>
                        {position.security}
                      </div>
                    </div>
                    <div className='positions-row'>
                      <div>
                        {position.cusip}
                      </div>
                    </div>
                    <div className='positions-row-sm'>
                      <div >
                        {position.qty}
                      </div>
                    </div>
                    <div className='positions-row justify-content-end'>
                      <div>
                        {position.avg_entry_price}
                      </div>
                    </div>
                    <div className='positions-row-sm justify-content-end'>
                      <div onClick={() => { this.viewButton() }}>
                        <i className="fa fa-eye white" />
                      </div>
                    </div>
                  </div>
                  </li>)
                })}
              </ul>
            </div>
          </Card>
        </Col>

        <Col md="8">
          <Card className='card-openclosed' style={{ minHeight: '35rem' }}>
            <h4>Closed Positions</h4>
            {/* <hr/> */}
            <div className='positions'>
              <ul className='positions-list card-shadow'>
                <div className='positions-head' style={{ flex: 1.2 }}>
                  <div>
                    Security ID
                  </div>
                </div>
                <div className='positions-head'>
                  <div>
                    CUSIP
                  </div>
                </div>
                <div className='positions-head-sm'>
                  <div>
                    Side
                  </div>
                </div>
                <div className='positions-head-sm'>
                  <div>
                    P (M)
                  </div>
                </div>
                <div className='positions-head-sm'>
                  <div>
                    Q (M)
                  </div>
                </div>
                <div className='positions-head'>
                  <div>
                    Counterparty
                  </div>
                </div>
                <div className='positions-head justify-content-end'>
                  <div>
                    Broker
                  </div>
                </div>
                <div className='positions-head justify-content-end'>
                  Realized P&L
                </div>
              </ul>
              <ul className='positions-header' style={{ width: '100%' }}>
                {this.props.closedInstances.map((instance, i) => {
                  console.log("open instance", instance)
                  return (
                    <li className='positions-listitem-pair grow-small'>
                    
                    {instance.transactions.map((transaction, i) => {
                      return (
                        <div className='pair'>
                        <div className='positions-row' style={{ flex: 1.2 }}>
                          <div>
                            {transaction.security}
                          </div>
                        </div>
                        <div className='positions-row'>
                          <div>
                            {transaction.cusip}
                          </div>
                        </div>
                        <div className='positions-row-sm'>
                          <div>
                            {transaction.side}
                          </div>
                        </div>
                        <div className='positions-row-sm'>
                          <div>
                            {transaction.price}
                          </div>
                        </div>
                        <div className='positions-row-sm'>
                          <div>
                            {transaction.qty}
                          </div>
                        </div>
                        <div className='positions-row'>
                          <div>
                            {transaction.customer}
                          </div>
                        </div>
                        <div className='positions-row justify-content-end'>
                          <div>
                            {transaction.brkr_name}
                          </div>
                        </div>
                        <div className='positions-row justify-content-end'>
                          {/* {(instance2.price*instance2.qty)-(instance1.price*instance1.qty)} */}
                          {i === 0 ? "$"+instance.realized_pnl.toLocaleString(undefined, {maximumFractionDigits: 2}) : ''}
                        </div>
                      </div>
                      )
                    })}
                     
                    </li>
                  )
                })}

              </ul>

            </div>
          </Card>
        </Col>

      </Row>
    );
  }
}

export default OpenClosed;
