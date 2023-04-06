import React from "react";

class Thanks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePopupClose = this.handlePopupClose.bind(this);
  }

  handleClick() {
    this.setState({
      showPopup: true,
    });
  }

  handlePopupClose() {
    this.setState({
      showPopup: false,
    });
  }

  render() {
    const { showPopup } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Activity Done!</button>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Congratulations!</h2>
              <p>You did it!</p>
              <button onClick={this.handlePopupClose}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Thanks;
