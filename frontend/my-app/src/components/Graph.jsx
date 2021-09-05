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
    this.datapoints = []
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
        margin: 1,
        lineThickness: 0,
        minimum: 0,
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

  componentDidUpdate(props) {
    var trendsFilters = props.trendsFilters;
    console.log(trendsFilters);
    if (trendsFilters.length) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': "Bearer" + "\xa0" + `${localStorage.getItem("acc_tok")}`
        },
        body: JSON.stringify({ zipcode: trendsFilters[0], age: trendsFilters[1], start_date: trendsFilters[2], end_date: trendsFilters[3] })
      }
      console.log(requestOptions);
      fetch('https://desolate-caverns-62377.herokuapp.com/https://life-camp-dashboard.herokuapp.com/filter/', requestOptions)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          data = data.data;
          var graphData = [];
          for (var name in data) {
            console.log(name);
            graphData.push({
              label: name,
              y: data[name]
            });
          }
          return graphData
        }).then(graphData => {
          this.setState({ dataPoints: graphData });
          console.log(this.state.dataPoints);
        }
        )
        .catch((error) => {
          console.error('Error:', error);
        });;
    }
  }

  componentDidMount() {
    var that = this;
    const requestOptions = {
      headers: {
        'Content-type': 'application/json',
        'Authorization': "Bearer" + "\xa0" + `${localStorage.getItem("acc_tok")}`
      }
    }
    fetch('https://desolate-caverns-62377.herokuapp.com/https://life-camp-dashboard.herokuapp.com/responses/ct/11', requestOptions)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data = data.data;
        var graphData = [];
        for (var name in data) {
          graphData.push({
            label: name,
            y: data[name]
          });
        }
        return graphData
      }).then(graphData => {
        that.setState({ dataPoints: graphData });
        console.log(this.state.dataPoints);
      }
      )
      .catch((error) => {
        console.error('Error:', error);
      });;
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