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

class PnL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab:'today'
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
          <PnLBar/>
          <OpenClosed/>
        
        </div>
      </>
    );
  }
}

export default PnL;
