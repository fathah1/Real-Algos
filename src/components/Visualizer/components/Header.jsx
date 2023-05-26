import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
  return (
    <Navbar as="header" bg="light">
      <Container fluid>
        <Navbar.Brand href="/">
          <h3>
            Binary Search Steps
          </h3>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
