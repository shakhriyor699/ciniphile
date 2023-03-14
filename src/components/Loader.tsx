import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'


const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  span {
    width: 70px;
    height: 70px;
    border: 3px solid gray;
    border-top: 2px solid red;
    border-radius: 50%;
    animation: ${rotate} 1s infinite ease-in-out;
    
  }
`



const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <span></span>
    </LoaderWrapper>
  )
}

export default Loader