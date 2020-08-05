/*!

=========================================================
* Paper Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
  Collapse
} from "reactstrap";
import TransactionSearch from "./TransactionSearch";
import TradeLinking from "./TradeLinking";

class Applications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:'transaction-search',
      collapse: false,
      rotation: 90,
    };
    this.toggle = this.toggle.bind(this);
    this.rotate = this.rotate.bind(this);
  }

  rotate(){
    let newRotation = this.state.rotation + 180;
    if(newRotation >= 270){
      newRotation =- 270;
    }
    this.setState({
      rotation: newRotation,
    })
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse, rotate: !this.state.rotate  });
  }

  openTransactionSearch() {
    this.setState({ selected: 'transaction-search' })
  }

  openTradeLinking() {
    this.setState({ selected: 'trade-linking' })
  }

  openReconcile() {
    this.setState({ selected: 'reconcile-transactions' })
  }

  openStrategies() {
    this.setState({ selected: 'transaction-strategies' })
  }

  render() {
    return (
      <>
        <div className="content" style={{padding:0, borderWidth:0, backgroundColor:'#202125', height:'100vh'}}>
          {/* <Row style={{display:'flex', flexDirection:'row'}}> */}
          {/* <div style={this.state.collapse ? {backgroundColor:'red', width:'20%'} : {backgroundColor:'red', width:'10%'}}   onClick={ () => {this.toggle(); this.rotate()}}> */}
            
            {/* <div style={{paddingTop:'.4rem', marginLeft:'.6rem'}} className='grow-big'>
              <img src={require("../../assets/img/caret.svg")} style={{height:'1rem',transform: `rotate(${this.state.rotation}deg)`, transformOrigin:'center center', transition: 'transform .1s linear'}}></img>
            </div> */}

                {/* {this.state.collapse ? 
                <div className={this.state.selected === 'transaction-search' ? "" : ""} onClick={() => this.openTransactionSearch()}>
                  <p>Search</p>
                </div>
                :
                <div className={this.state.selected === 'transaction-search' ? "" : ""} onClick={() => this.openTransactionSearch()}>
                  <p>Search</p>
                </div>
                } */}

            <nav className='navbarside' style={{zIndex:+1}}>
              <ul className='navbarside-nav'>
                
                <li className='navside-item'>
                  <a href="#" className='navside-link' onClick={() => this.openTransactionSearch()}>
                    <span className='sidelink-text'>Search</span>
                    <span className='sidelink-subtext'>Easily view and sort previous trades on a broad scale.</span>
                  </a>
                </li>

                <li className='navside-item' onClick={() => this.openTradeLinking()}>
                  <a href="#" className='navside-link'>
                    <span className='sidelink-text'>Advanced </span><span className='sidelink-text'>Search</span>
                    <span className='sidelink-subtext'>Easily view and sort previous trades on a broad scale.</span>
                  </a>
                </li>

                <li className='navside-item'>
                  <a href="#" className='navside-link'>
                    <span className='sidelink-text'>Linked </span><span className='sidelink-text'>Transactions</span>
                    <span className='sidelink-subtext'>Easily view and sort previous trades on a broad scale.</span>
                  </a>
                </li>

                <li className='navside-item'>
                  <a href="#" className='navside-link'>
                    <span className='sidelink-text'>Reconcile </span><span className='sidelink-text'>Transactions</span>
                    <span className='sidelink-subtext'>Easily view and sort previous trades on a broad scale.</span>
                  </a>
                </li>

                <li className='navside-item'>
                  <a href="#" className='navside-link'>
                    <span className='sidelink-text'>Strategies</span>
                    <span className='sidelink-subtext'>Easily view and sort previous trades on a broad scale.</span>
                  </a>
                </li>


              </ul>
            </nav>
            
            {/* <Col lg="12" md="6" sm="6">
              <Card className={this.state.selected === 'trade-linking' ? "card-stats linking-selected grow" : "card-stats grow"} onClick={() => this.openTradeLinking()}>
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                    <div className="numbers">
                        <p style={{fontSize:'1.4rem', color:'#3E526D'}}>Trade<br/>Linking</p>
                    </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  {this.state.selected === 'trade-linking' ?
                    <div className="stats" style={{color:'#3E526D'}}>
                      <i className="fa fa-check" style={{color:'#6AD097'}}/>
                      Open Now
                    </div>
                  :
                  <div className="stats">
                    <Badge color="success" pill style={{marginBottom:-5}}> 
                      2
                    </Badge>
                    <span style={{paddingLeft:'.7rem'}}>Action Required</span>
                  </div>
                  }
                </CardFooter>
                <img src={require('../../assets/img/link.svg')} style={{ opacity:.15, position:'absolute', bottom:0, right:0, height:'95%'}}></img>
              </Card>
            </Col>
            <Col lg="12" md="6" sm="6">
              <Card className={this.state.selected === 'reconcile-transactions' ? "card-stats reconcile-selected grow" : "card-stats grow"} onClick={() => this.openReconcile()}>
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-paper text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                          <p style={{fontSize:'1.4rem', color:'#3E526D'}}>Reconcile Transactions</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  {this.state.selected === 'reconcile-transactions' ?
                    <div className="stats" style={{color:'#3E526D'}}>
                      <i className="fa fa-check" style={{color:'#EF8256'}}/>
                      Open Now
                    </div>
                  :
                  <div className="stats">
                    <Badge color="danger" pill style={{marginBottom:-5}}> 
                      7
                    </Badge>
                    <span style={{paddingLeft:'.7rem'}}>Action Required</span>
                  </div>
                  }
                </CardFooter>
                <img src={require('../../assets/img/shield.svg')} style={{ opacity:.15, position:'absolute', bottom:0, right:0, height:'95%'}}></img>
              </Card>
            </Col>
            <Col lg="12" md="6" sm="6">
              <Card className={this.state.selected === 'transaction-strategies' ? "card-stats strategies-selected grow" : "card-stats grow"} onClick={() => this.openStrategies()}>
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-ruler-pencil text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                          <p style={{fontSize:'1.4rem', color:'#3E526D'}}>Transaction Strategies</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh" style={{color:'#EF8256'}}/>
                    Update now
                  </div>
                </CardFooter>
                <img src={require('../../assets/img/focus.svg')} style={{ opacity:.15, position:'absolute', bottom:0, right:0, height:'95%'}}></img>
              </Card>
            </Col>
            <Col lg="12" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                    <div className="numbers">
                        <p style={{fontSize:'1.4rem', color:'#3E526D'}}>ATC</p>
                    </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <Badge color="success" pill style={{marginBottom:-5}}> 
                      2
                    </Badge>
                    <span style={{paddingLeft:'.7rem', color:'#3E526D'}}>New Items</span>
                  </div>
                </CardFooter>
              </Card>
            </Col> */}
          {/* </Collapse> */}
          {/* </div> */}
          {/* } */}
          <div 
          style={{paddingLeft:'8rem', display:'flex', width:'100%', height:'100%'}}
          // style={this.state.collapse ? {backgroundColor:'red', width:'80%'} : {backgroundColor:'red', width:'90%'}}
          >
          {this.state.selected === 'transaction-search' ? <TransactionSearch/> : <span/>}
          {this.state.selected === 'trade-linking' ? <TradeLinking/> : <span/>}
          </div>
          {/* </Row> */}
        </div>
      </>
    );
  }
}

export default Applications;
