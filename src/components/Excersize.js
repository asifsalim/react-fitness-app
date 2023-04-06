import React from "react";
import Break from "./Break";
import Thanks from "./Thanks";

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Time: 0,
    };
  }
  handleClick1 = () => {
    this.setState({ Time: this.state.Time + 30 });
  };
  handleClick2 = () => {
    this.setState({ Time: this.state.Time + 20 });
  };
  handleClick3 = () => {
    this.setState({ Time: this.state.Time + 15 });
  };
  handleClear = () => {
    this.setState({
      Time: 0,
    });
  };
  render() {
    return (
      <div>
        <h1>Select Today&apos;s Exercise</h1>
        <h2>Rolling</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, to...
        </p>
        <p>For age:20-30</p>
        <span>Time Required: 30s</span>
        <br />
        <br />
        <button onClick={this.handleClick1}>Add To List</button>

        <h2>PushUp</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, to...
        </p>
        <p>For age:20-30</p>
        <span>Time Required: 20s</span>
        <br />
        <br />
        <button onClick={this.handleClick2}>Add To List</button>

        <h2>Single Leg Lift</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, to...
        </p>
        <p>For age:20-30</p>
        <span>Time Required: 15s</span>
        <br />
        <br />

        <button onClick={this.handleClick3}>Add To List</button>
        <br />
        <br />
        <h3>Excercise Time: {this.state.Time}</h3>
        <Break />
        <button onClick={this.handleClear}>Clear the List</button>
        <br />
        <br />
        <Thanks />
      </div>
    );
  }
}
export default Exercise;
