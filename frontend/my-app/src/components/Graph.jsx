import CanvasJSReact from '../canvasjs.react';

var React = require('react');
var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

CanvasJS.addColorSet("ColorSet",
  [
    "#F68CEC",
    "#F68C8C",
    "#FDFF9D",
    "#FFAD93",
    "orange"
  ]);

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPoints: [],
    }
  }

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
      data: [
        {
          type: "column",
          dataPoints:
            this.state.dataPoints
        }
      ]
    }
    return (

      <div style={styles.graph}>

        <CanvasJSChart options={options}
          onRef={ref => this.chart = ref}
        />
      </div>
    );

  }
  componentDidMount() {
    // var chart = this.chart;
    var graphData = [];
    fetch('https://desolate-caverns-62377.herokuapp.com/https://life-camp-dashboard.herokuapp.com/responses/ct/10', { mode: 'cors' })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data = data.data;
        for (var name in data) {
          console.log(name);
          graphData.push({
            label: name,
            y: data[name]
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });;
    this.setState({ dataPoints: graphData });
    console.log(this.state.dataPoints);
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