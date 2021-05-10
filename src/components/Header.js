import React from "react";
import {
  Container,
  Nav,
  NavbarBrand,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UsersContext } from "../contexts/UsersContext";
import { useContext } from "react";
import { FiPower, FiUser } from "react-icons/all";

function Header({ history }) {
  const { logout, userInfo } = useContext(UsersContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar className="bg-primary navbar-expand fixed-top">
      <Container>
        <NavbarBrand className="text-white">WA FASHIONERS</NavbarBrand>
        <Nav>
          <Nav.Link>
            <Link to="/" className="nav-link text-white">
              HOME
            </Link>
          </Nav.Link>

          {userInfo.token ? (
            <>
              <Nav.Link>
                <Link to="/fashioners" className="nav-link text-white">
                  FASHIONERS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/addfashioner" className="nav-link text-white">
                  ADD
                </Link>
              </Nav.Link>
              <NavDropdown
                title={
                  <FiUser
                    size={25}
                    style={{
                      border: "2px solid #000",
                      borderRadius: 20,
                      padding: 1,
                    }}
                  />
                }
              >
                <NavDropdown.Item>{userInfo.name}</NavDropdown.Item>
                <NavDropdown.Item>{userInfo.email}</NavDropdown.Item>
                <NavDropdown.Item className="nav-link" onClick={handleLogout}>
                  <FiPower size={30} />
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>
              <Nav.Link>
                <Link to="/login" className="nav-link text-white">
                  SIGN IN
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/register" className="nav-link text-white">
                  SIGN UP
                </Link>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
