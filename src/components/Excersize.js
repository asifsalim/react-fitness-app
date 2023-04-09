import React from "react";
import { Card, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../custom.css";
import leglift from "../images/leglift.jpg";
import pushup from "../images/pushup.jpg";
import rolling from "../images/rolling.jpg";
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
              <Row xs={1} lg={3} className="d-flex flex-wrap">
                <Col className="d-flex justify-content-center align-items-center cardSpace">
                  {/* cardWidth css used for a fixed card width */}
                  <Card className="CardWidth">
                    {/* rolling imported as variable for card picture */}
                    <Image src={rolling} alt="Card image" />
                    <Card.Body className="d-grid gap-2">
                      <Card.Title>Rolling</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </Card.Text>
                      <Card.Text>For age:20-30</Card.Text>
                      <Card.Text>Time Required: 30s</Card.Text>
                      <Button onClick={this.handleClick1} variant="primary">
                        Add To The List
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="d-flex justify-content-center align-items-center cardSpace">
                  <Card className="CardWidth">
                    <Image src={pushup} alt="Card image" />
                    <Card.Body className="d-grid gap-2">
                      <Card.Title>PushUp</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </Card.Text>
                      <Card.Text>For age:20-30</Card.Text>
                      <Card.Text>Time Required: 20s</Card.Text>
                      <Button onClick={this.handleClick2} variant="primary">
                        Add To The List
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="d-flex justify-content-center align-items-center cardSpace">
                  <Card className="CardWidth">
                    <Image src={leglift} alt="Card image" />
                    <Card.Body className="d-grid gap-2">
                      <Card.Title>Single Leg Lift</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </Card.Text>
                      <Card.Text>For age:20-30</Card.Text>
                      <Card.Text>Time Required: 15s</Card.Text>
                      <Button onClick={this.handleClick3} variant="primary">
                        Add To The List
                      </Button>
                    </Card.Body>
                  </Card>
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
