import React from "react";

// reactstrap components
import {
  Col,
  Row,
  Card
} from "reactstrap";

// react plugin used to create charts
import { Bar } from "react-chartjs-2";

// core components
import {
  chartExample10,
} from "variables/charts.js";

class PnLSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    
    return (
      <Row style={{paddingTop:'0rem', paddingBottom:'0rem', justifyContent:'space-around'}}>

      <Col md="7">
        <Card className='homecard'>
        <h4>Activity </h4>
        <hr/>
        <div className='homecard-data'>
        <Bar
                    data={chartExample10.data}
                    options={chartExample10.options}
                  />
        </div>
        </Card>
      </Col>

      <Col md="5">
      <Card className='homecard'>
        <h4>From [Date 1] to [Date 2]</h4>
        <hr/>
        <div className='d-flex flex-row justify-content-around'>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>16</h3>
            <label>Transactions</label>
          </div>
        </div>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>3</h3>
            <label>Instances</label>
          </div>
        </div>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>+200</h3>
            <label>Net P&L</label>
          </div>
        </div>
        </div>
        </Card>
        <Card className='homecard'>
        <h4>Open</h4>
        <hr/>
        </Card>
        <Card className='homecard'>
        <h4>Closed</h4>
        <hr/>
        <div className='positions'>
          <ul className='positions-list'>
            <div className='positions-head' style={{flex:1.2}}>
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
              Time
              </div>
            </div>
          </ul>
          <ul className='positions-header' style={{width:'100%', marginBottom:'-.5rem'}}>
            <li className='positions-listitem-pair grow-small'>
              <div className='pair'>
              <div className='positions-row' style={{flex:1.2}}>
                <div>
                T 1 3/8 08/15/50
                </div>
              </div>
              <div className='positions-row-sm'>
                <div>
                B
                </div>
              </div>
              <div className='positions-row-sm'>
                <div>
                99.66
                </div>
              </div>
              <div className='positions-row-sm'>
                <div>
                1000
                </div>
              </div>
              <div className='positions-row'>
                <div>
                ARQ ADVISORS LLC
                </div>
              </div>
              <div className='positions-row justify-content-end'>
                <div>
                4:22:52 PM
                </div>
              </div>
              </div>
              <div className='pair'>
              <div className='positions-row' style={{flex:1.2}}>
                <div>
                T 1 3/8 08/15/50
                </div>
              </div>
              <div className='positions-row-sm'>
                <div>
                B
                </div>
              </div>
              <div className='positions-row-sm'>
                <div>
                99.66
                </div>
              </div>
              <div className='positions-row-sm'>
                <div>
                1000
                </div>
              </div>
              <div className='positions-row'>
                <div>
                ARQ ADVISORS LLC
                </div>
              </div>
              <div className='positions-row justify-content-end'>
                <div>
                4:22:52 PM
                </div>
              </div>
              </div>
            </li>
          </ul>
        </div>
        </Card>
      </Col>

      </Row>
    );
  }
}

export default PnLSearchBar;
