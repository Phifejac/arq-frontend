import React from "react";
import ReactBSAlert from "react-bootstrap-sweetalert";
import ViewReport from "./ViewReport";
import NextReport from "components/Home/NextReport";
import Counterparties from "components/Home/Counterparties";

import {
  Row,
} from "reactstrap";

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert:null,
      range:'1day'
    };
  }

  setrange() {
    this.setState({ range: 'range' })
  }
  set1day() {
    this.setState({ range: '1day' })
  }

  editButton = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          // warning
          style={{ display: "block", marginTop: "-100px", width:'40%', backgroundColor:'#27292D'}}
          className='text-left'
          // title="Edit Transaction"
          // onConfirm={() => this.confirmEdit()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="primary"
          cancelBtnBsStyle="danger"
          confirmBtnText="Save Changes"
          cancelBtnText="Cancel"
          showCancel
          btnSize=""
        >
          <div className='text-left'>
            <ViewReport/>
          </div>
        </ReactBSAlert>
      ),
    });
  };
  hideAlert = () => {
    this.setState({
      alert: null,
    });
  };
  render() {
    return (
      <>
      {this.state.alert}
        <div className="content" style={{paddingLeft:'2.5rem', backgroundColor:'#202125', paddingTop:'6rem', paddingRight:'2rem'}}>
          <h1 className='head1'>Reports</h1>


          <Row className='d-flex align-items-center'> 
            <NextReport/>
            <Counterparties/>
          </Row>

          <div style={{marginBottom:'1rem', paddingTop:'1rem'}}>
              <span className={this.state.range === '1day' ? 'smalltab-active' : 'smalltab'} onClick={() => this.set1day()}>History</span>
              <span className={this.state.range === 'range' ? 'smalltab-active' : 'smalltab'} onClick={() => this.setrange()} style={{marginRight:'5rem'}}>Schedule</span>
          </div>

        {/* Table Headers */}

          <ul className='reports'>
            <li className='report-header'>
              <div className='header-id'>
                Report Name
              </div>
              <div className='header-date'>
                Firm Name
              </div>
              <div className='header-recipient ml-auto' style={{paddingRight:'4rem'}}>
                Date Sent
              </div>
              <div className='header-status'>
                Status  
              </div>
            </li>
          </ul>

          {/* Table */}

          <ul className='reports-table'>
            <li className='report' onClick={() => {this.editButton()}}>
              <div className='report-id'>
                  July Monthly Report
              </div>
              <div className='report-date'>
                Example Firm B
              </div>
              <div className='report-recipient ml-auto' style={{paddingRight:'4rem'}}>
                07/02/2020
              </div>
              <div className='report-status'>
                <i className="nc-icon nc-check-2" />
              </div>
              <div className='report-download'>
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </li>
            <li className='report'>
              <div className='report-id'>
                  July Monthly Report
              </div>
              <div className='report-date'>
                Example Firm A
              </div>
              <div className='report-recipient ml-auto' style={{paddingRight:'4rem'}}>
                07/01/2020
              </div>
              <div className='report-status'>
                <i className="nc-icon nc-check-2" />
              </div>
              <div className='report-download'>
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </li>
            <li className='report'>
              <div className='report-id'>
                June Monthly Report
              </div>
              <div className='report-date'>
                Example Firm B
              </div>
              <div className='report-recipient ml-auto' style={{paddingRight:'4rem'}}>
                06/02/2020
              </div>
              <div className='report-status'>
                <i className="nc-icon nc-check-2" />
              </div>
              <div className='report-download'>
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </li>
            <li className='report'>
              <div className='report-id'>
                June Monthly Report
              </div>
              <div className='report-date'>
                Example Firm A
              </div>
              <div className='report-recipient ml-auto' style={{paddingRight:'4rem'}}>
                06/01/2020
              </div>
              <div className='report-status'>
                <i className="nc-icon nc-check-2" />
              </div>
              <div className='report-download'>
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </li>
            <li className='report'>
              <div className='report-id'>
                  July Monthly Report
              </div>
              <div className='report-date'>
                Example Firm A
              </div>
              <div className='report-recipient ml-auto' style={{paddingRight:'4rem'}}>
                07/01/2020
              </div>
              <div className='report-status'>
                <i className="nc-icon nc-check-2" />
              </div>
              <div className='report-download'>
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </li>
            <li className='report'>
              <div className='report-id'>
                June Monthly Report
              </div>
              <div className='report-date'>
                Example Firm B
              </div>
              <div className='report-recipient ml-auto' style={{paddingRight:'4rem'}}>
                06/02/2020
              </div>
              <div className='report-status'>
                <i className="nc-icon nc-check-2" />
              </div>
              <div className='report-download'>
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Reports;
