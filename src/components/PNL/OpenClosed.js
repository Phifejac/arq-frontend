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

        <Col md="6">
          <Card className='card-openclosed' style={{ minHeight: '35rem', maxHeight: '40rem' }}>
            <h4>Open Positions</h4>
            {/* <hr/> */}
            <div className='positions'>
              <ul className='positions-list card-shadow'>
                <div className='positions-head' style={{ flex: 1.1 }}>
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
                    </div>
                  </div>
                  </li>)
                })}

              </ul>

            </div>
          </Card>
        </Col>

        <Col md="6">
          <Card className='card-openclosed' style={{ minHeight: '35rem', maxHeight: '40rem' }}>
            <h4>Closed Positions</h4>
            {/* <hr/> */}
            <div className='positions'>
              <ul className='positions-list card-shadow'>
                <div className='positions-head' style={{ flex: 1.2 }}>
                  <div>
                    Security ID
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
                <div className='positions-head-sm'>
                </div>
              </ul>
              <ul className='positions-header' style={{width:'100%'}}>
                {this.props.closedInstances.map((instance, i) => {
                  console.log("instance", instance)
                  return (
                    <li className='positions-listitem-pair grow-small'>
                    <div className='pair'>
                    <div className='positions-row' style={{flex:1.2}}>
                      <div>
                      {instance.security}
                      </div>
                    </div>
                    <div className='positions-row-sm'>
                      <div>
                      {instance.side}
                      </div>
                    </div>
                    <div className='positions-row-sm'>
                      <div>
                      {instance.price}
                      </div>
                    </div>
                    <div className='positions-row-sm'>
                      <div>
                      {instance.qty}
                      </div>
                    </div>
                    <div className='positions-row'>
                      <div>
                      {instance.customer}
                      </div>
                    </div>
                    <div className='positions-row justify-content-end'>
                      <div>
                      {instance.brkr_name}
                      </div>
                    </div>
                    <div className='positions-row-sm justify-content-end'>
                      <div>
                      <i className="fa fa-eye white" />
                      </div>
                    </div>
                    </div>
                    <div className='pair'>
                    <div className='positions-row' style={{flex:1.2}}>
                      <div>
                      {instance.security}
                      </div>
                    </div>
                    <div className='positions-row-sm'>
                      <div>
                      {instance.side}
                      </div>
                    </div>
                    <div className='positions-row-sm'>
                      <div>
                      {instance.price}
                      </div>
                    </div>
                    <div className='positions-row-sm'>
                      <div>
                      {instance.qty}
                      </div>
                    </div>
                    <div className='positions-row'>
                      <div>
                      {instance.customer}
                      </div>
                    </div>
                    <div className='positions-row justify-content-end'>
                      <div>
                      {instance.brkr_name}
                      </div>
                    </div>
                    <div className='positions-row-sm justify-content-end'>
                      <div>
                      <i className="fa fa-eye white" />
                      </div>
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
