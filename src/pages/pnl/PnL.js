import React from "react";

//api
import { getOpenPositions, getInstances, getStatistics, getStatisticsRange } from "../../api/http"
import { formatDate, formatStatisticsWeek, formatStatisticsMonth } from "../../api/utils"


// subcomponents
import PnLBar from "components/PNL/PnLBar";
import OpenClosed from "components/PNL/OpenClosed";
import SearchInput from "components/PNL/SearchInput";
import PnLSearchBar from "components/PNL/PnLSearchBar";
import SearchResults from "components/PNL/SearchResults";
import Closed from "components/PNL/Closed";
import PnLOverview from "components/PNL/PnLOverview";

// api imports
import { getTransactions } from "../../api/http"

class PnL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab:'today',
      openPositions : [],
      closedInstances : [],
      numTransactions : '',
      pnlToday : '',
      volumeToday : '',
      numTransactionsWeek : '',
      pnlWeek : '',
      volumeWeek : '',
      numTransactionsMonth : '',
      pnlMonth : '',
      volumeMonth : '',
      searchStatistics : {}
    };
    this.executeSearch= this.executeSearch.bind(this)
  }

  executeSearch = async (parameters) => {
    this.setState({ loading : true });
    const statistics = await getStatisticsRange( parameters )
    const newInstances = await getInstances(parameters)
    this.setState({ loading : false, closedInstances : newInstances, searchStatistics : statistics})
  }

  componentDidMount = async () => {
    const today = new Date()
    const todayFormatted = formatDate(new Date())

    var oneWeekAgo = new Date();
    const weekAgo = formatDate(oneWeekAgo.setDate(oneWeekAgo.getDate()-7))
    console.log("week ago", weekAgo)
    const firstOfMonth = formatDate(today.getMonth()+1 + "/01/" + String(today.getFullYear()))
    
    const openPositions = await getOpenPositions()
    const closedInstances = await getInstances({"date":todayFormatted})
    const statisticsList = await getStatistics({ "start_date" : weekAgo, "end_date": todayFormatted})
    const statisticsListMonth = await getStatistics({ "start_date" : firstOfMonth, "end_date":todayFormatted, "type":"day"})
    const monthStats = await getStatistics({ "date":firstOfMonth, "type":"month" })

    const { todayStats, weekStats, weekLabels, weekData } = formatStatisticsWeek(statisticsList, today)
    const { monthLabels, monthData } = formatStatisticsMonth(statisticsListMonth)

    this.setState({ 
      statisticsListWeek : statisticsList,
      openPositions : openPositions,
      closedInstances : closedInstances,
      volumeToday : todayStats.volume.toLocaleString(undefined, {maximumFractionDigits: 2}),
      pnlToday : todayStats.pnl.toLocaleString(undefined, {maximumFractionDigits: 2}),
      numTransactions : todayStats.num_transactions,

      volumeWeek : weekStats.volume.toLocaleString(undefined, {maximumFractionDigits: 2}),
      pnlWeek : weekStats.pnl.toLocaleString(undefined, {maximumFractionDigits: 2}),
      numTransactionsWeek : weekStats.num_transactions,
      weekLabels : weekLabels,
      weekData : weekData,

      volumeMonth : monthStats[0].volume.toLocaleString(undefined, {maximumFractionDigits: 2}),
      pnlMonth : monthStats[0].pnl.toLocaleString(undefined, {maximumFractionDigits: 2}),
      numTransactionsMonth: monthStats[0].num_transactions,
      monthLabels : monthLabels,
      monthData : monthData
    })
  }

  setToday() {
    this.setState({ tab: 'today' })
  }
  setSearch() {
    this.setState({ tab: 'search' })
  }
  setWeek() {
    this.setState({ tab: 'week' })
  }
  setMonth() {
    this.setState({ tab: 'month' })
  }

  render() {
    return (
      <>
        <div className="content" style={{paddingLeft:'2.5rem', backgroundColor:'#202125', paddingTop:'1rem', paddingRight:'2rem'}}>
          <div style={{marginBottom:'-4rem', paddingTop:'5rem'}}>
              <span className={this.state.tab === 'today' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setToday()}>Day</span>
              <span className={this.state.tab === 'week' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setWeek()}>Week</span>
              <span className={this.state.tab === 'month' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setMonth()}>Month</span>
              <span className={this.state.tab === 'search' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setSearch()} style={{marginRight:'5rem'}}>Search</span>
          </div>
          {this.state.tab === 'today' ?
          <div>
            <PnLBar volumeToday={this.state.volumeToday} numTransactions={this.state.numTransactions} pnlToday={this.state.pnlToday} numOpen={this.state.openPositions.length} numClosed={this.state.numTransactions - this.state.openPositions.length}/>
            <OpenClosed openPositions={this.state.openPositions} closedInstances={this.state.closedInstances}/> 
          </div>
          : 
          <span/>
          }
          {this.state.tab === 'week' ?
          <div>
            {/* <PnLBar volumeToday={this.state.volumeToday} numTransactions={this.state.numTransactions} pnlToday={this.state.pnlToday} numOpen={this.state.openPositions.length} numClosed={this.state.closedInstances.length * 2}/> */}
            <PnLOverview type={"Week"} volume={this.state.volumeWeek} numTransactions={this.state.numTransactionsWeek} pnl={this.state.pnlWeek} numOpen={this.state.openPositions.length} numClosed={this.state.numTransactionsWeek - this.state.openPositions.length} labels={this.state.weekLabels} data={this.state.weekData} />
            {/* <OpenClosed openPositions={this.state.openPositions} closedInstances={this.state.closedInstances}/>  */}
            <Closed openPositions={this.state.openPositions} closedInstances={this.state.closedInstances}/>
          </div>
          : 
          <span/>
          }
         {this.state.tab === 'month' ?
          <div>
            {/* <PnLBar volumeToday={this.state.volumeToday} numTransactions={this.state.numTransactions} pnlToday={this.state.pnlToday} numOpen={this.state.openPositions.length} numClosed={this.state.closedInstances.length * 2}/> */}
            <PnLOverview type={"Month"} volume={this.state.volumeMonth} numTransactions={this.state.numTransactionsMonth} pnl={this.state.pnlMonth} numOpen={this.state.openPositions.length} numClosed={this.state.numTransactionsMonth-this.state.openPositions.length} labels={this.state.monthLabels} data={this.state.monthData}/>
            {/* <OpenClosed openPositions={this.state.openPositions} closedInstances={this.state.closedInstances}/>  */}
            <Closed openPositions={this.state.openPositions} closedInstances={this.state.closedInstances}/>
          </div>
          : 
          <span/>
          }
          {this.state.tab === 'search' ?
          <div>
            <PnLSearchBar executeSearch={this.executeSearch} loading={this.state.loading} searchStatistics={this.state.searchStatistics} />
            <Closed openPositions={this.state.openPositions} closedInstances={this.state.closedInstances}/>
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
