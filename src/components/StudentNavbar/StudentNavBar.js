import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';

import {withRouter} from 'react-router-dom';
import Logo from '../Logo/Logo';
// import {NavLink} from 'react-router-dom';

//This is the navigation bar that will be visible on dashboard

const StudentNavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const onClickHandler = () => {
        props.history.push('/editprofile');
    }

    const onLogoutHandler = () => {
        props.history.push('/');
    }

    return (
    <div>
      <Navbar color="light" light expand="md">
        <a href="/"><Logo/></a>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {/* <NavLink href="/components/">Components</NavLink> */}
              <NavLink href="/about"> About </NavLink>
            </NavItem>
            &nbsp; &nbsp; &nbsp;
            <NavItem>
              <NavLink href="/contact"> Contact </NavLink>
            </NavItem>
            &nbsp; &nbsp; &nbsp;
            <NavItem>
              <NavLink href="/about"> View test score </NavLink>
            </NavItem>
            &nbsp; &nbsp; &nbsp;
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                View Resources
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  View test papers
                </DropdownItem>
                <DropdownItem>
                  View assignments
                </DropdownItem>
                <DropdownItem NavLink to="/ppt-section">
                  View PPTs
                </DropdownItem>
                <DropdownItem>
                  View announcements
                </DropdownItem>
                <DropdownItem>
                  View videos
                </DropdownItem>
                <DropdownItem>
                  View weblinks/external resources
                </DropdownItem>
                <DropdownItem>
                  View notes
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button onClick={onClickHandler}>EDIT PROFILE</Button> &nbsp;
          <Button onClick={onLogoutHandler}> LOGOUT</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(StudentNavBar);