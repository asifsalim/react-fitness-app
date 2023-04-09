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
    const { Time } = this.state;
    return (
      <div>
        <Container>
          <Row xs={1}>
            <Col lg={true} className="OuterCardBox">
              <div>
                <h1 className="Container-Title">
                  Select Today&apos;s Activities
                </h1>
              </div>
              <Row xs={1} lg={3} className="d-flex flex-wrap">
                <Col className="d-flex justify-content-center align-items-center cardSpace">
                  <Card className="CardWidth">
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
