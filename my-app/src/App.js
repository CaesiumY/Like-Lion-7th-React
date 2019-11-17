import React from "react";

import "./App.css";

const WorldTime = props => {
  return (
    <div className="worldTime">
      <h2 className="world">
        <span role="img" aria-label="world" className="worldImg">
          🌍
        </span>{" "}
        {props.city}
      </h2>
      <h2 className="time">
        <span role="img" aria-label="time" className="timeImg">
          ⏰
        </span>{" "}
        시간: {props.time} 시
      </h2>
    </div>
  );
};

function App() {
  const cityTimeData = [
    ["서울", 10],
    ["베이징", 9],
    ["시드니", 12],
    ["LA", 17],
    ["부산", 10]
  ];

  const WorldClockLIst = cityTimeData.map((v, index) => (
    <WorldTime key={index} city={v[0]} time={[v[1]]} />
  ));

  return (
    <div className="App">
      <h1 className="title">Hello world!</h1>
      {WorldClockLIst}
    </div>
  );
}

export default App;
