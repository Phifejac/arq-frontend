import React from "react";

//api
import { getOpenPositions, getInstances, getStatistics } from "../../api/http"
import { formatDate } from "../../api/utils"


// subcomponents
import PnLBar from "components/PNL/PnLBar";
import OpenClosed from "components/PNL/OpenClosed";
import SearchInput from "components/PNL/SearchInput";
import PnLSearchBar from "components/PNL/PnLSearchBar";
import SearchResults from "components/PNL/SearchResults";

class PnL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab:'today',
      openPositions : [],
      closedInstances : [],
      numTransactions : '',
      pnlToday : '',
      volumeToday : ''
    };
  }

  componentDidMount = async () => {
    const today = formatDate(new Date())
    const openPositions = await getOpenPositions()
    const closedInstances = await getInstances({"date":today})
    const statistics = await getStatistics({ "date" : today, "type":"day"})
    this.setState({ 
      openPositions : openPositions,
      closedInstances : closedInstances,
      volumeToday : statistics.volume,
      pnlToday : statistics.pnl,
      numTransactions : statistics.num_transactions
    })
  }

  setToday() {
    this.setState({ tab: 'today' })
  }
  setSearch() {
    this.setState({ tab: 'search' })
  }

  render() {
    return (
      <>
        <div className="content" style={{paddingLeft:'2.5rem', backgroundColor:'#202125', paddingTop:'1rem', paddingRight:'2rem'}}>
          <div style={{marginBottom:'-4rem', paddingTop:'5rem'}}>
              <span className={this.state.tab === 'today' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setToday()}>Today</span>
              <span className={this.state.tab === 'search' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setSearch()} style={{marginRight:'5rem'}}>Search</span>
          </div>
          {this.state.tab === 'today' ?
          <div>
            <PnLBar volumeToday={this.state.volumeToday} numTransactions={this.state.numTransactions} pnlToday={this.state.pnlToday} numOpen={this.state.openPositions.length} numClosed={this.state.closedInstances.length * 2}/>
            <OpenClosed openPositions={this.state.openPositions} closedInstances={this.state.closedInstances}/> 
          </div>
          : 
          <span/>
          }
          {this.state.tab === 'search' ?
          <div>
            <SearchInput/> 
            <PnLSearchBar/>
            <SearchResults/>
          </div>
          : 
          <span/>
          }
          
        
        </div>
      </>
    );
  }
}

export default PnL;
