import React from "react";

// reactstrap components
import {
  Col,
  Row,
  Card
} from "reactstrap";

class OpenClosed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <Row style={{ paddingTop: '0rem', paddingBottom: '1rem', justifyContent: 'space-around' }}>

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
                      <div>
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
                        <div className='positions-row-sm justify-content-end'>
                          +200
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
                        <div className='positions-row-sm justify-content-end'>
                          
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

export default OpenClosed;
