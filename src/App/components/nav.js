import React from "react";

//import styled and helper from the styled-component library
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  min-height: 5%;
  background-color: #ffb6c1;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`;

const StyledNavLink = styled(NavLink)`
  padding: 0 20px;
  text-decoration: none;
`;

class Nav extends React.Component {
  render() {
    return (
      <Header>
        <NavList>
          <StyledNavLink exact to="/">
            Home
          </StyledNavLink>

          <StyledNavLink to="/about">About </StyledNavLink>

          <StyledNavLink to="/blog">Blog </StyledNavLink>

          <StyledNavLink to="/work">Work </StyledNavLink>
        </NavList>
      </Header>
    );
  }
}

export default Nav;
