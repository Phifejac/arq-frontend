import React from "react";
import { Line} from "react-chartjs-2";

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


class MonthlyVolume extends React.Component {
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
    const chartExample3 = {
      data: (canvas) => {
        let ctx = canvas.getContext("2d");
    
        let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#2CA8FF");
        gradientStroke.addColorStop(1, chartColor);
    
        let gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.4));
        return {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
          ],
          datasets: [
            {
              label: "Active Countries",
              backgroundColor: gradientFill,
              borderColor: "#fbc658",
              pointHoverRadius: 0,
              pointRadius: 0,
              fill: false,
              borderWidth: 3,
              barPercentage: 1.6,
              data: [80, 78, 86, 96, 83, 85, 76, 75, 88, 90],
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
                      <div className="numbers pull-left text-white" style={{fontSize:'large'}}>Monthly Transasctions</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="warning" pill>
                          +2% this month
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title" style={{color:'#FFFFFF80'}}>
                    Transactions Handled / Month
                  </h6>
                  <Line
                    data={chartExample3.data}
                    options={chartExample3.options}
                    height={380}
                    width={826}
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
                          color="warning"
                          size="sm"
                        >
                          <i className="nc-icon nc-simple-add" />
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

export default MonthlyVolume;
