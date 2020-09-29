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

      <Col md="8">
        <Card className='homecard'>
        <h4>Today's Metrics</h4>
        <hr/>
        <div className='homecard-data'>
          <div style={{flex:.45}}>
            <h3 style={{fontWeight:'600'}}>{this.props.numTransactions} </h3>
            <label>Transactions</label>
          </div>
          <div style={{flex:.5}}>
            <h3 style={{}}>${this.props.volumeToday} </h3>
            <label>Volume</label>
          </div>
          <div style={{flex:.5, marginRight:50}}>
            <h3 style={{fontWeight:'600', color:'#1cff36'}}>${this.props.pnlToday} </h3>
            <label>Realized PNL</label>

            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
              {/**<i className="fa fa-sort-up green" style={{marginRight:'.25rem'}}/><label><span className='green'>(+3.37%)</span></label> **/}
            </div>
          </div>
        </div>
        </Card>
      </Col>

      <Col md="4">
        <Card className='homecard'>
        <h4>Transactions</h4>
        <hr/>
        <div className='d-flex flex-row justify-content-around'>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600', color:'#1C8CFF'}}>{this.props.numOpen}</h3>
            <label>Open</label>
          </div>
        </div>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>{this.props.numClosed}</h3>
            <label>Closed</label>
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
