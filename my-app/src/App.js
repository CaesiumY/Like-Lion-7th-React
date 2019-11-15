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
  return (
    <div className="App">
      <h1 className="title">Hello world!</h1>
      <WorldTime city={"서울"} time={11} />
      <WorldTime city={"베이징"} time={10} />
      <WorldTime city={"시드니"} time={13} />
      <WorldTime city={"LA"} time={18} />
    </div>
  );
}

export default App;
