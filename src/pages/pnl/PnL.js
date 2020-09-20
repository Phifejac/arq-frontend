import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Row,
  Col,
  Progress,
  Collapse,
  NavItem,
  NavLink
} from "reactstrap";
import PnLBar from "components/PNL/PnLBar";
import OpenClosed from "components/PNL/OpenClosed";
import SearchInput from "components/PNL/SearchInput";
import PnLSearchBar from "components/PNL/PnLSearchBar";
import SearchResults from "components/PNL/SearchResults";

class PnL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab:'search'
    };
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
            <PnLBar/>
            <OpenClosed/> 
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
