import React, { Component } from "react";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

import SearchInput from "components/Transactions/Search/SearchInput";
import SearchResults from "components/Transactions/Search/SearchResults/SearchResults";


class TransactionSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range:'range',
      type:'bond'
    };
  }

  setrange() {
    this.setState({ range: 'range' })
  }
  set1day() {
    this.setState({ range: '1day' })
  }
  set30days() {
    this.setState({ range: '30days' })
  }
  setthismonth() {
    this.setState({ range: 'thismonth' })
  }
  setlastmonth() {
    this.setState({ range: 'lastmonth' })
  }
  setalltime() {
    this.setState({ range: 'alltime' })
  }

  setbond() {
    this.setState({ type: 'bond' })
  }
  setrepo() {
    this.setState({ type: 'repo' })
  }
  setfuture() {
    this.setState({ type: 'future' })
  }
  
  render() {
    return (
      <>
      {this.state.alert}
      
          <div style={{width:'100%', marginLeft:'2.5rem'}}>
            <h4 style={{marginTop:'3rem', fontFamily:'Poppins', fontWeight:'500', fontSize:'large', marginBottom:'2rem', color:'#5a5b5d'}}> Transactions > <span style={{color:'white'}}>Search</span></h4>
            
            {/* Range Selectors */}

            <div style={{marginBottom:'1rem'}}>
                <span className={this.state.range === '1day' ? 'smalltab-active' : 'smalltab'} onClick={() => this.set1day()}>1 Day</span>
                <span className={this.state.range === 'range' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setrange()} style={{marginRight:'5rem'}}>Range</span>
                
                <span className={this.state.range === '30days' ? 'smalltab-active' : 'smalltab'} onClick={() => this.set30days()}>Last 30 Days</span>
                <span className={this.state.range === 'thismonth' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setthismonth()}>This Month</span>
                <span className={this.state.range === 'lastmonth' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setlastmonth()}>Last Month</span>
                <span className={this.state.range === 'alltime' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setalltime()}>All Time</span>
             </div>
          
            {/* Search Input */}

            <Row>

              <SearchInput/>      
            
              <div style={{display:'flex',flexDirection:'column', marginRight:'4rem', alignItems:'flex-end', justifyContent:'center'}} className='ml-auto'>
                <div className='text-right' style={{display:'flex',flexDirection:'column', alignItems:'flex-end', justifyContent:'center', color:'white'}}>
                  <div style={{fontSize:'large'}}>Quick Analytics</div>
                  <div style={{fontSize:'large'}}>402020</div>
                  <div style={{fontSize:'large'}}>2430040</div>
                </div>
              </div>

            </Row>
            
            {/* Results Table */}
            
            <Col lg='12'>
              <div style={{zIndex:-1, paddingTop:'2rem', marginLeft:'-2rem'}}>

                <SearchResults/>
              </div>  
            </Col> 
          </div>
      </>
    );
  }
}

export default TransactionSearch;
