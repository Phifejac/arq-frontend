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
            <h3 style={{fontWeight:'600'}}>{this.props.numTransactionsToday}</h3>
            <label>Transactions</label>
          </div>
          <div style={{flex:1}}>
            <h3 style={{marginBottom:'-.5rem'}}>${this.props.pnlToday}{/**<span>.22</span>**/}</h3>
            <label>Today</label>
            {/* <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
              <i className="fa fa-sort-up green" style={{marginRight:'.25rem'}}/><label><span className='green'>(+3.37%)</span></label>
            </div> */}
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
            <h3 style={{fontWeight:'600'}}>{this.props.numTransactionsWeek}</h3>
            <label>Transactions</label>
          </div>
          <div style={{flex:1}}>
            <h3 style={{marginBottom:'-.5rem'}}>${this.props.pnlWeek ? this.props.pnlWeek.toLocaleString() : ''}{/**<span>.22</span>**/}</h3>
            <label>This Week</label>
            {/* <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
              <i className="fa fa-sort-up green" style={{marginRight:'.25rem'}}/><label><span className='green'>(+13.37%)</span></label>
            </div> */}
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
            <h3 style={{fontWeight:'600'}}>{this.props.numTransactionsMonth}</h3>
            <label>Transactions</label>
          </div>
          <div style={{flex:1}}>
            <h3 style={{marginBottom:'-.5rem'}}>${this.props.pnlMonth}{/**<span>.22</span>**/}</h3>
            <label>This Month</label>
            {/* <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
              <i className="fa fa-sort-up green" style={{marginRight:'.25rem'}}/><label><span className='green'>(+23.37%)</span></label>
            </div> */}
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
