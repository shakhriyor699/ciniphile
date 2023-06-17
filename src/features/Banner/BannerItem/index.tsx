import React, { FC } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import Button from '../../../UI/Button'
import { ResultsTypes } from '../../../types/types'
import { img_500, img_original } from '../../../config/config'


const BannerItemWrapper = styled.div`
  height: 100%;


`
const Img = styled.img`
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%; 
    object-fit: cover;
    z-index: -99;
`

const BannerItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`

const BannerItemContent = styled.div`
  background: rgba(20, 20, 20, 0.76);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const BannerItemTitle = styled.h1`
  font-size: 80px;
  line-height: 120%;
  color: #FFFFFF;
  font-family: 'Raleway-Bold';
  text-align: center;
`
const BannerItemText = styled.p`
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #FFFFFF;
  font-family: 'Raleway-Regular';
  max-width: 960px;
  width: 100%;
`

const BannerItemNext = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 30%;
  height: 100px;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    position: absolute;
    width: 50%;
    right: 0;
    top: 0;
    border-radius: 10px 10px 0px 0px;
    height: 100%;
    object-fit: cover;
  }
`

const BannerNextContent = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #000000 55.64%, rgba(0, 0, 0, 0) 100%);
  z-index: 99;
  height: 100%;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;

  p:nth-of-type(1) {
    font-size: 16px;
    line-height: 19px;
    font-family: 'Raleway-Regular';
    color: #FFFFFF;
  }
  p:nth-of-type(2) {
    font-size: 18px;
    line-height: 21px;
    font-family: 'Raleway-Bold';
    color: #FFFFFF;
    margin-top: 15px;
  }
`

const anim = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`

const BannerNextBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  height: 3px;
  z-index: 99;
  border-radius: 0px 0px 10px 10px;

  &::before {
    content: '';
    display: block;
    height: 3px;
    background: #FFFFFF;
    animation: ${anim} 10s linear;
  }
`
interface IResultsTypes {
  movie: ResultsTypes
  next: ResultsTypes
  handleClick: () => void
}


const BannerItem: FC<IResultsTypes> = ({ movie, next, handleClick }) => {

  return (
    <BannerItemWrapper>
      <Img src={`${img_original}${movie.backdrop_path}`} alt="banner" loading='lazy' />
      <BannerItemContent>
        <BannerItemInfo>
          <BannerItemTitle>{movie.title}</BannerItemTitle>
          <BannerItemText>{movie.overview}</BannerItemText>
          <Button page='films' id={movie.id} />
        </BannerItemInfo>
      </BannerItemContent>
      <BannerItemNext onClick={handleClick}>
        <img src={`${img_500}${next.backdrop_path}`} alt="" loading='lazy' />
        <BannerNextContent>
          <p>Следующий</p>
          <p>{next.title}</p>
        </BannerNextContent>
        <BannerNextBar></BannerNextBar>
      </BannerItemNext>
    </BannerItemWrapper>
  )
}

export default BannerItem