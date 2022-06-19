import Display from "./Components/Display";
// import Graph from "./Components/Chart";
// import LineChart from "./Components/LineChart";
// import PieChart from "./Components/PieChart";
import NoteState from "./Components/NoteState";
export default function App() {
  
  // let data = []
  // const randomArray = (total = 100) => {
  //   for (let element = 0; element < total; element++) {
  //     const y = Math.floor(Math.random() * 50) + 50
  //     const obj = {
  //       x: element,
  //       y,
  //     }
  //     data.push(obj)
  //   }
  //   return data
  // }
  return (
    <NoteState>
    <Display></Display></NoteState>
  )
}