
import React from "react";

import TransactionSearch from "./TransactionSearch/TransactionSearch";
import AdvancedSearch from "./AdvancedSearch/AdvancedSearch"
import ReconcileTransactions from "./ReconcileTransactions/ReconcileTransactions";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab:'day'
    };
  }
  setToday() {
    this.setState({ tab: 'day' })
  }
  setSearch() {
    this.setState({ tab: 'search' })
  }
  

  render() {
    return (
      <>
        <div className="content" style={{padding:0, borderWidth:0, backgroundColor:'#202125'}}>
          <div style={{padding:'6rem 1rem 0rem 1rem', margin:'0rem 0rem 0rem 1.5rem', width:'100%', height:'100%'}}>
              <div style={{paddingBottom:'1rem'}}>
                <span className={this.state.tab === 'day' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setToday()}>Day</span>
                <span className={this.state.tab === 'search' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setSearch()}>Advanced</span>
              </div>
              {this.state.tab === 'day' ? <TransactionSearch/> : <span/>}
              {this.state.tab === 'search' ? <AdvancedSearch/> : <span/>}
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
