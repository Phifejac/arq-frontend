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
import TagsInput from "react-tagsinput";


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
  }
  
  render() {
    return (
      <>
      {this.state.alert}
          <div style={{width:'100%'}}>
            <Row>
              <AdvancedSearchInputs executeSearch={this.executeSearch} loading={this.state.loading} />
            </Row>
            <Col lg='12'>
              <div style={{zIndex:-1, paddingTop:'2rem', marginLeft:'-2rem'}}>
                <AdvancedSearchResults transactions={this.state.transactions}/>
              </div>  
            </Col> 
          </div>
      </>
    );
  }
}

export default AdvancedSearch;
