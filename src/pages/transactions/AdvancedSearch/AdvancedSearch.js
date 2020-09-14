import React, { Component } from "react";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";
import AdvancedSearchInputs from "../../../components/Transactions/AdvancedSearch/AdvancedSearchInputs";
import AdvancedSearchResults from "components/Transactions/AdvancedSearch/AdvancedSearchResults";

// api imports
import { getTransactions } from "../../../api/http"

const Transactions = [
  // {id: uuid(), content:'First Task'},
  // {id: uuid(), content:'First Task'}
]


class AdvancedSearch extends Component {
  static defaultProps = {
    numberOfMonths: 2,
  };
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      type: 'bond',
      client: null,
      book: null,
      counterparty: null,
      excounterparty: null,
      singleSelect: null,
      multipleSelect: null,
      tagsinput: ["Amsterdam", "Washington", "Sydney", "Beijing"],
      collapse: false,
      typeOpen:true,
      queryParameters : {},
      transactions : []
    };
    this.executeSearch= this.executeSearch.bind(this)
  }

  setQueryParameters(parameters) {
    this.setState({ queryParameters : parameters })
  }

  setBond = () => {
    this.setState({ type: 'bond'})
  }
  setRepo = () => {
    this.setState({ type: 'repo'})
  }
  setFuture = () => {
    this.setState({ type: 'future'})
  }
  setSwap = () => {
    this.setState({ type: 'swap'})
  }
  setUnwind = () => {
    this.setState({ type: 'unwind'})
  }
  setOption = () => {
    this.setState({ type: 'option'})
  }


  executeSearch = async (parameters) => {
    this.setState({ loading : true });
    const newTransactions = await getTransactions(parameters);
    this.setState({ loading : false, transactions : newTransactions})
    console.log("new transactions", newTransactions);
  }
  
  render() {
    return (
      <>
      {this.state.alert}
          <div style={{width:'100%', marginLeft:'1.5rem'}}>
            <h4 style={{marginTop:'3rem', fontFamily:'Poppins', fontWeight:'500', fontSize:'large', marginBottom:'2rem', color:'#5a5b5d'}}> Transactions {">"} <span style={{color:'white'}}>Advanced Search</span></h4>
            
            {/* <div className="typeselector">
              Type
            </div> */}
            <div style={{marginTop:'0rem', marginBottom:'0rem', marginLeft:'0rem'}}>
                <span className={this.state.type === 'bond' ? 'smalltab2-active' : 'smalltab2'} onClick={this.setBond}>Bond</span>
                <span className={this.state.type === 'repo' ? 'smalltab2-active' : 'smalltab2'} onClick={this.setRepo}>Repo</span>
                <span className={this.state.type === 'future' ? 'smalltab2-active' : 'smalltab2'} onClick={this.setFuture}>Future</span>
                <span className={this.state.type === 'swap' ? 'smalltab2-active' : 'smalltab2'} onClick={this.setSwap}>Swap</span>
                <span className={this.state.type === 'option' ? 'smalltab2-active' : 'smalltab2'} onClick={this.setOption}>Option</span>
                <span className={this.state.type === 'unwind' ? 'smalltab2-active' : 'smalltab2'} onClick={this.setUnwind}>Unwind</span>
            
            </div>
            <Row style={{marginRight:'4rem'}}>
              <AdvancedSearchInputs executeSearch={this.executeSearch} />
            </Row>
            <Col lg='12'>
              <div style={{zIndex:-1, paddingTop:'2rem', marginLeft:'-2rem'}}>
                <AdvancedSearchResults transactions={this.state.transactions} />
              </div>  
            </Col> 
          </div>
      </>
    );
  }
}

export default AdvancedSearch;