import React from 'react';
import Chart from 'react-chartjs';
import _ from 'lodash';

class TimeseriesPlot extends React.Component {
  constructor(props) {
    super(props);

    this.defaultProps = {
      width: 800,
      options: {
        scaleShowGridLines: true,
        scaleGridLineColor: 'rgba(0,0,0,.05)',
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        bezierCurve: false,
        bezierCurveTension: 0.4,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        responsive: true,
        animationSteps: 10
      }
    };

  }

  render() {
    let data = this.props.data;

    let options = _.merge({}, this.defaultProps.options, this.props.options);

    if (!data) {
      return (
        <div>
          <p className='text-center'>Waiting for data...</p>
        </div>);
    } else {
      // Calculate height but make sure its not too narrow. We still need space for the axis labels.˚˚
      let height = this.props.width / 2;
      if (height < 300) {
        height = 300;
      }

      return (
        <div>
          <Chart.Line data={data} options={options}
                      width={this.props.width} height={height}/>
        </div>);
    }
  }
}

export default TimeseriesPlot;
