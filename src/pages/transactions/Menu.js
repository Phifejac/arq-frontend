
import React from "react";

import TransactionSearch from "./TransactionSearch/TransactionSearch";
import AdvancedSearch from "./AdvancedSearch/AdvancedSearch"
import ReconcileTransactions from "./ReconcileTransactions/ReconcileTransactions";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:'transaction-search',
      collapse: false,
    };
  }


  toggle() {
    this.setState({ collapse: !this.state.collapse, rotate: !this.state.rotate  });
  }

  openTransactionSearch() {
    this.setState({ selected: 'transaction-search' })
  }

  openAdvancedSearch() {
    this.setState({ selected: 'advanced-search' })
  }
  openTradeLinking() {
    this.setState({ selected: 'trade-linking' })
  }

  render() {
    return (
      <>
        <div className="content" style={{padding:0, borderWidth:0, backgroundColor:'#202125'}}>
            <nav className='navbarside' style={{zIndex:+1}}>
              <ul className='navbarside-nav'>

                {/* Search */}
                
                <li className='navside-item'  onClick={() => this.openTransactionSearch()}>
                    <div className={this.state.selected === 'transaction-search' ? 'navside-link-active' : 'navside-link' }>
                      <span className={this.state.selected === 'transaction-search' ? 'sidelink-text-active' : 'sidelink-text' }>Search</span>
                      <span className='sidelink-subtext'>Easily view and sort previous trades on a broad scale.</span>
                    </div>
                </li>

                {/* Advanced Search */}

                <li className='navside-item' onClick={() => this.openAdvancedSearch()}>
                  <div className={this.state.selected === 'advanced-search' ? 'navside-link-active' : 'navside-link' } >
                    <span className={this.state.selected === 'advanced-search' ? 'sidelink-text-active' : 'sidelink-text' }>Advanced </span><span className={this.state.selected === 'advanced-search' ? 'sidelink-text-active' : 'sidelink-text'}>Search</span>
                    <span className='sidelink-subtext'>Tailor your search critera to isolate specific trades.</span>
                  </div>
                </li>

                {/* Linked Transactions */}

                <li className='navside-item' onClick={() => this.openTradeLinking()}>
                  <div className={this.state.selected === 'trade-linking' ? 'navside-link-active' : 'navside-link' } >
                    <span className={this.state.selected === 'trade-linking' ? 'sidelink-text-active' : 'sidelink-text' }>Linked </span><span className={this.state.selected === 'trade-linking' ? 'sidelink-text-active' : 'sidelink-text' }>Transactions</span>
                    <span className='sidelink-subtext'>View and manage your linked transactions.</span>
                  </div>
                </li>

                {/* Reconcile Transactions */}

                <li className='navside-item' onClick={() => this.openTradeLinking()}>
                  <a href="#" className='navside-link'>
                    <span className={this.state.selected === 'reconcile-transactions' ? 'sidelink-text-active' : 'sidelink-text' }>Reconcile </span><span className={this.state.selected === 'reconcile-transactions' ? 'sidelink-text-active' : 'sidelink-text' }>Transactions</span>
                    <span className='sidelink-subtext'>Confirm details for pending transactions.</span>
                  </a>
                </li>

                {/* Strategies */}

                <li className='navside-item'>
                  <a href="#" className='navside-link' style={{borderBottom:0}}>
                    <span className={this.state.selected === 'strategies' ? 'sidelink-text-active' : 'sidelink-text' }>Strategies</span>
                    <span className='sidelink-subtext'>Manage and employ tailored trade strategies.</span>
                  </a>
                </li>


              </ul>
            </nav>
          <div style={{paddingLeft:'8rem', display:'flex', width:'100%', height:'100%'}}>
            {this.state.selected === 'transaction-search' ? <TransactionSearch/> : <span/>}
            {this.state.selected === 'advanced-search' ? <AdvancedSearch/> : <span/>}
            {this.state.selected === 'trade-linking' ? <ReconcileTransactions/> : <span/>}
          </div>
          {/* </Row> */}
        </div>
      </>
    );
  }
}

export default Menu;
