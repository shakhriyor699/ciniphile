import React, { FC } from 'react'
import styled from 'styled-components'
import ActorsInfo from '../UI/ActorsInfo'
import Button from '../UI/Button'

import banner from '../assets/images/banner.png'

const MoviesInfoWrapper = styled.div`
  height: 700px;
  margin-top: 30px;
  position: relative;
`

const CloseButton = styled.span`
      position: absolute;
      right: 30px;
      top: 30px;
      color: #FFFFFF;
      font-size: 16px;
      font-family: 'Montserrat-Bold';
      cursor: pointer;
      background: rgba(20,20,20, 0.7);
      border-radius: 50%;
      padding: 20px;
`


const MoviesInfoBlock = styled.div`
  height: 100%;
  position: relative;
 
`

const MainImg = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    object-fit: cover;
    height: 100%;
    width: 50%;
    z-index: -1;
`
const MoviesInfoItem = styled.div`
   
   height: 100%;
`

const MoviesInfoContent = styled.div`
  
`

const AboutMoviesBlock = styled.div`
  
`

const ActorsBlock = styled.div`
  
`

const MoviesInfo: FC = () => {
  return (
    <MoviesInfoWrapper>
      <CloseButton>X</CloseButton>
      <MoviesInfoBlock>
        <MainImg src={banner} alt="" />
        <MoviesInfoItem>
          <MoviesInfoContent>
            <h3>Шан-Чи и легенда десяти колец</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eligendi assumenda nulla rem minus dignissimos natus possimus architecto quo enim. Obcaecati quisquam quia et voluptatem blanditiis nostrum quidem. Tempore numquam quis provident saepe delectus. Sit quo odit laudantium reprehenderit! Deleniti quo praesentium cum, perferendis fugit soluta aperiam ex cumque eveniet...</p>
            <AboutMoviesBlock>
              <span></span>
              <span></span>
            </AboutMoviesBlock>
            <ActorsBlock>
              <ActorsInfo />
            </ActorsBlock>
            <Button />
          </MoviesInfoContent>
        </MoviesInfoItem>
      </MoviesInfoBlock>
    </MoviesInfoWrapper>
  )
}

export default MoviesInfo