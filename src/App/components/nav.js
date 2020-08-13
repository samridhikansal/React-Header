import React from "react";

//import styled and helper from the styled-component library
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

//import basic grid from the styled directory
import { Row, Column } from "./../styled";

//importing styled twitter component from the styled directory
import { StyledTwitter, StyledSkype, StyledYoutube } from "./../styled";

const Header = styled(Row)`
  z-index: 999;
  width: 100%;
  min-height: 5%;
  background-color: #ffb6c1;
  display: flex;
`;

const NavList = styled(Column)`
  display: flex;
  list-style-type: none;
  background-color: grey;
`;

const StyledNavLink = styled(NavLink)`
  padding: 0 20px;
  text-decoration: none;
`;

const Icons = styled(Column)`
  display: flex;
  background-color: #98fb98;
`;

class Nav extends React.Component {
  render() {
    return (
      <Header>
        {/*Pages*/}
        <NavList>
          <StyledNavLink exact to="/">
            Home
          </StyledNavLink>

          <StyledNavLink to="/about">About </StyledNavLink>

          <StyledNavLink to="/blog">Blog </StyledNavLink>

          <StyledNavLink to="/work">Work </StyledNavLink>
        </NavList>
        {/* Icons*/}
        <Icons>
          <StyledTwitter />
          <StyledSkype />
          <StyledYoutube />
        </Icons>
      </Header>
    );
  }
}

export default Nav;
