import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../custom.css";
import self from "../images/self.jpg";

const Break = ({ timer }) => {
  const [clickedButton, setClickedButton] = useState("0");

  const handleClick = (event) => {
    setClickedButton(event.target.value);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col className="d-flex BorderContent">
            <Image src={self} className="ProfilePic" />
            <Row md={1} className="d-flex align-items-center mx-4">
              <Col className="ContentName">Asif Salim</Col>
              <Col className="ContentAdress">Saidpur,Rangpur</Col>
            </Row>
          </Col>
        </Row>
        <div className="d-flex justify-content-around">
          <div className="d-flex flex-column">
            <div className="d-flex">
              <h5 className="ContentDetails">70</h5>
              <p className="ContentDetails">kg</p>
            </div>
            <p className="ContentDetails ContentDetailBold">weight</p>
          </div>
          <div className="d-flex flex-column ContentDetails">
            <div className="d-flex">
              <h5 className="ContentDetails">5.8&quot;</h5>
            </div>
            <p className="ContentDetails ContentDetailBold">Height</p>
          </div>
          <div className="d-flex flex-column ContentDetails">
            <div className="d-flex">
              <h5 className="ContentDetails">25</h5>
              <p className="ContentDetails">yr</p>
            </div>
            <p className="ContentDetails ContentDetailBold">Age</p>
          </div>
        </div>
        <h3 className="ContentTitle">Add a Break</h3>
        <div className="d-flex justify-content-around">
          <div>
            <button
              // handleClick will trigger after clicked the button here
              onClick={handleClick}
              className="btn rounded-circle breakButton p-2"
              value="10"
            >
              10s
            </button>
          </div>
          <div>
            <button
              onClick={handleClick}
              className="btn rounded-circle breakButton p-2"
              value="20"
            >
              20s
            </button>
          </div>
          <div>
            <button
              onClick={handleClick}
              className="btn rounded-circle breakButton p-2"
              value="30"
            >
              30s
            </button>
          </div>
          <div>
            <button
              onClick={handleClick}
              className="btn rounded-circle breakButton p-2"
              value="40"
            >
              40s
            </button>
          </div>
          <div>
            <button
              onClick={handleClick}
              className="btn rounded-circle breakButton p-2"
              value="50"
            >
              50s
            </button>
          </div>
        </div>
        <Row>
          <h3 className="ContentTitle">Exercise Details</h3>
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
};

export default Break;
