import React from "react";
import Program from "./Program";
const ProgramList = () => {
  let programList = [
    {
      name: "Ind vs Aus",
      desc: "best series this year",
      category: "Sports",
      time: "3PM",
    },
    {
      name: "Man Vs Wild",
      desc: "with bear grylls",
      category: "Adventure",
      time: "8PM",
    },
  ];

  return (
    <div className="row">
      <Program
        name={programList[0].name}
        category={programList[0].category}
        time={programList[0].time}
      >
        {programList[0].desc}
      </Program>

      <Program
        name={programList[1].name}
        category={programList[1].category}
        time={programList[1].time}
      >
        {programList[1].desc}
      </Program>
    </div>
  );
};

export default ProgramList;
