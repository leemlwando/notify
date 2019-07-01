/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2019{" "}
              <a
                className="font-weight-bold ml-1"
                href="http://docs.microtechcloud.co"
                rel="noopener noreferrer"
                target="_blank"
              >
                MicroTech Cloud Solutions
              </a>
            </div>
          </Col>

          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
              <NavItem>
                <NavLink
                  href="http://dcos.microtechcloud.co"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  MicroTech Cloud
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="http://microtechcloud.co/about-us"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  About Us
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="http://blog.microtechcloud.co"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open Source
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="http://docs.microtechcloud.co/license"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Our Open Source Usage License
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
