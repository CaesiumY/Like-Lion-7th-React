import React from "react";
import "./App.css";

class WorldTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: this.props.time,
      minute: 0,
      stop: false
    };

    // this.setState({ minute: 1 });
    this.timer = setInterval(() => {
      this.setState(state =>
        state.minute >= 59
          ? { hour: parseInt(state.hour) + 1, minute: 0 }
          : { minute: state.minute + 1 }
      );
    }, 1000);
  }

  handleClick = e => {
    console.log(e.target.value);
    this.setState({ stop: e.target.value });
    clearInterval(this.timer);
  };

  render() {
    return (
      <div className="worldTime">
        <h2 className="world">
          <span role="img" aria-label="world" className="worldImg">
            🌍
          </span>{" "}
          {this.props.city}
        </h2>
        <h2 className="time">
          <span role="img" aria-label="time" className="timeImg">
            ⏰
          </span>{" "}
          시간: {this.state.hour} 시 {this.state.minute} 분
        </h2>
        <button value={true} className="timeControl" onClick={this.handleClick}>
          정지
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };

    this.cityTimeData = [
      ["서울", 10],
      ["베이징", 9],
      ["시드니", 12],
      ["LA", 17],
      ["부산", 10]
    ];

    this.WorldClockLIst = this.cityTimeData.map((v, index) => (
      <WorldTime key={index} city={v[0]} time={[v[1]]} />
    ));
  }

  handleChange = e => {
    this.setState({ content: e.target.value });

    console.log(this.state.content);
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">Hello world!</h1>
        <input
          name=""
          id=""
          onChange={this.handleChange}
          value={this.state.content}
        ></input>
        {this.WorldClockLIst}
      </div>
    );
  }
}

export default App;
