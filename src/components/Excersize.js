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
    this.state = {
      Time: 0,
    };
  }
  handleClick1 = (ButtonTime) => {
    this.setState({ Time: this.state.Time + ButtonTime });
  };
  handleClear = () => {
    this.setState({
      Time: 0,
    });
  };
  render() {
    const { Time } = this.state;
    return (
      <div>
        <Container>
          <Row xs={1}>
            <Col lg={8} className="OuterCardBox">
              <div>
                <h1 className="Container-Title">
                  Select Today&apos;s Activities
                </h1>
              </div>
              <Row className="d-flex flex-wrap">
                <Col className="d-flex justify-content-around  flex-wrap">
                  {data.map((item, index) => (
                    <Card key={index} className="CardWidth">
                      <Image
                        src={item.imgUrl}
                        alt={item.title}
                        className="CardImage"
                      />
                      <Card.Body className="d-grid gap-2">
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                          {item.description.slice(0, 100)}...
                        </Card.Text>
                        <Card.Text>For Age: {item.age}</Card.Text>
                        <Card.Text>Time Required: {item.time}</Card.Text>
                        <Button
                          onClick={() => this.handleClick1(item.time)}
                          value={item.time}
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

            <Col lg={4} className="SideBox">
              <Break timer={Time} />
              <div className="d-grid gap-2 clear-button">
                <Button variant="warning" onClick={this.handleClear}>
                  Clear the List
                </Button>
              </div>

              <Thanks />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Exercise;
