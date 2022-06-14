import {useRef,useEffect, useState} from 'react';
import ChartComponent from "./Chart";
export default function Display(props) {

	const ref = useRef(null)
const [height, setHeight] = useState(0)
const [width,setWidth] = useState();
const initialData = [
	{ time: '2018-12-22', value: 32.51 },
	{ time: '2018-12-23', value: 31.11 },
	{ time: '2018-12-24', value: 27.02 },
	{ time: '2018-12-25', value: 27.32 },
	{ time: '2018-12-26', value: 25.17 },
	{ time: '2018-12-27', value: 28.89 },
	{ time: '2018-12-28', value: 25.46 },
	{ time: '2018-12-29', value: 23.92 },
	{ time: '2018-12-30', value: 22.68 },
	{ time: '2018-12-31', value: 22.67 },
];
const finalData = [
	{ time: '2018-12-22', value: 5.51 },
	{ time: '2018-12-23', value: 45.11 },
	{ time: '2018-12-24', value: 28.02 },
	{ time: '2018-12-25', value: 29.32 },
	{ time: '2018-12-26', value: 24.17 },
	{ time: '2018-12-27', value: 20.89 },
	{ time: '2018-12-28', value: 2.46 },
	{ time: '2018-12-29', value: 34.92 },
	{ time: '2018-12-30', value: 82.68 },
	{ time: '2018-12-31', value: 62.67 },
];

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
	console.log(ref.current)

},[ref]);
    return (
      <div className="grid grid-cols-12 gap-3 bg-slate-800   h-screen p-3" style={{"babackdropFilter": "blur(20px)"}}>
      <div className="col-span-3  ... shadow-lg sm:rounded-xl sm:p-3 bg-clip-padding bg-opacity-60 border border-gray-600 text-slate-100	">01</div>
      <div className="... grid grid-rows-10 col-span-9 gap-3">
      <div className="row-span-4 shadow-lg sm:rounded-xl bg-clip-padding bg-opacity-60 text-slate-100	" ref = {ref}>
		  {/* {height} */}
      <ChartComponent {...props} initData={initialData} finalData={finalData} height={height} width={width}> </ChartComponent>
      </div>
      <div className="row-span-5 shadow-lg sm:rounded-xl sm:p-3 bg-clip-padding bg-opacity-60 border border-gray-600 text-slate-100	">03</div></div>
    </div>
    )
  }