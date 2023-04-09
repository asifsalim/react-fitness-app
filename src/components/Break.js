import React from "react";
import { Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../custom.css";
import self from "../images/self.jpg";

class Break extends React.Component {
  constructor(props) {
    super(props);
    // it will initiate the break button as zero
    this.state = {
      clickedButton: "0",
    };
  }
  // this method will look which button was clicked and set the value according that
  handleClick = (event) => {
    this.setState({
      clickedButton: event.target.value,
    });
  };

  render() {
    const { clickedButton } = this.state;
    // here timer are imported from Exercise.js app as props for calculaion
    const { timer } = this.props;
    return (
      <div>
        <Container>
          <Row>
            <Col className="BreakFirstContent d-flex">
              <Image src={self} className="ProfilePic" />
              <Row md={1} className="d-flex align-items-center mx-4">
                <Col className="NameFont">Asif Salim</Col>
                <Col className="AddressFont">Saidpur,Rangpur</Col>
              </Row>
            </Col>
          </Row>
          <div className="com_color2 rounded-3 d-flex justify-content-around p-2">
            <div className="d-flex flex-column p-0 m-0 ">
              <div className="d-flex">
                <h5 className="p-0 m-0">70</h5>
                <p className="p-0 m-0">kg</p>
              </div>
              <p className="p-0 m-0 fw-bold">weight</p>
            </div>
            <div className="d-flex flex-column p-0 m-0">
              <div className="">
                <h5 className="p-0 m-0">5.8&quot;</h5>
              </div>
              <p className="p-0 m-0 fw-bold">Height</p>
            </div>
            <div className="d-flex flex-column p-0 m-0">
              <div className="d-flex">
                <h5 className="p-0 m-0">25</h5>
                <p className="p-0 m-0">yr</p>
              </div>
              <p className="p-0 m-0 fw-bold">Age</p>
            </div>
          </div>
          <h3 className="Title">Add a Break</h3>
          <div className="com_color2 rounded-3 d-flex justify-content-around p-3 mt-2">
            <div>
              <button
                // this.handleClick will trigger after clicked the button here
                onClick={this.handleClick}
                className="btn rounded-circle breakButton p-2"
                value="10"
              >
                10s
              </button>
            </div>
            <div>
              <button
                onClick={this.handleClick}
                className="btn rounded-circle breakButton p-2"
                value="20"
              >
                20s
              </button>
            </div>
            <div>
              <button
                onClick={this.handleClick}
                className="btn rounded-circle breakButton p-2"
                value="30"
              >
                30s
              </button>
            </div>
            <div>
              <button className="btn rounded-circle breakButton p-2" value="40">
                40s
              </button>
            </div>
            <div>
              <button className="btn rounded-circle breakButton p-2" value="50">
                50s
              </button>
            </div>
          </div>
          <Row>
            <h3 className="Title">Exercise Details</h3>
            <Row className="info-button mx-auto">
              <Row md={1} className="mx-auto">
                <Col className="d-flex justify-content-between tertiary-font Exercise-border">
                  <div>Excercise Time </div>
                  <div>{timer} seconds</div>
                </Col>
                <Col className="d-flex justify-content-between tertiary-font Exercise-border">
                  <div>Break Time </div>
                  <div>{clickedButton} seconds</div>
                </Col>
              </Row>
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Break;
