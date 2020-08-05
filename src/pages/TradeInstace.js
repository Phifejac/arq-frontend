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
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
} from "reactstrap";

// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";

// core components
import ReactTable from "components/ReactTable/ReactTable.js";

const dataTable = [
  ["Tiger Nixon", "System Architect", "Edinburgh", "61"],
  ["Garrett Winters", "Accountant", "Tokyo", "63"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
  ["Airi Satou", "Accountant", "Tokyo", "33"],
  ["Brielle Williamson", "Integration Specialist", "New York", "61"],
  ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
  ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
  ["Colleen Hurst", "Javascript Developer", "San Francisco", "39"],
  ["Sonya Frost", "Software Engineer", "Edinburgh", "23"],
  ["Jena Gaines", "Office Manager", "London", "30"],
  ["Quinn Flynn", "Support Lead", "Edinburgh", "22"],
  ["Charde Marshall", "Regional Director", "San Francisco", "36"],
  ["Haley Kennedy", "Senior Marketing Designer", "London", "43"],
  ["Tatyana Fitzpatrick", "Regional Director", "London", "19"],
  ["Michael Silva", "Marketing Designer", "London", "66"],
  ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "64"],
  ["Gloria Little", "Systems Administrator", "New York", "59"],
  ["Bradley Greer", "Software Engineer", "London", "41"],
  ["Dai Rios", "Personnel Lead", "Edinburgh", "35"],
  ["Jenette Caldwell", "Development Lead", "New York", "30"],
  ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "40"],
  ["Caesar Vance", "Pre-Sales Support", "New York", "21"],
  ["Doris Wilder", "Sales Assistant", "Sidney", "23"],
  ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "47"],
  ["Gavin Joyce", "Developer", "Edinburgh", "42"],
  ["Jennifer Chang", "Regional Director", "Singapore", "28"],
  ["Brenden Wagner", "Software Engineer", "San Francisco", "28"],
  ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "48"],
  ["Shou Itou", "Regional Marketing", "Tokyo", "20"],
  ["Michelle House", "Integration Specialist", "Sidney", "37"],
  ["Suki Burks", "Developer", "London", "53"],
  ["Prescott Bartlett", "Technical Author", "London", "27"],
  ["Gavin Cortez", "Team Leader", "San Francisco", "22"],
  ["Martena Mccray", "Post-Sales support", "Edinburgh", "46"],
  ["Unity Butler", "Marketing Designer", "San Francisco", "47"],
  ["Howard Hatfield", "Office Manager", "San Francisco", "51"],
  ["Hope Fuentes", "Secretary", "San Francisco", "41"],
  ["Vivian Harrell", "Financial Controller", "San Francisco", "62"],
  ["Timothy Mooney", "Office Manager", "London", "37"],
  ["Jackson Bradshaw", "Director", "New York", "65"],
  ["Olivia Liang", "Support Engineer", "Singapore", "64"],
];


class TradeInstance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          name: prop[0],
          position: prop[1],
          office: prop[2],
          age: prop[3],
          actions: (
            // we've added some custom button actions
            <div className="actions-right" style={{zIndex:-1}}>
              {/* use this button to add a like kind of action */}
              <Button
                onClick={() => {
                  let obj = this.state.data.find((o) => o.id === key);
                  alert(
                    "You've clicked LIKE button on \n{ \nName: " +
                      obj.name +
                      ", \nposition: " +
                      obj.position +
                      ", \noffice: " +
                      obj.office +
                      ", \nage: " +
                      obj.age +
                      "\n}."
                  );
                }}
                color="info"
                size="sm"
                className="btn-icon btn-link like"
              >
                <i className="fa fa-heart" />
              </Button>{" "}
              {/* use this button to add a edit kind of action */}
              <Button
                onClick={() => {
                  let obj = this.state.data.find((o) => o.id === key);
                  alert(
                    "You've clicked EDIT button on \n{ \nName: " +
                      obj.name +
                      ", \nposition: " +
                      obj.position +
                      ", \noffice: " +
                      obj.office +
                      ", \nage: " +
                      obj.age +
                      "\n}."
                  );
                }}
                color="warning"
                size="sm"
                className="btn-icon btn-link edit"
              >
                <i className="fa fa-edit" />
              </Button>{" "}
              {/* use this button to remove the data row */}
              <Button
                onClick={() => {
                  var data = this.state.data;
                  data.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i, 1);
                      console.log(data);
                      return true;
                    }
                    return false;
                  });
                  this.setState({ data: data });
                }}
                color="danger"
                size="sm"
                className="btn-icon btn-link remove"
              >
                <i className="fa fa-times" />
              </Button>{" "}
            </div>
          ),
        };
      }),
    };
  }
  basicAlert = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          style={{ display: "block", marginTop: "-100px" }}
          title="Here's a message!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
          btnSize=""
        >
          <div style={{width:'500px'}}></div>
        </ReactBSAlert>
      ),
    });
  };
  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }
  render() {
    return (
      <>
        <div className="content">
          <div style={{position:'absolute', bottom:'8rem', right:'4rem', zIndex:1}}>
          <div className='blue grow-shadow' style={{position:'sticky',borderRadius:'8rem', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', padding:'1.5rem'}} onClick={this.basicAlert}>
            <img alt="..." src={require("assets/img/docs.svg")} style={{width:'3rem', height:'3rem', marginBottom:5}}></img>
            <span style={{color:'white', fontSize:'small', fontWeight:'bold'}}>New Trade</span>
          </div>
          </div>
          <Row style={{justifyContent:'space-between', zIndex:-1}}>
            <h4 style={{marginBottom:'2rem'}}>Trade List</h4>
            <Row>
              <Col md="3">
                <p className="input-category">Start Date</p>
                <FormGroup>
                  <ReactDatetime
                    inputProps={{
                      className: "form-control",
                      placeholder: "Set date...",
                    }}
                    timeFormat={false}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <p className="input-category">End Date</p>
                <FormGroup>
                  <ReactDatetime
                    inputProps={{
                      className: "form-control",
                      placeholder: "Set date...",
                    }}
                    timeFormat={false}
                  />
                </FormGroup>
              </Col>
              <Row style={{padding:'1rem'}}>
                <Button className="btn-round" color="primary" onClick={this.warningWithConfirmAndCancelMessage}>
                  Search
                </Button>
                <Button className="btn-round" color="primary" outline>
                  Load
                </Button>
                <Button className="btn-round" color="info" outline>
                  Excel
                </Button>
              </Row>
            </Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <ReactTable
                    data={this.state.data}
                    columns={[
                      {
                        Header: "Name",
                        accessor: "name",
                      },
                      {
                        Header: "Position",
                        accessor: "position",
                      },
                      {
                        Header: "Office",
                        accessor: "office",
                      },
                      {
                        Header: "Age",
                        accessor: "age",
                      },
                      {
                        Header: "Actions",
                        accessor: "actions",
                        sortable: false,
                        filterable: false,
                      },
                    ]}
                    /*
                      You can choose between primary-pagination, info-pagination, success-pagination, warning-pagination, danger-pagination or none - which will make the pagination buttons gray
                    */
                    className="-striped -highlight primary-pagination"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default TradeInstance;