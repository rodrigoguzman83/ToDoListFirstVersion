import { Navbar } from "react-bootstrap";
import logo from "../images/logo192.png";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="mt-3">
        <Navbar.Brand href="#">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          ToDo List Version 1
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Header;
