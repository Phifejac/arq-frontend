import React from "react";
import { Line, Doughnut } from "react-chartjs-2";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Row,
  Col,
  Table,
  CardHeader,
  UncontrolledTooltip
} from "reactstrap";
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";

import NextReport from "components/Home/NextReport";
import Counterparties from "components/Home/Counterparties";
import TotalTransactions from "components/Home/TotalTransactions";
import MonthlyVolume from "components/Home/MonthlyVolume";

// api

import { getTransactions }  from "../../api/http"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagsinput: ["All", "Firm A", "Firm B", "Firm C"],
      
    };
  }

  componentDidMount = async () => {
    const transactions = await getTransactions({"trade_date":"7/24/20"});
    console.log("transactions", transactions)
  }
  handleTagsinput = (tagsinput) => {
    this.setState({ tagsinput });
  };
  render() {
    return (
      <>
        <div className="content" style={{paddingLeft:'2.5rem', backgroundColor:'#202125', paddingTop:'1rem', paddingBottom:'2rem'}}>
          
          {/* Activity Overview */}

          <h4 style={{marginTop:0, color:'#FFFFFF80', marginBottom:0, paddingBottom:'1rem', paddingTop:'5rem'}}>Activity Overview</h4>
          <Row className='d-flex align-items-center'> 
            <NextReport/>
            <Counterparties/>
          </Row>

          {/* Quick Look */}

          <h4 style={{marginTop:0, color:'#FFFFFF80'}}>Quick Look</h4>
          <div style={{marginTop:'-.5rem',}}>
            <TagsInput
              value={this.state.tagsinput}
              onChange={this.handleTagsinput}
              tagProps={{ className: "react-tagsinput-tag primary" }}
              inputProps={{
                className: 'react-tagsinput-input',
                placeholder: 'Filter...',
              }}
            />
          </div>
          <Row>
            <TotalTransactions/>
            <MonthlyVolume/>
          </Row>
        </div>
      </>
    );
  }
}

export default Home;
