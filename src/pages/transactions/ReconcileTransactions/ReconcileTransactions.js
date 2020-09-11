import React, { Component } from "react";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";



class ReconcileTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range:'1day',
    };
  }

  setrange() {
    this.setState({ range: 'range' })
  }
  set1day() {
    this.setState({ range: '1day' })
  }
  
  render() {
    return (
      <>
          <div style={{width:'100%', marginLeft:'2.5rem'}}>
            <h4 style={{marginTop:'3rem', fontFamily:'Poppins', fontWeight:'500', fontSize:'large', marginBottom:'2rem', color:'#5a5b5d'}}> Transactions > <span style={{color:'white'}}>Trade Linking</span></h4>
            
            {/* Range Selectors */}

            <h1 className='head1'>Linking</h1>

            <div style={{marginBottom:'1rem'}}>
                <span className={this.state.range === '1day' ? 'smalltab-active' : 'smalltab'} onClick={() => this.set1day()}>Reconcile Trades</span>
                <span className={this.state.range === 'range' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setrange()} style={{marginRight:'5rem'}}>Trade Instances</span>
                
            </div>

            {/* <Row>
              <Col md='3'>

              </Col>
            </Row> */}

          <ul className='linking'>
            <li className='linking-1'>
              <div className='linking-3'>
                SECURITY
              </div>
              <div className='linking-3'>
                PRICE
              </div>
              <div className='linking-3'>
                QTY (M)
              </div>
              <div className='linking-2'>
                SIDE
              </div>
              <div className='linking-3'>
                COUNTERPARTY
              </div>
              <div className='linking-4 ml-auto' style={{paddingRight:'4rem'}}>
                DATE
              </div>
              <div className='linking-5'>
                TIME  
              </div>
            </li>
          </ul>
          <ul className='linking'>

            <li className='grow-small group card-shadow'>
              <div className='linking-1a'>
                <div className='linking-3'>
                  T 1 1/4 05/15/50
                </div>
                <div className='linking-3'>
                  98.578125
                </div>
                <div className='linking-3'>
                  2000
                </div>
                <div className='linking-2'>
                  B
                </div>
                <div className='linking-3'>
                  HEXAGON AM LLC
                </div>
                <div className='linking-4 ml-auto' style={{paddingRight:'4rem'}}>
                  7/13/20
                </div>
                <div className='linking-5'>
                  4:50:27 PM 
                </div>
              </div>
              <div className='linking-1a'>
                <div className='linking-3'>
                  T 1 1/4 05/15/50
                </div>
                <div className='linking-3'>
                  98.578125
                </div>
                <div className='linking-3'>
                  2000
                </div>
                <div className='linking-2'>
                  S
                </div>
                <div className='linking-3'>
                  ARQ ADVISORS LLC
                </div>
                <div className='linking-4 ml-auto' style={{paddingRight:'4rem'}}>
                  7/13/20
                </div>
                <div className='linking-5'>
                  4:50:27 PM 
                </div>
              </div>
            </li>
            <li className='grow-small group carc-shadow'>
              <div className='linking-1a'>
                <div className='linking-3'>
                  T 1 1/4 05/15/50
                </div>
                <div className='linking-3'>
                  98.578125
                </div>
                <div className='linking-3'>
                  2000
                </div>
                <div className='linking-2'>
                  B
                </div>
                <div className='linking-3'>
                  HEXAGON AM LLC
                </div>
                <div className='linking-4 ml-auto' style={{paddingRight:'4rem'}}>
                  7/13/20
                </div>
                <div className='linking-5'>
                  4:50:27 PM 
                </div>
              </div>
              <div className='linking-1a'>
                <div className='linking-3'>
                  T 1 1/4 05/15/50
                </div>
                <div className='linking-3'>
                  98.578125
                </div>
                <div className='linking-3'>
                  2000
                </div>
                <div className='linking-2'>
                  S
                </div>
                <div className='linking-3'>
                  ARQ ADVISORS LLC
                </div>
                <div className='linking-4 ml-auto' style={{paddingRight:'4rem'}}>
                  7/13/20
                </div>
                <div className='linking-5'>
                  4:50:27 PM 
                </div>
              </div>
            </li>

          </ul>
          
          </div>
      </>
    );
  }
}

export default ReconcileTransactions;
