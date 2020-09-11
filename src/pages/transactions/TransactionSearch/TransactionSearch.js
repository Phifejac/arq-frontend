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

  
  render() {
    return (
      <>
      {this.state.alert}
      
          <div style={{width:'100%', marginLeft:'2.5rem'}}>
            <h4 style={{marginTop:'3rem', fontFamily:'Poppins', fontWeight:'500', fontSize:'large', marginBottom:'2rem', color:'#5a5b5d'}}> Transactions > <span style={{color:'white'}}>Search</span></h4>
            
            {/* Search Input */}

            <Row>

              <SearchInput/>      

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
