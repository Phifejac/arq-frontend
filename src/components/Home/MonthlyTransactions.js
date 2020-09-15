import React from "react";
import { Line, Bar} from "react-chartjs-2";

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


class MonthlyTransactions extends React.Component {
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
    const chartExample4 = {
      data: {
        labels: [
          'Jan',
          'Feb',
          'March',
          'April',
          'May',
        ],
        datasets: [
          {
            label: "Data",
            borderColor: "#4cbdd7",
            fill: true,
            backgroundColor: "#4cbdd7",
            hoverBorderColor: "#4cbdd7",
            borderWidth: 8,
            barPercentage: 0.4,
            data: [
              80,
              90,
              100,
              120,
              125,
            ],
          },
        ],
      },
      options: {
        tooltips: {
          tooltipFillColor: "rgba(0,0,0,0.5)",
          tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          tooltipFontSize: 14,
          tooltipFontStyle: "normal",
          tooltipFontColor: "#fff",
          tooltipTitleFontFamily:
            "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          tooltipTitleFontSize: 14,
          tooltipTitleFontStyle: "bold",
          tooltipTitleFontColor: "#fff",
          tooltipYPadding: 6,
          tooltipXPadding: 6,
          tooltipCaretSize: 8,
          tooltipCornerRadius: 6,
          tooltipXOffset: 10,
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "#9f9f9f",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 20,
              },
              gridLines: {
                zeroLineColor: "transparent",
                display: true,
                drawBorder: false,
                color: "#9f9f9f",
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                zeroLineColor: "white",
                display: false,
    
                drawBorder: false,
                color: "transparent",
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f",
                fontStyle: "bold",
              },
            },
          ],
        },
      },
    };
    return (
      <>
            <Col lg="4" sm="6">-
              <Card style={{margin:0, backgroundColor:'#27292D'}}>
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left text-white" style={{fontSize:'large'}}>Monthly Volume</div>
                    </Col>
                    <Col sm="5">
                      <div className="pull-right">
                        <Badge color="primary" pill>
                          +2% this month
                        </Badge>
                      </div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <h6 className="big-title" style={{color:'#FFFFFF80'}}>
                    Volume Handled / Month
                  </h6>
                  <Bar
                    data={chartExample4.data}
                    options={chartExample4.options}
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
                          color="primary"
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

export default MonthlyTransactions;
