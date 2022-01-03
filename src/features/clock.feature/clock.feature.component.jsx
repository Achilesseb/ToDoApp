import "./clock.feature.styles.scss";
import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  createDate() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.createDate(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div className="clock">
        <div className="hour">{this.state.date.getHours()}</div>
        <div className="minuntes">{this.state.date.getMinutes()}</div>
        <div className="seconds">{this.state.date.getSeconds()}</div>
        <div className="daytime">
          {this.state.date.getHours() < 12 ? "AM" : "PM"}
        </div>
      </div>
    );
  }
}

export default Clock;
