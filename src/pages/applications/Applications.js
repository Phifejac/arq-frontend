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
      rotation: 0,
    };
    this.toggle = this.toggle.bind(this);
    this.rotate = this.rotate.bind(this);
  }

  rotate(){
    let newRotation = this.state.rotation + 180;
    if(newRotation >= 180){
      newRotation =- 180;
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
        <div className="content" style={{padding:0, paddingLeft:'1rem'}}>
          <div style={{display:'flex', flexDirection:'row'}}  onClick={ () => {this.toggle(); this.rotate()}}>
            <h4 style={{marginBottom:-5, margin:0, color:'#3E526D', fontWeight:'500'}}>App Menu</h4>
            <div style={{paddingTop:'.4rem', marginLeft:'.6rem'}} className='grow-big'>
              <img src={require("../../assets/img/caret.svg")} style={{height:'1rem',transform: `rotate(${this.state.rotation}deg)`, transformOrigin:'center center', transition: 'transform .1s linear'}}></img>
            </div>
          </div>
          <Collapse isOpen={this.state.collapse}>
            <Row style={{overflowX:'scroll', flexWrap:'nowrap', paddingTop:10}}>
            <Col lg="3" md="6" sm="6">
              <Card className={this.state.selected === 'transaction-search' ? "card-stats transaction-selected grow" : "card-stats grow"} onClick={() => this.openTransactionSearch()}>
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="fa fa-search text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p style={{fontSize:'1.4rem', color:'#3E526D'}}>Transaction Search</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  {this.state.selected === 'transaction-search' ?
                    <div className="stats" style={{color:'#3E526D'}}>
                      <i className="fa fa-check" style={{color:'#FCC658'}}/>
                      Open Now
                    </div>
                  :
                  <div className="stats">
                    <Badge color="warning" pill style={{marginBottom:-5}}> 
                      2
                    </Badge>
                    <span style={{paddingLeft:'.7rem'}}>Action Required</span>
                  </div>
                  }
                </CardFooter>
                <img src={require('../../assets/img/search-bg.svg')} style={{ opacity:.15, position:'absolute', bottom:0, right:0, height:'95%'}}></img>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
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
            <Col lg="3" md="6" sm="6">
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
            <Col lg="3" md="6" sm="6">
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
            <Col lg="3" md="6" sm="6">
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
            </Col>
          </Row>
          </Collapse>
          <br/>

          {this.state.selected === 'transaction-search' ? <TransactionSearch/> : <span/>}
          {this.state.selected === 'trade-linking' ? <TradeLinking/> : <span/>}
        </div>
      </>
    );
  }
}

export default Applications;
