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
import Clients from '../../components/Settings/Clients'
import AuditHistory from "components/Settings/AuditHistory";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab:'history'
    };
  }

  render() {
    return (
      <>
        <div className="content" style={{paddingLeft:'2.5rem', backgroundColor:'#202125', paddingTop:'1rem', paddingTop:'6rem'}}>
        <div style={{}}>
            <span className={this.state.tab === 'history' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setState({tab: 'history'})}>Audits</span>
            <span className={this.state.tab === 'clients' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setState({tab: 'clients'})}>Clients</span>
        </div>

        {this.state.tab === 'clients' ? <Clients/> :''}
        {this.state.tab === 'history' ? <AuditHistory/> :''}

        </div>
      </>
    );
  }
}

export default Settings;
