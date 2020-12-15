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

class PnLOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  

  
  render() {

    const data = {
      labels: 
        this.props.labels
      ,
      datasets: [
        {
          label: "PNL",
          borderColor: "#1C8CFF",
          fill: true,
          backgroundColor: "#1C8CFF",
          hoverBorderColor: "#1C8CFF",
          borderWidth: 5,
          barPercentage: 0.4,
          data: this.props.data,
        },
      ],
    }
    
    
    return (
      <Row style={{paddingTop:'5rem', paddingBottom:'0rem'}}>

      <Col md="8" style={{display:'flex', flexDirection:'column'}}>
        <Card className='pnlmetrics'>
        <h4>This {this.props.type}</h4>
        <hr/>
        <div className='homecard-data' style={{marginBottom:'1rem'}}>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600'}}>{this.props.numTransactions} </h3>
            <label>Transactions</label>
          </div>
          <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{fontWeight:'600', color:'#1C8CFF'}}>{this.props.numOpen}</h3>
            <label>Open</label>
          </div>
        </div>
        <div className='homecard-data'>
          <div style={{flex:.25}}>
            <h3 style={{fontWeight:'600'}}>{this.props.numClosed}</h3>
            <label>Closed</label>
          </div>
        </div>
        </div>
        <div className='homecard-data'>
          <div style={{flex:.5}}>
            <h3 style={{}}>${this.props.volume} </h3>
            <label>Volume</label>
          </div>
          <div style={{flex:.35}}>
            <h3 style={{fontWeight:'600', color:'#1cff36'}}>${this.props.pnl} </h3>
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
        <div className='d-flex flex-row justify-content-around'>
        <Bar
                    data={data}
                    options={chartExample10.options}
                    // height={70}
                  />
        </div>
        </Card>
      </Col>

      </Row>
    );
  }
}

export default PnLOverview;
