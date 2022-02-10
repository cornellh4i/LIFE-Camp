import CanvasJSReact from '../canvasjs.react';
import TrendFilters from './TrendFilters'

var React = require('react');
var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const zipCodeList = ["All", "11411", "11412", "11413", "11423", "11429/11428", "11434", "11435/11436"]
const ageList = ["0 - 10", "11 - 20", "21 - 30", "31 - 40", "41 - 50", "51 - 60", "61 - 70", "71 - 80", "81 - 90", "91 - 100"]


CanvasJS.addColorSet("ColorSet",
  [
    "#F68CEC",
    "#F68C8C",
    "#FDFF9D",
    "#FFAD93",
    "orange"
  ]);

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}


class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPoints: [],
      updated: false,
      trendsFilters: [],
    }
    // this.datapoints = []
  }
  onSaveTrendFilters = (filters) => {
    this.setState({updated: false, trendsFilters: filters})
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
      <div style={styles.trends}>
        <TrendFilters zipcodeList={zipCodeList} ageList={ageList} onSaveTrendFilters={this.onSaveTrendFilters} />

        <div style={styles.graph}>
          <CanvasJSChart options={options}
            onRef={ref => this.chart = ref}
          />
        </div>
      </div>
    );

  }

  componentDidUpdate() {
    console.log("filters: ", this.state.trendsFilters)
    if (this.state.trendsFilters.length) {
      console.log(localStorage.getItem("acc_tok"))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': "Bearer" + "\xa0" + `${localStorage.getItem("acc_tok")}`
        },
        body: JSON.stringify({ zipcode: this.state.trendsFilters[0], age: this.state.trendsFilters[1], start_date: this.state.trendsFilters[2], end_date: this.state.trendsFilters[3] })
      }
      fetch('https://desolate-caverns-62377.herokuapp.com/https://life-camp-dashboard.herokuapp.com/filter/', requestOptions)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data)
          data = data.data;
          let graphData = [];
          for (var name in data) {
            graphData.push({
              label: name,
              y: data[name]
            });
          }
          return graphData
        }).then(graphData => {
          if (arrayEquals(graphData, this.state.dataPoints) === false && this.state.updated === false) {
            // console.log("graph data: ", graphData)
            // console.log("state.datapoints: ", this.state.dataPoints)
            this.setState({ updated:true, dataPoints: graphData });
          }
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