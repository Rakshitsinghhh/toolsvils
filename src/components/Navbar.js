import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #2e7d32;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #2e7d32;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #2e7d32;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo>ToolsVils</Logo>
        <NavLinks>
          <NavLink href="#farm-machinery">Farm Machinery</NavLink>
          <NavLink href="#pumps-motors">Pumps & Motors</NavLink>
          <NavLink href="#food-machinery">Food Machinery</NavLink>
          <NavLink href="#workshop">Workshop Tools</NavLink>
          <IconButton>
            <FaShoppingCart />
          </IconButton>
          <IconButton>
            <FaUser />
          </IconButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 