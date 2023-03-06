import React, { FC } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'



const HeaderWrapper = styled.header`
  
`

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Navbar />

    </HeaderWrapper>
  )
}

export default Header