import React, { Component } from "react";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

//subcomponents
import SearchInput from "components/Transactions/Search/SearchInput";
import SearchResults from "components/Transactions/Search/SearchResults/SearchResults";

// api imports
import { getTransactions } from "../../../api/http"

class TransactionSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false,
      range:'range',
      type:'bond',
      transactions : []
    };
    this.executeSearch= this.executeSearch.bind(this);
  }

  executeSearch = async (parameters) => {
    this.setState({ loading : true });
    const newTransactions = await getTransactions(parameters);
    this.setState({ transactions : newTransactions, loading:false })
  }
  
  render() {
    return (
      <>
      {this.state.alert}
      
          <div style={{width:'100%', marginLeft:'2.5rem'}}>
            <h4 style={{marginTop:'3rem', fontFamily:'Poppins', fontWeight:'500', fontSize:'large', marginBottom:'2rem', color:'#5a5b5d'}}> Transactions {">"} <span style={{color:'white'}}>Search</span></h4>
            
            <Row>
              <SearchInput executeSearch= {this.executeSearch} loading={this.state.loading} />      
            </Row>
            <Col lg='12'>
              <div style={{zIndex:-1, paddingTop:'2rem', marginLeft:'-2rem'}}>

                <SearchResults transactions={this.state.transactions} />
              </div>  
            </Col> 
          </div>
      </>
    );
  }
}

export default TransactionSearch;
