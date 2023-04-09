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
          <Row className="info-box " sm={3}>
            <Row>
              <Col style={{ flexShrink: 1 }}>
                <span className="Number">70</span>kg
              </Col>
              <Col className="Number-info">weight</Col>
            </Row>
            <Row>
              <Col style={{ flexShrink: 1 }}>
                <span className="Number">5.7&quot;</span>
              </Col>
              <Col className="Number-info">Height</Col>
            </Row>

            <Row>
              <Col style={{ flexShrink: 1 }}>
                <span className="Number">25</span>yr
              </Col>
              <Col className="Number-info">Age</Col>
            </Row>
          </Row>
          <h3 className="Title">Add a Break</h3>
          <Row className="info-button d-flex justify-content-center" md={1}>
            <Row md={5}>
              <Col>
                <button
                  className="SideButton"
                  onClick={this.handleClick}
                  value="10"
                >
                  10s
                </button>
              </Col>
              <Col>
                <button
                  className="SideButton"
                  onClick={this.handleClick}
                  value="20"
                >
                  20s
                </button>
              </Col>
              <Col>
                <button
                  className="SideButton"
                  onClick={this.handleClick}
                  value="30"
                >
                  30s
                </button>
              </Col>
              <Col>
                <button
                  className="SideButton"
                  onClick={this.handleClick}
                  value="40"
                >
                  40s
                </button>
              </Col>
              <Col>
                <button
                  className="SideButton"
                  onClick={this.handleClick}
                  value="50"
                >
                  50s
                </button>
              </Col>
            </Row>
          </Row>
          <Row>
            <h3 className="Title">Exercise Details</h3>
            <Row className="info-button mx-auto" md={1}>
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
