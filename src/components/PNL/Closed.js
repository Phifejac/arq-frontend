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

class Closed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
    };
  }


  render() {

    return (
      <Row style={{ paddingTop: '0rem', paddingBottom: '1rem', justifyContent: 'space-around' }}>

        <Col md="12">
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
                  const instance1 = instance.transactions[0]
                  const instance2 = instance.transactions[1]
                  return (
                    <li className='positions-listitem-pair grow-small'>
                      <div className='pair'>
                        <div className='positions-row' style={{ flex: 1.2 }}>
                          <div>
                            {instance1.security}
                          </div>
                        </div>
                        <div className='positions-row'>
                          <div>
                            CUSIP
                          </div>
                        </div>
                        <div className='positions-row-sm'>
                          <div>
                            {instance1.side}
                          </div>
                        </div>
                        <div className='positions-row-sm'>
                          <div>
                            {instance1.price}
                          </div>
                        </div>
                        <div className='positions-row-sm'>
                          <div>
                            {instance1.qty}
                          </div>
                        </div>
                        <div className='positions-row'>
                          <div>
                            {instance1.customer}
                          </div>
                        </div>
                        <div className='positions-row justify-content-end'>
                          <div>
                            {instance1.brkr_name}
                          </div>
                        </div>
                        <div className='positions-row justify-content-end'>
                          {/* {(instance2.price*instance2.qty)-(instance1.price*instance1.qty)} */}
                          200
                        </div>
                      </div>
                      <div className='pair'>
                        <div className='positions-row' style={{ flex: 1.2 }}>
                          <div>
                            {instance2.security}
                          </div>
                        </div>
                        <div className='positions-row'>
                          <div>
                            CUSIP
                          </div>
                        </div>
                        <div className='positions-row-sm'>
                          <div>
                            {instance2.side}
                          </div>
                        </div>
                        <div className='positions-row-sm'>
                          <div>
                            {instance2.price}
                          </div>
                        </div>
                        <div className='positions-row-sm'>
                          <div>
                            {instance2.qty}
                          </div>
                        </div>
                        <div className='positions-row'>
                          <div>
                            {instance2.customer}
                          </div>
                        </div>
                        <div className='positions-row justify-content-end'>
                          <div>
                            {instance2.brkr_name}
                          </div>
                        </div>
                        <div className='positions-row justify-content-end'>
                          
                        </div>
                      </div>
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

export default Closed;
