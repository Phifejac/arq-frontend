import React from "react";
import ReactBSAlert from "react-bootstrap-sweetalert";
import ViewReport from "./ViewReport";

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert:null
    };
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
        <div className="content" style={{paddingLeft:'2.5rem', backgroundColor:'#202125', paddingTop:'1rem'}}>
        <h3 style={{paddingTop:'5rem', fontFamily:'Poppins', fontWeight:'500', paddingBottom:'2rem', color:'white', margin:0}}>Reports</h3>
          
          {/* Tabs */}
          
          <ul className='report-list'>
            <li  className='report-listitemactive'>
              <h4>History</h4>
            </li>
            <li  className='report-listitem'>
              <h4>Schedule</h4>
            </li>
          </ul>

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
                May Monthly Report
              </div>
              <div className='report-date'>
                Example Firm B
              </div>
              <div className='report-recipient ml-auto' style={{paddingRight:'4rem'}}>
                05/02/2020
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
                May Monthly Report
              </div>
              <div className='report-date'>
                Example Firm A
              </div>
              <div className='report-recipient ml-auto' style={{paddingRight:'4rem'}}>
                05/01/2020
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
                April Monthly Report
              </div>
              <div className='report-date'>
                Example Firm B
              </div>
              <div className='report-recipient ml-auto' style={{paddingRight:'4rem'}}>
                04/02/2020
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
                April Monthly Report
              </div>
              <div className='report-date'>
                Example Firm A
              </div>
              <div className='report-recipient ml-auto' style={{paddingRight:'4rem'}}>
                04/01/2020
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
                March Monthly Report
              </div>
              <div className='report-date'>
                Example Firm B
              </div>
              <div className='report-recipient ml-auto' style={{paddingRight:'4rem'}}>
                03/02/2020
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
                March Monthly Report
              </div>
              <div className='report-date'>
                Example Firm A
              </div>
              <div className='report-recipient ml-auto' style={{paddingRight:'4rem'}}>
                03/01/2020
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
