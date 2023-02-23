import React, { FC, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from './Container'
import { navLinks } from '../routes'
import logo from '../assets/images/logo.svg'
import search from '../assets/images/search.svg'



const Nav = styled.nav`
  background: rgba(20, 20, 20, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
`

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;

  @media(max-width: 768px) {
    position: fixed;
    flex-direction: column;
  }
`

const NavListItem = styled.li``

const NavLinks = styled(NavLink)`
  font-size: 18px;
  line-height: 21px;
  font-family: 'Raleway-Bold';
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 0;
  position: relative;
  transition: 0.5s ;
  ::after {
    content: '';
    background: #149A03;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: none;
    position: absolute;
    bottom: 10px;
    transition: 0.5s;
  }
  &.active::after {
    display: block;
  }
  &.active {
    color: #FFFFFF;
  }
`

const MobileMenu = styled.div`
  display: none;
  
`




const Navbar: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <Nav>
      <Container>
        <NavWrapper>
          <Link to='/'>
            <img src={logo} alt="ciniPhile-logo" />
          </Link>
          <NavList>
            {navLinks.map((item) => (
              <NavListItem key={item.url}>
                <NavLinks to={item.url}>{item.title}</NavLinks>
              </NavListItem>
            ))}
            <NavListItem>
              <Link to={'/search'}>
                <img src={search} alt="search-icon" />
              </Link>
            </NavListItem>
          </NavList>
        </NavWrapper>
        <MobileMenu>

        </MobileMenu>
      </Container>
    </Nav>
  )
}


{/* <svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><path d="M0-3h20v20H0z"></path><g fill="#FFF"><rect width="20" height="2" rx="1"></rect><rect y="6" width="18" height="2" rx="1"></rect><rect stroke="#FFF" x="0.5" y="12.5" width="13" height="1" rx="0.5"></rect></g></g></svg> */ }

export default Navbar