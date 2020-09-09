import React from "react";
// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Label,
  Progress,
  Input,
  Button,
  ButtonGroup,
  Collapse
} from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";

// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

class ViewReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      fund: null,
      client: null,
      book: null,
      counterparty: null,
      cusip: null,
      singleSelect: null,
      multipleSelect: null,
      tagsinput: ["Amsterdam", "Washington", "Sydney", "Beijing"],
    };
  }

  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }
  handleTagsinput = (tagsinput) => {
    this.setState({ tagsinput });
  };

  warningWithConfirmAndCancelMessage = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          warning
          style={{ display: "block", marginTop: "-100px" }}
          title="Are you sure?"
          onConfirm={() => this.successDelete()}
          onCancel={() => this.cancelDetele()}
          confirmBtnBsStyle="info"
          cancelBtnBsStyle="danger"
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
          btnSize=""
        >
          You will not be able to recover this imaginary file!
        </ReactBSAlert>
      ),
    });
  };
  successDelete = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Deleted!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          btnSize=""
        >
          Your imaginary file has been deleted.
        </ReactBSAlert>
      ),
    });
  };
  cancelDetele = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          danger
          style={{ display: "block", marginTop: "-100px" }}
          title="Cancelled"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          btnSize=""
        >
          Your imaginary file is safe :)
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
    const options_cusip = [
      { value: '1', label: '912810SN9' },
      { value: '2', label: 'AR4890242' },
      { value: '3', label: '912810SN9' }
    ]
    const options_broker = [
      { value: '1', label: 'ARQ ADVISORS LLC' },
      { value: '2', label: 'HEXAGON AM LLC' },
      { value: '3', label: 'BGC PARTNERS' }
    ]
    const options_customer = [
      { value: '1', label: 'ARQ ADVISORS LLC' },
      { value: '2', label: 'HEXAGON AM LLC' },
      { value: '3', label: 'BGC PARTNERS' }
    ]
    const options_status = [
      { value: '1', label: 'Accepted' },
      { value: '2', label: 'Pending' },
      { value: '3', label: 'Cancelled' }
    ]
    return (
      <>
      {this.state.alert}
          <div style={{alignItems:'center', display:'flex', flexDirection:'column'}}>
          <h2>Report Name</h2>
          <p>Report Info, download, edit, send, etc.</p>
          </div>
      </>
    );
  }
}

export default ViewReport;
