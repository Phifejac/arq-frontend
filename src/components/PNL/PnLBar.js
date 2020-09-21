import React from "react";

// reactstrap components
import {
  Col,
  Row,
  Card
} from "reactstrap";

class PnLBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    
    return (
      <Row style={{paddingTop:'5rem', paddingBottom:'0rem', justifyContent:'space-around'}}>

      <Col md="4">
        <Card className='homecard'>
        <h4>Activity</h4>
        <hr/>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>19</h3>
            <label>Transactions</label>
          </div>
          <div style={{flex:1}}>
            <h3 style={{marginBottom:'-.5rem'}}>$193<span>.94</span></h3>
            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
              <i className="fa fa-sort-up green" style={{marginRight:'.25rem'}}/><label><span className='green'>(+3.37%)</span></label>
            </div>
          </div>
        </div>
        </Card>
      </Col>

      <Col md="8">
        <Card className='homecard'>
        <h4>Positions</h4>
        <hr/>
        <div className='d-flex flex-row justify-content-around'>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>4</h3>
            <label>Open</label>
          </div>
        </div>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>4</h3>
            <label>Closed</label>
          </div>
        </div>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>0</h3>
            <label>Net</label>
          </div>
        </div>
        </div>
        </Card>
      </Col>

      </Row>
    );
  }
}

export default PnLBar;