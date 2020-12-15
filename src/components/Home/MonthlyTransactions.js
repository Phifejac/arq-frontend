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
    const month_labels = []
    const month_transactions = []
    if (this.props.monthlyData) {
      for (const month of this.props.monthlyData) {
        month_labels.push(month[2])
        month_transactions.push(parseInt(month[4]))
      }
    }

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
    const labels = []
    for (var i = 0; i < month_labels.length; i++) {
      if (month_labels[i].substring(5,7) === '01') {
        labels.push('Jan')
      }
      if (month_labels[i].substring(5,7) === '02') {
        labels.push('Feb')
      }
      if (month_labels[i].substring(5,7) === '03') {
        labels.push('Mar')
      }
      if (month_labels[i].substring(5,7) === '04') {
        labels.push('Apr')
      }
      if (month_labels[i].substring(5,7) === '05') {
        labels.push('May')
      }
      if (month_labels[i].substring(5,7) === '06') {
        labels.push('Jun')
      }
      if (month_labels[i].substring(5,7) === '07') {
        labels.push('July')
      }
      if (month_labels[i].substring(5,7) === '08') {
        labels.push('Aug')
      }
      if (month_labels[i].substring(5,7) === '09') {
        labels.push('Sep')
      }
      if (month_labels[i].substring(5,7) === '10') {
        labels.push('Oct')
      }
      if (month_labels[i].substring(5,7) === '11') {
        labels.push('Nov')
      }
      if (month_labels[i].substring(5,7) === '12') {
        labels.push('Dec')
      }
    }
    const chartExample4 = {
      data: {
        labels: labels,
        datasets: [
          {
            label: "Monthly Volume",
            borderColor: "#4cbdd7",
            fill: true,
            backgroundColor: "#4cbdd7",
            hoverBorderColor: "#4cbdd7",
            borderWidth: 8,
            barPercentage: 0.4,
            data: month_transactions,
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
            <Col lg="4" sm="6">
              <Card style={{margin:0, backgroundColor:'#27292D'}}>
                <CardHeader>
                  <Row>
                    <Col sm="7">
                      <div className="numbers pull-left text-white" style={{fontSize:'large'}}>Monthly Volume</div>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Bar
                    data={chartExample4.data}
                    options={chartExample4.options}
                    height={380}
                    width={826}
                  />
                </CardBody>
              </Card>
            </Col>
      </>
    );
  }
}

export default MonthlyTransactions;
