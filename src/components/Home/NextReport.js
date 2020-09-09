import React from "react";
import { Doughnut } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Col,
  CardHeader,
} from "reactstrap";

class NextReport extends React.Component {
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
    const chartExample5 = {
      data: {
        labels: [1, 2],
        datasets: [
          {
            label: "Emails",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: ["#4acccd", "#f4f3ef"],
            borderWidth: 0,
            barPercentage: 1.6,
            data: [60, 40],
          },
        ],
      },
      options: {
        elements: {
          center: {
            text: "6d",
            color: "#4ACCCD", // Default is #000000
            fontStyle: "Arial", // Default is Arial
            sidePadding: 60, // Defualt is 20 (as a percentage)
          },
        },
        cutoutPercentage: 90,
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
                display: false,
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "transparent",
                color: "rgba(255,255,255,0)",
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                drawBorder: false,
                color: "rgba(255,255,255,0)",
                zeroLineColor: "transparent",
              },
              ticks: {
                display: false,
              },
            },
          ],
        },
      },
    };
    
    return (
      <>
            <Col md="2">
              <Card style={{backgroundColor:'#27292D'}}>
                <CardHeader>
                  <CardTitle className='text-white'>Next Report > Example Firm</CardTitle>
                  <p className="card-category" style={{marginTop:'-.5rem'}}>Scheduled 08/22/20</p>
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={chartExample5.data}
                    options={chartExample5.options}
                    className="ct-chart ct-perfect-fourth"
                    height={300}
                    width={456}
                  />
                </CardBody>
                <CardFooter>
                  {/* <div className="legend" style={{color:'#FFFFFF80'}}>
                    <i className="fa fa-circle text-info" />
                    Open
                  </div> */}
                  <hr />
                  <div className="stats" style={{color:'#FFFFFF50'}}>
                  <i className="nc-icon nc-clock" />
                    Time Remaining
                  </div>
                </CardFooter>
              </Card>
            </Col>
      </>
    );
  }
}

export default NextReport;
