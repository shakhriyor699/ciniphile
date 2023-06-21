import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadTopMovies } from './topMovieSlice';
import { Link } from 'react-router-dom';
import { img_original } from '../../config/config';


const TopMoviesWrapper = styled.div`
  background: #FFFFFF;
  padding: 30px 0 90px 100px;

  @media(max-width: 480px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`
const TopMoviesTitle = styled.h2`
  font-size: 30px;
  line-height: 100%;
  font-family: 'Montserrat-BoldItalic';
  color: #141414;
  text-transform: uppercase;
  margin-bottom: 88px;
  span {
    color: #149A03;
    font-size: 50px;
    margin-left: 15px;
    line-height: 100%;
    font-family: 'Montserrat-Bold';
  }
`

const SwiperWrapper = styled(Swiper)`
  
  & .swiper-button-prev,
  & .swiper-button-next {
    display: none;
  }
`

const SliderItem = styled(SwiperSlide)`
  height: 462px;
  background: #141414;
  box-shadow: 0px 20px 15px -10px rgba(0,0,0, 0.25);
  border-radius: 10px;
  position: relative;
  
  img {
    width: 70%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    z-index: -99;
    position: absolute;
    right: 0;
    top: 0;
  }

`

const SliderItemInfo = styled.div`
    background: linear-gradient(90deg, #141414 30%, rgba(20,20,20,0) 102.08%);
    position: relative;
    z-index: 100;
    height: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;

    p {
      width: 30%;
      color: #FFFFFF;
      text-align: center;
      font-size: 150px;
      font-family: 'Raleway-Bold';
      font-style: italic;
    }
`

const TopMovies = () => {

  const dispatch = useAppDispatch()
  const { results } = useAppSelector(state => state.topMovies.list)
  const newResults = results.slice(1, 11)




  useEffect(() => {
    dispatch(loadTopMovies())
    // eslint-disable-next-line
  }, [])

  return (
    <TopMoviesWrapper>
      <TopMoviesTitle>
        Топ
        <span>10</span>
      </TopMoviesTitle>
      <SwiperWrapper
        modules={[Navigation]}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1450: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={23}
        navigation
      >
        {newResults.map((item, i) => (
          <SliderItem key={item.id}>
            <SliderItemInfo>
              <p>{i + 1}</p>
            </SliderItemInfo>
            <Link to={'/'}>
              <img src={`${img_original}${item.backdrop_path}`} alt="" loading='lazy' />
            </Link>
          </SliderItem>
        ))}
      </SwiperWrapper>
    </TopMoviesWrapper>
  )
}

export default TopMovies