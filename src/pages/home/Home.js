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

import { getHomeStatistics, getTransactions } from "../../api/http"
import { formatDate } from "../../api/utils"
import AdvancedSearchResults from "components/Transactions/AdvancedSearch/AdvancedSearchResults";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numTransactionsToday : null,
      numTransactionsWeek : null,
      numTransactionsMonth : null,
      pnlToday : null,
      pnlWeek : null,
      pnlMonth : null,
      transactions : []
    };
  }

  componentDidMount = async () => {
    const statistics = await getHomeStatistics();
    const transactions = await getTransactions({"start_date": formatDate(new Date()), "end_date": formatDate(new Date())})
    this.setState({ 
      numTransactionsToday : statistics.num_transactions_today,
      numTransactionsWeek : statistics.num_transactions_week,
      numTransactionsMonth : statistics.num_transactions_month,
      pnlToday : statistics.pnl_today.toLocaleString(undefined, {maximumFractionDigits: 2}),
      pnlWeek : statistics.pnl_week.toLocaleString(undefined, {maximumFractionDigits: 2}),
      pnlMonth : statistics.pnl_month.toLocaleString(undefined, {maximumFractionDigits: 2}),
      month : statistics.month,
      week : statistics.week,
      transactions : transactions
    })
  }
  handleTagsinput = (tagsinput) => {
    this.setState({ tagsinput });
  };
  
  render() {

    const statistics = this.state.statistics
    return (
      <>
        <div className="content" style={{ paddingLeft: '2.5rem', backgroundColor: '#202125', paddingTop: '1rem', paddingBottom: '2rem', paddingRight: '2rem' }}>

          <PnLRow 
            numTransactionsToday={this.state.numTransactionsToday} 
            numTransactionsWeek={this.state.numTransactionsWeek} 
            numTransactionsMonth={this.state.numTransactionsMonth} 
            pnlToday={this.state.pnlToday} 
            pnlWeek={this.state.pnlWeek} 
            pnlMonth={this.state.pnlMonth} 
          />

          <Row>
            <PnLGraph weekData={this.state.week}/>
            <MonthlyVolume monthlyData={this.state.month} />
            <MonthlyTransactions monthlyData={this.state.month} />
          </Row>

          <div style={{ paddingTop: '3rem' }}>
            <h1 className='head1'>Today's Transactions</h1>
            <AdvancedSearchResults transactions={this.state.transactions}/>
          </div>
          
        </div>
      </>
    );
  }
}

export default Home;
