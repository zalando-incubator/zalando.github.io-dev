import React from 'react';
import SectionHeading from '../section-heading/SectionHeading.jsx';
import api from '../../utils/Api.js';
import API_CONFIG from '../../constants/ApiConfig.js';
import {Row, Col} from 'react-bootstrap';
import TimeseriesPlot from './TimeseriesPlot.jsx';
import _ from 'lodash';
import dateFormat from 'dateformat';

let organizationNames = API_CONFIG.ORGANIZATIONS.split(',');

class Graphs extends React.Component {
  constructor(props) {
    super(props);
    this.exampleData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
    this.state = {
      projectsData: false,
      projectsPlot: 'fork_counts'
    };
    this.defaultStyle = {
      fillColor: "rgba(220,220,220,0.2)",
      //strokeColor: "rgba(220,220,220,1)",
      //pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)"
    }
  }

  getColor(count, totalCount) {
    let a = count * 1.0 / totalCount;
    let r = 255 - 255 * a;
    let g = 255 * a;
    let b = 127;
    return "rgba(" + r + "," + g + "," + b + ",1)";
  }

  formatLabel(label) {
    let d =  new Date(label);
    return dateFormat(d, "d mmm, yyyy");
  }

  convertTimeseriesToPlotData(data, plotKey) {
    console.log("converting data");

    data = _.map(data, x => x.data());

    data = _.sortBy(data, x => -_.last(x[plotKey]));

    console.log("here");

    let allSnapshotDates = _.map(data, x => x.snapshot_dates);
    let uniqueSnapshotDates = _.union.apply(this, allSnapshotDates);
    let snapshotDates = _.map(uniqueSnapshotDates, this.formatLabel);

    let defaultStyle = this.defaultStyle;

    let totalCount = data.length;

    let outer = this;

    console.log("here");

    //TODO make sure this actually picks the counts in the right order
    let timeseriesData = {
      labels: snapshotDates,
      datasets: _.map(data, function (d, i) {
        return _.merge({}, {
          label: d.name,
          data: d[plotKey],
          strokeColor: outer.getColor(i, totalCount),
          pointColor: outer.getColor(i, totalCount)
        }, defaultStyle);
      })
    };

    console.log("done converting data => " + timeseriesData);

    return timeseriesData; // this.exampleData;
  }

  componentDidMount() {
    api.getStatisticsProjects().then(function (data) {
      console.log("got data!");
      this.setState({projectsData: this.convertTimeseriesToPlotData(data, this.state.projectsPlot)});
      console.log("updated state!");
    }.bind(this));
  }

  render() {
    let getColor = this.getColor;

    return (
      <div className='container section'>
        <SectionHeading text='graphs'/>
        <Row className='show-grid'>
          <Col xs={8} sm={8}>
            <p className='text-center'>
              <TimeseriesPlot data={this.state.projectsData} width={window.innerWidth * 0.6}/>
            </p>
          </Col>
          <Col xs={4} sm={4}>
            <ul>
              {this.state.projectsData ?
                this.state.projectsData.datasets.map(function (data, i) {
                  return <li className='graphs-legend' key={i}>
                    <span style={{color: data.strokeColor}}>{data.label}</span>
                  </li>;
                 }) : <li></li>}
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Graphs;
