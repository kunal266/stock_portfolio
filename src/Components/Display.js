import {useRef,useEffect, useState,useContext} from 'react';
import { VictoryStack,VictoryArea,VictoryChart, VictoryLine,VictoryLabel,VictoryLegend} from 'victory';
import Headerr from './Headerr';
import Profits from './profits';
import PassiveTrackingCard from './PassiveTrackingCard';
import NoteContext from './NoteContext';
export default function Display(props) {
const a = useContext(NoteContext)
	const ref = useRef(null)
const [height, setHeight] = useState(0)
const [width,setWidth] = useState();
const [portdata,setPortData]= useState([]);
const [Spdata,setspData]= useState([]);



async function dataGen(){
  for (let i = 0; i < 50; i++) {
    setPortData(portdata => [...portdata,{"x":i,"y":Math.floor(Math.random() * 100)+10}])
    setspData(Spdata => [...Spdata,{"x":i,"y":Math.floor(Math.random() * 100)}])
    // function randomDate(start, end) {
      //   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      // }
      
      // const d = randomDate(new Date(2012, 0, 1), new Date());
      // console.log(d);
    }     
     
  }
  const [OneYear,setOneYear]= useState([]);
const [Hour,setHour]= useState([]);
const [FiveYear,setFiveYear]= useState([]);
const [Data,setData]= useState([]);
  // console.log(Spdata,portdata);
useEffect( () => {
  dataGen()
		// console.log(height,width);
	setHeight(ref.current.clientHeight);
	setWidth(ref.current.clientWidth);
  
	console.log(ref.current)

},[ref]);
    return (
      <div>
        {/* <Header></Header> */}
        <Headerr></Headerr>
      <div className="grid grid-cols-12 gap-3 p-3 bg-gray-300" style={{"babackdropFilter": "blur(20px)"}}>
      <div className="col-span-2  ...  "></div>
      <div className="col-span-8 shadow-lg rounded-md bg-clip-padding bg-white grid grid-rows-6 gap-3" >
        <div className='row-span-2'ref={ref} >
          <span className='flex justify-center'> Co-relation Between The Portfolio and Sp-500</span>
          {/* <VictoryStack */}
          <VictoryChart
          height={height}
          width={width}
          padding={{top:40, bottom: 30, left: 35, right: 5 }}
          title="Co-relation Between The Portfolio and Sp-500"
          // style={{ parent: { border: "1px solid lightgray" } }}
          
      
          animate={{
            duration: 1000,
        onLoad: { duration: 500 }
      }}
      colorScale={["blue", "lightblue"]}
      // scale={{x: "time", y: "linear"}}
      className="rounded-md"
      
      // theme={VictoryTheme.material}
      >
         <VictoryLegend x={50} y={2}
  	title="OUR Portfolio and Sp-500"
    centerTitle
    orientation="horizontal"
    gutter={20}
    style={{ title: {fontSize: 8 } }}
    data={[
      { name: "s&p500", symbol: { fill: "blue", type: "line" } },
      { name: "OUR", symbol: { fill: "lightblue", type: "line" } },
    ]}
    />
  {/* <VictoryLine
      interpolation="natural"
    style={{
      data: {
        // fill: "blue", fillOpacity: 0.5, 
        stroke: "blue", strokeWidth: 2
      }}}
      data={portdata}
    // labels={({ data, index }) => data[index].y}
    

  /> */}
  <VictoryLine
      interpolation="natural"

    style={{
      data: {
        // fill: "lightblue", fillOpacity: 0.6, 
        stroke: "lightblue", strokeWidth: 2
      }}}
      data={Data}
      // labels={({ data, index }) => data[index].y}

      />
    {/* </VictoryStack> */}
    </VictoryChart>

    </div>
<div className='row-span-1 '>
<div className=' flex justify-start ml-6'>
<button className='btn btn-ghost' onClick={()=>{setHour(portdata.slice(-Math.floor(portdata.length/10)));setData(Hour);console.log(Data)}}>24 Hour</button>
<button className='btn btn-ghost' onClick={()=>{setOneYear(portdata.slice(-Math.floor(portdata.length/5)));setData(OneYear);console.log(Data)}}>1 Year</button>
<button className='btn btn-ghost' onClick={()=>setData(portdata)}>5 year</button>
</div>
<div className='shadow-lg  rounded-md border mx-6	bg-opacity-40 mt-2'>
  <Profits></Profits></div>
  </div>
  <div className='p-2  row-span-3'>
  {a.btnpop
          ? a.companies.map((item, index) => {
              return (
                <PassiveTrackingCard
                  id={index}
                  name={item.name}
                  clr={item.color}
                  allocation={item.allocation}
                  value={item.value}
                  onCheck={a.popup}
                />
              );
            })
          : a.comp.map((item) => {
              return (
                <PassiveTrackingCard
                  name={item.name}
                  clr={item.color}
                  allocation={item.allocation}
                  value={item.value}
                />
              );
            })}
        {!a.btnpop ? (
          <div className="flex justify-center">
          <button  onClick={a.popbtn}>
            Close
          </button></div>
        ) : null}
  </div>
      </div>
      <div className="col-span-2 "></div>
      </div>
      </div>
    )
  }