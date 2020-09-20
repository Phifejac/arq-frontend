import React, { Component } from "react";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";



class SearchResults extends Component {
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
          <div style={{ marginLeft:'0rem', paddingBottom:'3rem', marginRight:'-2rem'}}>
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

export default SearchResults;
