import React from "react";

// reactstrap components
import {
  Row,
} from "reactstrap";
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";

import NextReport from "components/Home/NextReport";
import Counterparties from "components/Home/Counterparties";
import MonthlyVolume from "components/Home/MonthlyVolume";
import PnLRow from "components/Home/PnLRow";
import PnLGraph from "components/Home/PnLGraph";
import MonthlyTransactions from "components/Home/MonthlyTransactions";

// api

import { getTransactions }  from "../../api/http"
import AdvancedSearchResults from "components/Transactions/AdvancedSearch/AdvancedSearchResults";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagsinput: ["All", "Firm A", "Firm B", "Firm C"],
      transactions : []
    };
  }

  componentDidMount = async () => {
    const transactions = await getTransactions({"start_date":"09/08/2020", "end_date" : "09/08/2020" });
    this.setState({ transactions })
  }
  handleTagsinput = (tagsinput) => {
    this.setState({ tagsinput });
  };
  render() {
    return (
      <>
        <div className="content" style={{paddingLeft:'2.5rem', backgroundColor:'#202125', paddingTop:'1rem', paddingBottom:'2rem', paddingRight:'2rem'}}>
          
          <PnLRow/>
          
          <Row>
            <PnLGraph/>
            <MonthlyVolume/>
            <MonthlyTransactions/>
          </Row>

          <div style={{paddingTop:'3rem'}}>
            <h1 className='head1'>Today's Transactions</h1>
            <AdvancedSearchResults transactions={this.state.transactions} />
          </div>
 
          {/* OLD */}
          
          {/* Activity Overview */}

          {/* <h4 style={{marginTop:0, color:'#FFFFFF80', marginBottom:0, paddingBottom:'1rem'}}>Activity Overview</h4>
          <Row className='d-flex align-items-center'> 
            <NextReport/>
            <Counterparties/>
          </Row> */}

          {/* Quick Look */}

          {/* <h4 style={{marginTop:0, color:'#FFFFFF80'}}>Quick Look</h4>
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
          </Row> */}
        </div>
      </>
    );
  }
}

export default Home;
