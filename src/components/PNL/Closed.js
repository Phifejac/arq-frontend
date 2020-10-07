import React from "react";

// reactstrap components
import {
  Col,
  Row,
  Card,
} from "reactstrap";


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
                          {i === 0 ? "$" + instance.realized_pnl.toLocaleString(undefined, {maximumFractionDigits: 2}) : ""}
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

export default Closed;
