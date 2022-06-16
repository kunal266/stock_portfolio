import {useRef,useEffect, useState} from 'react';
import { VictoryStack,VictoryArea,VictoryChart, VictoryLine,VictoryLabel,VictoryLegend} from 'victory';
import Headerr from './Headerr';
import Profits from './profits';
export default function Display(props) {

	const ref = useRef(null)
const [height, setHeight] = useState(0)
const [width,setWidth] = useState();

useEffect( () => {

		console.log(height,width);
	setHeight(ref.current.clientHeight);
	setWidth(ref.current.clientWidth);
	console.log(ref.current)

},[ref]);
  const data = [
    {
    label: 'somethingA',
    values: [{x: 0, y: 2}, {x: 1.3, y: 5}, {x: 3, y: 6}, {x: 3.5, y: 6.5}, {x: 4, y: 6}, {x: 4.5, y: 6}, {x: 5, y: 7}, {x: 5.5, y: 8}]
    },
    {
    label: 'somethingB',
    values: [{x: 0, y: 3}, {x: 1.3, y: 4}, {x: 3, y: 7}, {x: 3.5, y: 8}, {x: 4, y: 7}, {x: 4.5, y: 7}, {x: 5, y: 7.8}, {x: 5.5, y: 9}]
    }
];

    return (
      <div>
        {/* <Header></Header> */}
        <Headerr></Headerr>
      <div className="grid grid-cols-12 gap-3 h-screen p-3 bg-gray-300" style={{"babackdropFilter": "blur(20px)"}}>
      <div className="col-span-2  ...  "></div>
      <div className="col-span-8 shadow-lg rounded-md bg-clip-padding bg-opacity-60	bg-white grid grid-rows-6 gap-3" >
        <div className='row-span-2'ref={ref} >
          <span className='flex justify-center'> Co-relation Between The Portfolio and Sp-500</span>
          {/* <VictoryStack */}
          <VictoryChart
          
          height={height}
          width={width}
          padding={{top:20, bottom: 30, left: 35, right: 5 }}
          title="Co-relation Between The Portfolio and Sp-500"
          style={{ parent: { border: "1px solid lightgray" } }}
          
      
      animate={{
        duration: 1000,
        onLoad: { duration: 500 }
      }}
      colorScale={["blue", "lightblue"]}
      // scale={{x: "time", y: "linear"}}
      className="rounded-md"

      // theme={VictoryTheme.material}
      >
         <VictoryLegend x={50} y={20}
  	title="OUR Portfolio and Sp-500"
    centerTitle
    orientation="horizontal"
    gutter={20}
    style={{ title: {fontSize: 12 } }}
    data={[
      { name: "s&p500", symbol: { fill: "blue", type: "line" } },
      { name: "OUR", symbol: { fill: "lightblue", type: "line" } },
    ]}
  />
  <VictoryLine
    style={{
      data: {
        // fill: "blue", fillOpacity: 0.5, 
        stroke: "blue", strokeWidth: 2
      }}}
    data={data[0].values}
    // labels={({ data, index }) => data[index].y}
    

  />
  <VictoryLine
    style={{
      data: {
        // fill: "lightblue", fillOpacity: 0.6, 
        stroke: "lightblue", strokeWidth: 2
      }}}
      data={data[1].values}
      // labels={({ data, index }) => data[index].y}

      />
    {/* </VictoryStack> */}
    </VictoryChart>

</div>
<div className='row-span-1 m-8'>
  <Profits></Profits>
</div>
      </div>
      <div className="col-span-2 "></div>
      </div>
      </div>
    )
  }