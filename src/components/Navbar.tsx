import React, { FC, MouseEvent, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from './Container'
import { navLinks } from '../routes'
import logo from '../assets/images/logo.svg'
import search from '../assets/images/search.svg'

interface MenuProps {
  openMenu: boolean
}

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
    @media(max-width: 768px) {
      display: none;
    }
`
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  @media(max-width: 768px) {
    position: relative;
    flex-direction: column;
    max-width: 280px;
    width: 100%;
    background: #16151a;
    box-shadow: 8px 0 10px rgb(0 0 0 / 30%);
    overflow-y: auto;
    height: 100vh;
    gap: 0;
    & svg {
      position: absolute;
      right: 20px;
      top: 10px;
    }
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
  @media(max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
  }
`

const MobileListWrapper = styled.div<MenuProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: ${({ openMenu }) => openMenu ? '0' : '-100%'};
  top: 0;
  background-color: rgba(0,0,0,.9);
  backdrop-filter: blur(2px);
  transition: 0.5s;
`




const Navbar: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const handleOpenMenu = (e: MouseEvent) => {
    setOpenMenu(true)
  }
  const handleCloseMenu = (e: MouseEvent) => {
    setOpenMenu(false)
  }

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
          <svg onClick={handleOpenMenu} viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><path d="M0-3h20v20H0z"></path><g fill="#FFF"><rect width="20" height="2" rx="1"></rect><rect y="6" width="18" height="2" rx="1"></rect><rect stroke="#FFF" x="0.5" y="12.5" width="13" height="1" rx="0.5"></rect></g></g></svg>
          <MobileListWrapper openMenu={openMenu} onClick={handleCloseMenu} >
            <NavList onClick={(e: MouseEvent) => e.stopPropagation()}>
              <svg onClick={handleCloseMenu} style={{ color: 'white' }} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v20H0z"></path><path d="M10 8.872l5.639-5.638a.797.797 0 011.127 1.127L11.128 10l5.638 5.639a.797.797 0 11-1.127 1.127L10 11.128l-5.639 5.638a.797.797 0 11-1.127-1.127L8.872 10 3.234 4.361A.797.797 0 014.36 3.234L10 8.872z" fill="currentColor" fill-rule="nonzero"></path></g></svg>
              {navLinks.map((item) => (
                <NavListItem key={item.url}>
                  <NavLinks to={item.url}>{item.title}</NavLinks>
                </NavListItem>
              ))}
            </NavList>
          </MobileListWrapper>
          <Link to='/'>
            <img src={logo} alt="ciniPhile-logo" />
          </Link>
          <Link to={'/search'}>
            <img src={search} alt="search-icon" />
          </Link>
        </MobileMenu>
      </Container>
    </Nav>
  )
}




export default Navbar