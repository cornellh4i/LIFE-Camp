import CanvasJSReact from '../canvasjs.react';

var React = require('react');
var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints = []
const requestsList = ["Therapeutic Services", "Health Services", "Legal Aid", "Assistance for Youth", "COVID Support (eg. PPE Supplies)", "Transit", "Food", "Housing Support", "Access to Education", "Domestic Violence Support", "Other"];

CanvasJS.addColorSet("ColorSet",
  [
    "#F68CEC",
    "#F68C8C",
    "#FDFF9D",
    "#FFAD93",
    "orange"
  ]);

class Graph extends Component {
  render() {
    const options = {
      title: {
        text: "Type of Requests For Users",
        fontFamily: "Roboto",
        horizontalAlign: "center",
        fontSize: 24,
      },
      subtitles: [
        {
          text: "Time Period",
          fontFamily: "Roboto",
          horizontalAlign: "center",
          fontColor: "#B2B2B2",
        }
      ],
      colorSet: "ColorSet",
      axisY: {
        title: "Frequency of Response",
        gridColor: "#B2B2B2",
        gridDashType: "dot",
        margin: 10,
        lineThickness: 0,
      },
      axisX: {
        title: "Types of Requests",
        margin: 10
      },
      dataPointWidth: 40,
      // width: 500,
      // height: 400,
      data: [
        {
          type: "column",
          dataPoints: dataPoints
          // [
          //   { label: "Apple", y: 10 },
          //   { label: "Orange", y: 15 },
          //   { label: "Banana", y: 25 },
          //   { label: "Mango", y: 30 },
          //   { label: "Grape", y: 28 }
          // ]
        }
      ]
    }
    return (
      <div style={styles.graph}>
        <CanvasJSChart options={options}
        /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );

  }
  componentDidMount() {
    var chart = this.chart;
    // fetch('https://lifecamp.com/responses/ct/{question_id}')  question_id is the id of Type of Requests question
    fetch('../json_example.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          var name = requestsList[i]
          dataPoints.push({
            label: name,
            y: data[i].name
          });
        }
        chart.render();
      });
  }
}
const styles = {
  graph: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "30%",
    marginRight: "30%",
    width: "500",
    height: 400,
  }
}
export default Graph;                            