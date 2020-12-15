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
import AuditHistoryTable from './AuditHistoryTable'
import ReactBSAlert from "react-bootstrap-sweetalert";
import EditClient from "./EditClient";
import {getLogs} from "../../api/http"

const dataTable = [];

class AuditHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab:'account',
      alert:null,
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          name: prop[0],
          date: prop[1],
          time: prop[2],
          action: prop[3],
        };
      }),
    };
  }
  
  async componentDidMount() {
    const logs = await getLogs()
    this.setState({
      data: logs.map((prop, key) => {
        return {
          id: prop.id,
          name: prop.username,
          date: prop.date,
          time: prop.time,
          action: prop.action,
        };
      }),
    })
  }

  render() {
    return (
      <>
      {this.state.alert}
        <Col md='12'style={{paddingLeft:0}}>
            <h4 style={{paddingTop:'1rem', fontFamily:'Poppins', fontWeight:'500', color:'white', margin:0}}>Audit History</h4>
            <AuditHistoryTable
              data={this.state.data}

              columns={[
                {
                  Header: "Name",
                  accessor: "name",
                },
                {
                  Header: "Date",
                  accessor: "date",
                },
                {
                  Header: "Time",
                  accessor: "time",
                },
                {
                  Header: "Action",
                  accessor: 'action',
                },
              ]}

              className="-striped -highlight primary-pagination"
            />
        </Col>
      </>
    );
  }
}

export default AuditHistory;
