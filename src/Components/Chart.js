import { createChart, ColorType,GridLineOptions } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

export const ChartComponent = props => {
	const {
		initData,
		finalData,
		height,
		width
		// colors: {
		// 	backgroundColor = 'black',
		// 	// lineColor = ,
		// 	textColor = 'white',
		// 	areaTopColor = ,
		// 	areaBottomColor = ,
		// },
	} = props;
	const chartContainerRef = useRef();

	useEffect(
		() => {
			console.log(chartContainerRef.current.offsetWidth  ,chartContainerRef.current.offsetHeight)
			const handleResize = () => {
				chart.applyOptions({ width: width , height: 420 });
			};

			const chart = createChart(chartContainerRef.current, {
				layout: {
					background: { type: ColorType.Gradient, color: 'white' },
				},
				width: width,
				height:420 ,
				grid: {
					vertLines: {
					  visible:false,
					},
					horzLines:{
						visible:false
					}
				},
				
			});
			chart.timeScale().fitContent();

			const newSeries = 
			chart.addAreaSeries({
			  topColor: "rgba(38,198,218, 0.56)",
			  bottomColor: "rgba(38,198,218, 0.04)",
			  lineColor: "rgba(38,198,218, 1)",
			  lineWidth: 2
			});
			newSeries.setData(initData);
			const rnewSeries = chart.addLineSeries({lineColor:'rgba(255,198,218, 1)',lineWidth: 2, topColor: '#2962FF',bottomColor: 'rgba(41, 98, 255, 0.28)'});

			rnewSeries.setData(finalData);

			window.addEventListener('resize', handleResize);
			console.log(chartContainerRef.current)
			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};

		},
		// [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
		[chartContainerRef]
	);

	return (
		<div
		className="sm:rounded-xl min-h-full min-w-full"
			ref={chartContainerRef}
		/>
	);
};
export default ChartComponent;