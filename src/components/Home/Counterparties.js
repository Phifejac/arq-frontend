import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  Col,
  Table,
  CardHeader,
  UncontrolledTooltip
} from "reactstrap";

class Counterparties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagsinput: ["All", "Firm A", "Firm B", "Firm C"],
    };
  }
  handleTagsinput = (tagsinput) => {
    this.setState({ tagsinput });
  };
  render() {
    return (
      <>
            <Col md="8">
              <Card style={{backgroundColor:'#27292D', paddingBottom:'.8rem'}}>
              <CardHeader>
                  <CardTitle tag="h4" style={{color:'#FFFFFF'}}>Counterparties</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center">#</th>
                        <th>Firm</th>
                        <th>Trades</th>
                        <th className="text-center">Since</th>
                        <th className="text-right">Other</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{color:'#FFFFFF'}}>
                        <td className="text-center">1</td>
                        <td>Example Firm A</td>
                        <td>25</td>
                        <td className="text-center">2013</td>
                        <td className="text-right">-</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon"
                            color="primary"
                            id="tooltip366246651"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-edit" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip366246651"
                          >
                            Edit
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon"
                            color="danger"
                            id="tooltip476609793"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-times" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip476609793"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr style={{color:'#FFFFFF'}}>
                        <td className="text-center">2</td>
                        <td>Example Firm B</td>
                        <td>23</td>
                        <td className="text-center">2012</td>
                        <td className="text-right">-</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon"
                            color="primary"
                            id="tooltip495755671"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-edit" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip495755671"
                          >
                            Edit
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon"
                            color="danger"
                            id="tooltip94395840"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-times" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip94395840"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr style={{color:'#FFFFFF'}}>
                        <td className="text-center">3</td>
                        <td>Example Firm C</td>
                        <td>20</td>
                        <td className="text-center">2010</td>
                        <td className="text-right">-</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon"
                            color="primary"
                            id="tooltip793231916"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-edit" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip793231916"
                          >
                            Edit
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon"
                            color="danger"
                            id="tooltip884055770"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-times" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip884055770"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
      </>
    );
  }
}

export default Counterparties;
