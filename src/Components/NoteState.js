import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const value = "$184M";
  const portreturns = "84%";
  const snpreturns = "29%";
  const gain = "$84M";
  const initial = "$100M";
  const surplus = "55%";
  const [comp, updatecomp] = useState([]);
  const [capital, change] = useState(1000000);
  const [btnpop, changepop] = useState(true);
  const weights = [0.2, 0.1, 0.4, 0.3];
  const color = ["#0088FE", "#00C49F", "#FFBB28", "#0034ED"];
  const state = {
    series: [
      {
        name: "STOCK ABC",
        data: [
          [1, 34],
          [3, 54],
          [5, 23],
          [15, 43],
        ],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 100,
        zoom: {
          enabled: false,
        },
      },
      stroke: {
        curve: "straight",
      },
      xaxis: {
        type: "numeric",
      },
    },
  };
  var comp1 = [
    {
      name: "AAPL",
      color: "#0088FE",
      allocation: capital * weights[0],
      value: 20,
    },
    {
      name: "MSFT",
      color: "#00C49F",
      allocation: capital * weights[1],
      value: 20,
    },
  ];
  var comp2 = [
    {
      name: "JPMC",
      color: "#0088FE",
      allocation: capital * weights[0],
      value: 20,
    },
    {
      name: "MS",
      color: "#00C49F",
      allocation: capital * weights[1],
      value: 20,
    },
  ];
  const companies = [
    {
      name: "Tech",
      color: "#0088FE",
      allocation: capital * weights[0],
      value: 20,
    },
    {
      name: "Finance",
      color: "#00C49F",
      allocation: capital * weights[1],
      value: 20,
    },
    {
      name: "Industrial",
      color: "#FFBB28",
      allocation: capital * weights[2],
      value: 20,
    },
    {
      name: "Health",
      color: "#0088FD",
      allocation: capital * weights[3],
      value: 20,
    },
  ];
  const options = {
    series: [capital * 0.2, capital * 0.1, capital * 0.4, capital * 0.3],
    labels: ["Tech", "Finance", "Industrial", "Health"],
  };
  const [clicked, update] = useState(false);
  const block = { display: "block", alignItems: "center", textAlign: "center" };
  const cardtrack = { display: "block" };
  const none = { display: "none" };
  function displaypie() {
    update(true);
  }
  function track(event) {
    change(event.target.value);
  }
  function popup(id) {
    if (id === 0) {
      updatecomp(comp1);
    } else if (id === 1) {
      updatecomp(comp2);
    }
    changepop((prevVal) => {
      return !prevVal;
    });
  }
  function popbtn() {
    changepop((prevVal) => {
      return !prevVal;
    });
  }

    return (
        <NoteContext.Provider value = {{value,portreturns,snpreturns,gain,initial,surplus,comp,capital,btnpop,weights,color,state,comp1,comp2,companies,options,clicked,block,cardtrack,none,updatecomp,change,changepop,update,displaypie,track,popup,popbtn}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState