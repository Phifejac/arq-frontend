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
      <Row style={{paddingTop:'0rem', paddingBottom:'1rem', justifyContent:'space-around'}}>

      <Col md="6">
        <Card className='card-openclosed' style={{minHeight:'35rem', maxHeight:'40rem'}}>
        <h4>Open</h4>
        {/* <hr/> */}
        <div className='positions'>
          <ul className='positions-list card-shadow'>
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
            <div className='positions-head-sm'>
            </div>
          </ul>
          <ul className='positions-header' style={{width:'100%'}}>
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
              <div className='positions-row-sm justify-content-end'>
                <div>
                <i className="fa fa-eye white" />
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
              <div className='positions-row-sm justify-content-end'>
                <div>
                <i className="fa fa-eye white" />
                </div>
              </div>
              </div>
            </li>
            <li className='positions-listitem grow-small'>
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
              <div className='positions-row-sm justify-content-end'>
                <div>
                <i className="fa fa-eye white" />
                </div>
              </div>
            </li>
            <li className='positions-listitem grow-small'>
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
              <div className='positions-row-sm justify-content-end'>
                <div>
                <i className="fa fa-eye white" />
                </div>
              </div>
            </li>
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
              <div className='positions-row-sm justify-content-end'>
                <div>
                <i className="fa fa-eye white" />
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
              <div className='positions-row-sm justify-content-end'>
                <div>
                <i className="fa fa-eye white" />
                </div>
              </div>
              </div>
            </li>
          </ul>

        </div>
        </Card>
      </Col>

      <Col md="6">
        <Card className='card-openclosed' style={{minHeight:'35rem', maxHeight:'40rem'}}>
        <h4>Closed</h4>
        {/* <hr/> */}
        <div className='positions'>
          <ul className='positions-list card-shadow'>
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
            <div className='positions-head-sm'>
            </div>
          </ul>
          <ul className='positions-listitem grow-small'>
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
            <div className='positions-row-sm justify-content-end'>
                <div>
                <i className="fa fa-eye white" />
                </div>
              </div>
          </ul>

        </div>
        </Card>
      </Col>

      </Row>
    );
  }
}

export default OpenClosed;