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
} from "reactstrap";
import TransactionSearch from "./TransactionSearch";

class Applications extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <h4>Applications</h4>
          <Row style={{overflowX:'scroll', flexWrap:'nowrap'}}>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats" style={{border:'solid 2px #3E526D'}}>
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
                  <div className="stats" style={{color:'#3E526D'}}>
                    <i className="fa fa-check" style={{color:'#3E526D'}}/>
                    Open Now
                  </div>
                </CardFooter>
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
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                          <p style={{fontSize:'1.4rem', color:'#3E526D'}}>Compliance Admin</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    
                  <Badge color="danger" pill style={{marginBottom:-5}}> 
                    7
                  </Badge>
                    <span style={{paddingLeft:'.7rem'}}>Action Required</span>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                          <p style={{fontSize:'1.4rem', color:'#3E526D'}}>ML Tradefiles</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh" />
                    Update now
                  </div>
                </CardFooter>
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
          <Progress value={25}></Progress>
          <br/>
          <TransactionSearch/>
        </div>
      </>
    );
  }
}

export default Applications;
