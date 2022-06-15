import {useRef,useEffect, useState} from 'react';
import * as V from 'victory';
import { VictoryStack,VictoryArea,VictoryTheme } from 'victory';
import Headerr from './Headerr';
export default function Display(props) {

	const ref = useRef(null)
const [height, setHeight] = useState(0)
const [width,setWidth] = useState();
// const initialData = [
// 	{ time: '2018-12-22', value: 32.51 },
// 	{ time: '2018-12-23', value: 31.11 },
// 	{ time: '2018-12-24', value: 27.02 },
// 	{ time: '2018-12-25', value: 27.32 },
// 	{ time: '2018-12-26', value: 25.17 },
// 	{ time: '2018-12-27', value: 28.89 },
// 	{ time: '2018-12-28', value: 25.46 },
// 	{ time: '2018-12-29', value: 23.92 },
// 	{ time: '2018-12-30', value: 22.68 },
// 	{ time: '2018-12-31', value: 22.67 },
// ];
// const finalData = [
// 	{ time: '2018-12-22', value: 5.51 },
// 	{ time: '2018-12-23', value: 45.11 },
// 	{ time: '2018-12-24', value: 28.02 },
// 	{ time: '2018-12-25', value: 29.32 },
// 	{ time: '2018-12-26', value: 24.17 },
// 	{ time: '2018-12-27', value: 20.89 },
// 	{ time: '2018-12-28', value: 2.46 },
// 	{ time: '2018-12-29', value: 34.92 },
// 	{ time: '2018-12-30', value: 82.68 },
// 	{ time: '2018-12-31', value: 62.67 },
// ];

useEffect( () => {

	// The 'current' property contains info of the reference:
	// align, title, ... , width, height, etc.
	// console.log(stageCanvasRef)
	// if(stageCanvasRef.current){

		// setHeight(ref.current.offsetHeight);
		// setWidth(ref.current.offsetWidth);
		console.log(height,width);
	// }
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
      <VictoryStack
      height={height}
      width={width}
      animate={{
        duration: 1000,
        onLoad: { duration: 500 }
      }}
      colorScale={["blue", "lightblue"]}
      padding={{top:0, bottom: 0, left: 0, right: 0 }}
      className="rounded-md"
      // theme={VictoryTheme.material}
      >
  <VictoryArea
    data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}
  />
  <VictoryArea
    data={[{x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}]}
  />
</VictoryStack>
</div>
<div className='row-span-4'>hi</div>
      </div>
      <div className="col-span-2 "></div>
      </div>
      </div>
    )
  }