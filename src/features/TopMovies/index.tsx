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
`
const TopMoviesTitle = styled.h2`
  font-size: 30px;
  line-height: 100%;
  font-family: 'Montserrat-BoldItalic';
  color: #141414;
  text-transform: uppercase;
  span {
    color: #149A03;
    font-size: 50px;
    margin-left: 15px;
    line-height: 100%;
    font-family: 'Montserrat-Bold';
  }
`

const SliderItem = styled(SwiperSlide)`
  height: 462px;
  transition: 0.3s;
  position: relative;
 

  &:hover {
    /* opacity: 0.5;  */
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;

  }
`

const SliderItemInfo = styled.div`




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
      <Swiper
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
              <Link to={'/'}>
                <img src={`${img_original}${item.backdrop_path}`} alt="" />
              </Link>
            </SliderItemInfo>
          </SliderItem>
        ))}
      </Swiper>
    </TopMoviesWrapper>
  )
}

export default TopMovies