import React from "react";
import { Card, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../custom.css";
import data from "../data.json";
import Break from "./Break";
import Thanks from "./Thanks";
//this Exercise app actually contain the main body part of the website
class Exercise extends React.Component {
  constructor(props) {
    super(props);
    // as we need exercise time thats why i set the time as a state zero to initiate
    this.state = {
      Time: 0,
    };
  }
  // these handleClick set as arrow function method to avoid "this" confusion and it takes the time and added value as required
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
    // here i destructure the time as Time for further use
    const { Time } = this.state;
    return (
      <div>
        {/* left side container */}
        <Container>
          <Row xs={1}>
            <Col lg={true} className="OuterCardBox">
              <div>
                {/* container title for custom css style */}
                <h1 className="Container-Title">
                  Select Today&apos;s Activities
                </h1>
              </div>
              {/* here xs mean when screen will xtra small then card will be 1 by 1 otherwise lg or large screen it will be 3 by 3 */}
              <Row className="d-flex flex-wrap">
                <Col className="d-flex justify-content-center align-items-center flex-wrap cardSpace">
                  {/* cardWidth css used for a fixed card width */}
                  {data.map((item, index) => (
                    <Card key={index} className="CardWidth">
                      <Image src={item.imgUrl} alt={item.title} />
                      <Card.Body className="d-grid gap-2">
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text>{item.time}</Card.Text>
                        <Card.Text>{item.age}</Card.Text>
                        <Button
                          onClick={this.handleClick1}
                          className="darkColor"
                        >
                          Add To The List
                        </Button>
                      </Card.Body>
                    </Card>
                  ))}
                </Col>
              </Row>
            </Col>
            {/* here is the right side section */}
            {/* SideBox class uses as the custom css */}
            <Col lg={4} className="SideBox">
              {/* in Break component i have passed the "Time" state as props so that i will recieve that props as timer in Button.js there as use that further */}
              <Break timer={Time} />
              <div className="d-grid gap-2 clear-button">
                {/* this button actually clear the timer to zero again as the clicked button */}
                <Button variant="warning" onClick={this.handleClear}>
                  Clear the List
                </Button>
              </div>
              {/* Thanks app uses here as a popup window */}
              <Thanks />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Exercise;
