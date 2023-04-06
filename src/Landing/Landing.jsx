import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Landing.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import gbr from "../aset/image-hero-mobile.png";
import databiz from "../aset/client-databiz.svg";
import audiophile from "../aset/client-audiophile.svg";
import meet from "../aset/client-meet.svg";
import maker from "../aset/client-maker.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHome,
  faList,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";

const Landing = () => {
  return (
    <React.Fragment>
      <Navbar className="navbar" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <strong>Snap</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Features" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <FontAwesomeIcon className="todo-list" icon={faList} /> Todo
                  List
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <FontAwesomeIcon className="calendar" icon={faCalendar} />{" "}
                  Calendar
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <FontAwesomeIcon className="reminder" icon={faBell} />{" "}
                  Reminders
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  <FontAwesomeIcon className="planing" icon={faClock} /> Planing
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Company" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Careers</Nav.Link>
              <Nav.Link href="#home">About</Nav.Link>
            </Nav>
            <Nav.Link href="#home">Login</Nav.Link>
            <button className="btn-register">Register</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="object">
        <Container>
          <div className="parent-landing">
            <div className="content-all">
              <div className="title">
                <h1 className="content">Make</h1>
                <h1 className="content2">remote work</h1>
              </div>
              <p className="text">
                Get your team in sync, no matter your location. <br />
                Streamline processes, create team rituals, and <br /> watch
                productivity soar.
                <br />
                <button className="learn-more">Learn more</button>
                <div className="all-support">
                  <img className="support" src={databiz} alt="" />
                  <img className="support" src={audiophile} alt="" />
                  <img className="support" src={meet} alt="" />
                  <img className="support" src={maker} alt="" />
                </div>
              </p>
            </div>

            <img className="img-landing" src={gbr} alt="" />
          </div>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default Landing;
