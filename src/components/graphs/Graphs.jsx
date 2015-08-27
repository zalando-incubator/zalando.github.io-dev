import React from 'react';
import SectionHeading from '../section-heading/SectionHeading.jsx';
import api from '../../utils/Api.js';
//import API_CONFIG from '../../constants/ApiConfig.js';
import {Row, Col} from 'react-bootstrap';
import TimeseriesPlot from './TimeseriesPlot.jsx';
import _ from 'lodash';
import dateFormat from 'dateformat';
import ButtonGroup from './ButtonGroup.jsx';
import LANGUAGE_COLORS from '../../constants/LanguageColors';

//let organizationNames = API_CONFIG.ORGANIZATIONS.split(',');

class Graphs extends React.Component {
  constructor(props) {
    super(props);
    this.exampleData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
    this.state = {
      projectsData: false,
      projectsPlot: 'fork_counts',
      languagesData: false
    };
    this.defaultStyle = {
      fillColor: 'rgba(220,220,220,0.2)',
      //strokeColor: 'rgba(220,220,220,1)',
      //pointColor: 'rgba(220,220,220,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)'
    };

    this.colors = ['#FF8C00', '#FFD700', '#9ACD32', '#32CD32', '#00BFFF', '#0000CD', '#8B008B', '#FF00FF', '#FF69B4', '#DC143C'];

  }

  getColor(count, item) {
    let numColors = this.colors.length;
    return this.colors[count % numColors];
  }

  getLanguageColor(count, item) {
    return LANGUAGE_COLORS[item];
  }

  formatLabel(label) {
    let d = new Date(label);
    return dateFormat(d, 'd mmm, yyyy');
  }

  convertTimeseriesToPlotData(data, plotKey, colorFunction) {
    if (!data) {
      return false;
    }

    data = _.map(data, x => x.data());

    data = _.sortBy(data, x => -_.last(x[plotKey]));

    let allSnapshotDates = _.map(data, x => x.snapshot_dates);
    let uniqueSnapshotDates = _.union.apply(this, allSnapshotDates);
    let snapshotDates = _.map(uniqueSnapshotDates, this.formatLabel);

    let defaultStyle = this.defaultStyle;

    //TODO make sure this actually picks the counts in the right order
    let timeseriesData = {
      labels: snapshotDates,
      datasets: _.map(data, function (d, i) {
        return _.merge({}, {
          label: d.name,
          data: d[plotKey],
          strokeColor: colorFunction(i, d.name),
          pointColor: colorFunction(i, d.name)
        }, defaultStyle);
      })
    };

    return timeseriesData; // this.exampleData;
  }

  componentDidMount() {
    api.getStatisticsProjects().then(function (data) {
      this.setState({projectsData: data});
    }.bind(this));

    api.getStatisticsLanguages().then(function (data) {
      this.setState({languagesData: data});
    }.bind(this));
  }

  render() {
    let projectsPlotData = this.convertTimeseriesToPlotData(this.state.projectsData, this.state.projectsPlot, this.getColor.bind(this));

    let languagesPlotData = this.convertTimeseriesToPlotData(this.state.languagesData, 'project_counts', this.getLanguageColor);

    return (
      <div className='container section'>
        <SectionHeading text='projects'/>
        <Row className='show-grid'>
          <Col sm={12}>
            <ButtonGroup fields={[['commit_counts', 'Commits'],
                                  ['fork_counts', 'Forks'],
                                  ['contributors_counts', 'Contributors'],
                                  ['scores', 'Scores']]} stateKey={'projectsPlot'} obj={this} />
          </Col>
        </Row>
        <Row className='show-grid'>
          <Col sm={8}>
            <p className='text-center'>
              <TimeseriesPlot data={projectsPlotData} width={window.innerWidth * 0.6}/>
            </p>
          </Col>
          <Col sm={4}>
            <ul>
              {projectsPlotData ?
                projectsPlotData.datasets.map(function (data, i) {
                  return <li className='graphs-legend' key={i}>
                    <span style={{color: data.strokeColor}}>{data.label}</span>
                  </li>;
                 }) : <li></li>}
            </ul>
          </Col>
        </Row>
        <SectionHeading text='languages'/>
        <Row className='show-grid'>
          <Col sm={8}>
            <TimeseriesPlot data={languagesPlotData} width={window.innerWidth * 0.6}/>
          </Col>
          <Col sm={4}>
            <ul>
              {languagesPlotData ?
                languagesPlotData.datasets.map(function (data, i) {
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
