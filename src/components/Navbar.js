import React from "react";
import { FormControl, Image, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "../custom.css";
import logo from "../images/logo/dumbbell-solid.svg";

//   return (
//     <Navbar className="OuterNavBox">
//       <Container>
//         <Image src={logo} alt="Logo" className="logo" />
//         <Navbar.Brand href="#">My App</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Form className="d-flex ms-auto">
//             <FormControl
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;
function NavigationBar() {
  return (
    // this navbar section contains all the details of the top page
    <Navbar className="OuterNavBox" expand="lg">
      {/* all the code are edited from bootstrap react website navbar section */}
      <Container>
        {/* page logo image are imported here as logo variable here */}
        <Image src={logo} alt="Logo" className="logo" />
        <Navbar.Brand href="#home">Fitness App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* navbar collape actually turns into hamberburger icon after a certain screen size */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
