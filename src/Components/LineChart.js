import React from 'react';
import d3Utils from './utils';
import d3Config from './config';

export default class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.callSetWidth = this.callSetWidth.bind(this);
  }

  componentDidMount() {
    const { timeSeriesData } = this.props;
    d3Utils.initializeChart(timeSeriesData, 'monthToDate');
    window.addEventListener('resize', this.callSetWidth);
  }

  componentDidUpdate(prevProps) {
    const { timeSeriesData, timeFrame } = this.props;
    if (prevProps.timeSeriesData !== timeSeriesData) {
      d3Utils.handleNewData(timeSeriesData, timeFrame);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.callSetWidth);
  }
  
  callSetWidth() {
    const { timeSeriesData } = this.props;
    d3Utils.setWidth(timeSeriesData);
  }

  render() {
    return (
      <svg className="line-chart" width="100%" height={d3Config.svgHeight} />
    );
  }
}