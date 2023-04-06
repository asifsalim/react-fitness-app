import React from "react";
class Break extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedButton: "0",
    };
  }

  handleClick = (event) => {
    this.setState({
      clickedButton: event.target.value,
    });
  };

  render() {
    const { clickedButton } = this.state;
    return (
      <div>
        <h3>Add a Break</h3>

        <button onClick={this.handleClick} value="10">
          10s
        </button>
        <button onClick={this.handleClick} value="20">
          20s
        </button>
        <button onClick={this.handleClick} value="30">
          30s
        </button>
        <h3>Break Time: {clickedButton} seconds</h3>
      </div>
    );
  }
}

export default Break;
