import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <h2>StudyLink</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? ([
              <Nav.Link id="admin-sensei-panel" as={NavLink} to="/admin" key="admin">Sensei Panel</Nav.Link>,
              <Nav.Link id="admin-grasshopper-panel" as={NavLink} to="/admin" key="admin">Grasshopper Panel</Nav.Link>,
            ]) : ''}
            {currentUser ? ([
              <Nav.Link id="calender" as={NavLink} to="/calendar" key="calendar">My Calendar</Nav.Link>,
              <Nav.Link id="course-manager" as={NavLink} to="/course-manager" key="course-manager">Course Manager</Nav.Link>,
            ]) : ([
              <Nav.Link id="about-us-nav" as={NavLink} to="/aboutus" key="aboutus">About Us</Nav.Link>,
              <Nav.Link id="rules-and-regulations" as={NavLink} to="/rulesandregulations" key="rulesandregulations">Rules and Regulations</Nav.Link>,
            ])}
          </Nav>
          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  <PersonFill />
                  Sign
                  in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                  <PersonPlusFill />
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" title={currentUser}>
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign
                  out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
