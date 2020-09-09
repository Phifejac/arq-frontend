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

class PnL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <div className="content" style={{paddingLeft:'2.5rem', backgroundColor:'#202125', paddingTop:'1rem'}}>
        <h3 style={{paddingTop:'5rem', fontFamily:'Poppins', fontWeight:'500', paddingBottom:'2rem', color:'white', margin:0}}>Profits & Losses</h3>
        </div>
      </>
    );
  }
}

export default PnL;
