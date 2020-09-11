import React from "react";

// reactstrap components
import {
  Col,
  Row,
  Card
} from "reactstrap";

class PnLRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    
    return (
      <Row style={{paddingTop:'5rem', paddingBottom:'1rem', justifyContent:'space-around'}}>

      <Col md="4">
        <Card className='homecard'>
        <h4>Today</h4>
        <hr/>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>19</h3>
            <label>Transactions</label>
          </div>
          <div style={{flex:1}}>
            <h3 style={{marginBottom:'-.5rem'}}>$193<span>.94</span></h3>
            <label><span className='green'>(+3.37%)</span></label>
          </div>
        </div>
        </Card>
      </Col>

      <Col md="4">
        <Card className='homecard'>
        <h4>This Week</h4>
        <hr/>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>88</h3>
            <label>Transactions</label>
          </div>
          <div style={{flex:1}}>
            <h3 style={{marginBottom:'-.5rem'}}>$2,124<span>.22</span></h3>
            <label><span className='green'>(+13.37%)</span></label>
          </div>
        </div>
        </Card>
      </Col>

      <Col md="4">
        <Card className='homecard'>
        <h4>This Month</h4>
        <hr/>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>193</h3>
            <label>Transactions</label>
          </div>
          <div style={{flex:1}}>
            <h3 style={{marginBottom:'-.5rem'}}>$4,293<span>.11</span></h3>
            <label><span className='green'>(+23.37%)</span></label>
          </div>
        </div>
        </Card>
      </Col>

      {/* <Col md="3">
        <Card className='homecard'>
        <h4>All Time</h4>
        <hr/>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>332</h3>
            <label>Transactions</label>
          </div>
          <div style={{flex:1}}>
            <h3 style={{marginBottom:'-.5rem'}}>$19,213<span>.30</span></h3>
            <label><span className='green'>(+67.37%)</span></label>
          </div>
        </div>
        </Card>
      </Col> */}

      </Row>
    );
  }
}

export default PnLRow;
