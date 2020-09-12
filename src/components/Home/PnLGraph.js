import React from "react";
import { Line } from "react-chartjs-2";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Row,
  Col,
  CardHeader,
} from "reactstrap";


class PnLGraph extends React.Component {
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
        // default color for the charts
        let chartColor = "#FFFFFF";
        // ##############################
        // // // Function that converts a hex color number to a RGB color number
        // #############################
        const hexToRGB = (hex, alpha) => {
          var r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);
    
          if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
          } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
          }
        };
        const chartExample2 = {
          data: (canvas) => {
            let ctx = canvas.getContext("2d");
        
            let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            gradientStroke.addColorStop(0, "#18ce0f");
            gradientStroke.addColorStop(1, chartColor);
        
            let gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
            gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
            gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
            return {
              labels: ["08/01", "08/02", "08/03", "08/04", "08/05", "08/06", "08/07", "08/08"],
              datasets: [
                {
                  label: "Email Stats",
                  borderColor: "#ef8156",
                  pointHoverRadius: 0,
                  pointRadius: 0,
                  fill: false,
                  backgroundColor: gradientFill,
                  borderWidth: 3,
                  barPercentage: 1.6,
                  data: [40, 500, 650, 700, 1200, 1250, 1300, 1900],
                },
              ],
            };
          },
          options: {
            legend: {
              display: false,
            },
            tooltips: {
              enabled: false,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    fontColor: "#9f9f9f",
                    beginAtZero: false,
                    maxTicksLimit: 5,
                  },
                  gridLines: {
                    drawBorder: false,
                    zeroLineColor: "transparent",
                    color: "rgba(255,255,255,0.05)",
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(255,255,255,0.1)",
                    zeroLineColor: "transparent",
                    display: false,
                  },
                  ticks: {
                    padding: 20,
                    fontColor: "#9f9f9f",
                  },
                },
              ],
            },
          },
        };
    return (
      <>
            <Col lg="4" sm="6">
              <Card style={{margin:0, backgroundColor:'#27292D'}}>
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left text-white" style={{fontSize:'large'}}>Daily P&L</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="danger" pill>
                          +14% today
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title" style={{color:'#FFFFFF80'}}>
                    P&L
                  </h6>
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                    height={380}
                    width={828}
                  />
                </CardBody>
                {/* <CardFooter>
                  <hr />
                  <Row>
                    <Col sm="7">
                      <div className="footer-title" style={{color:'#FFFFFF80'}}>All Time</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Button
                          className="btn-round btn-icon"
                          color="danger"
                          size="sm"
                        >
                          <i className="nc-icon nc-button-play" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </CardFooter> */}
              </Card>
          </Col>
      </>
    );
  }
}

export default PnLGraph;
