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
import SearchInput from "./SearchInput";

class PnLSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    
    return (
      <Row style={{paddingTop:'0rem', paddingBottom:'0rem', marginTop:'5rem'}}>

      <SearchInput/>

      <Col md="4" style={{}}>
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
      </Col>

      </Row>
    );
  }
}

export default PnLSearchBar;
