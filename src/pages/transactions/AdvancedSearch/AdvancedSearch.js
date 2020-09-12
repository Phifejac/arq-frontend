import React, { Component } from "react";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";
import AdvancedSearchInputs from "../../../components/Transactions/AdvancedSearch/AdvancedSearchInputs";
import SearchResults from "components/Transactions/Search/SearchResults/SearchResults";

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
      fund: null,
      client: null,
      book: null,
      counterparty: null,
      excounterparty: null,
      singleSelect: null,
      multipleSelect: null,
      tagsinput: ["Amsterdam", "Washington", "Sydney", "Beijing"],
      collapse: false,
      typeOpen:true
    };
  }


  handleSmallTab = () => {
    this.setState({ range: !this.state.range })
  }
  
  render() {
    return (
      <>
      {this.state.alert}
          <div style={{width:'100%', marginLeft:'2.5rem'}}>
            <h4 style={{marginTop:'3rem', fontFamily:'Poppins', fontWeight:'500', fontSize:'large', marginBottom:'2rem', color:'#5a5b5d'}}> Transactions > <span style={{color:'white'}}>Advanced Search</span></h4>
            
            {/* <div className="typeselector">
              Type
            </div> */}
            <div style={{marginTop:'0rem', marginBottom:'0rem', marginLeft:'0rem'}}>
                <span className={this.state.range ? 'smalltab2' : 'smalltab2-active'} onClick={this.handleSmallTab}>Bond</span>
                <span className={!this.state.range ? 'smalltab2' : 'smalltab2-active'} onClick={this.handleSmallTab}>Repo</span>
                <span className={!this.state.range ? 'smalltab2' : 'smalltab2-active'} onClick={this.handleSmallTab}>Future</span>
                <span className={!this.state.range ? 'smalltab2' : 'smalltab2-active'} onClick={this.handleSmallTab}>Swap</span>
                <span className={!this.state.range ? 'smalltab2' : 'smalltab2-active'} onClick={this.handleSmallTab}>Option</span>
                <span className={!this.state.range ? 'smalltab2' : 'smalltab2-active'} onClick={this.handleSmallTab}>Unwind</span>
            
            </div>
            <Row>
              <AdvancedSearchInputs/>
            </Row>
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

export default AdvancedSearch;
