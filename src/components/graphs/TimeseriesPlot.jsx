import React from 'react';
import Chart from 'react-chartjs';

class TimeseriesPlot extends React.Component {
  constructor(props) {
    super(props);

    this.defaultProps = {
      width: 800,
      options: {
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
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
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span>muahah<%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
        responsive: true
      }
    };

  }

  render() {
    let data = this.props.data;

    if (!data) {
      console.log("waiting for data...");
      return (
        <div>
          <p className='text-center'>Waiting for data...</p>
        </div>);
    } else {
      console.log("rendering data");
      return (
        <div>
          <Chart.Line data={data} options={this.props.options}
                      width={this.props.width} height={this.props.width / 2}/>
        </div>);
    }
  }
}

export default TimeseriesPlot;
