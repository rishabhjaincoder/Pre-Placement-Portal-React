import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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

//This is the navigation bar that will be visible on dashboard

const NavBar = (props) => {
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
          <Logo/> &nbsp; &nbsp; &nbsp;
        <NavbarBrand>reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {/* <NavLink href="/components/">Components</NavLink> */}
              <NavLink>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Contact</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
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

export default withRouter(NavBar);