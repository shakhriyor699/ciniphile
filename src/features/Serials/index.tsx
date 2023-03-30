import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import MoviesInfo from '../../components/MoviesInfo';
import { loadSerials } from './serialsSlice';
import { ResultsTypes } from '../../types/types';
import { img_original } from '../../config/config';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const MoviesWrapper = styled.div`
  padding: 25px 0;
`

const MoviesTitle = styled(Link)`
  color: #FFFFFF;
  font-family: 'Raleway-Bold';
  font-size: 22px;
  line-height: 26px;
  display: inline-block;
  margin-bottom: 40px;
  padding-left: 100px;

  span {
    margin-left: 20px;
  }
`

const SwiperWrapper = styled(Swiper)`
  padding: 0 100px;
  user-select: none;

  & .swiper-button-prev, & .swiper-button-next { 
    opacity: 1;
    color: #FFFFFF;
    cursor: pointer;

    &.swiper-button-disabled {
      display: none;
    }
    
    ::after{
      font-size: 25px;
      font-weight: 700;
    }
  }
`



const SliderItem = styled(SwiperSlide)`
  height: 462px;
  transition: 0.3s;
  position: relative;
  &:hover {
    opacity: 0.5; 
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`

const SliderItemTitle = styled.h2`
  position: absolute;
  bottom: 20px;
  color: #FFFFFF;
  width: 100%;
  text-align: center;
  font-family: 'Raleway-Bold';
`

const AllMoviesLink = styled(Link)`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    border: 1px solid #000000;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 20px;
    line-height: 100%;
    font-family: 'Raleway-Bold';
`

const Serial: FC = () => {
  const dispatch = useAppDispatch()
  const result = useAppSelector(state => state.serial.list)
  const { loading } = useAppSelector(state => state.serial)
  const { results } = useAppSelector(state => state.serials.list)
  const [serialInfo, setSerialInfo] = useState<ResultsTypes | null>(null)
  const [openMovieInfo, setOpenMovieInfo] = useState<boolean>(false)

  useEffect(() => {
    dispatch(loadSerials())
    // eslint-disable-next-line
  }, [])

  const handleMovie = (i: number) => {
    setSerialInfo(results[i])
    setOpenMovieInfo(true)
  }


  return (
    <MoviesWrapper>
      <MoviesTitle to='/serials'>Сериалы <span>{'>'}</span></MoviesTitle>
      <SwiperWrapper
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1450: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={25}
        navigation
      >
        {
          results?.map((item, i) => (
            <SliderItem onClick={() => handleMovie(i)} key={item.id}>
              <Link to={'/'}>
                <img src={`${img_original}${item.backdrop_path}`} alt="" />
              </Link>
              <SliderItemTitle>
                {item.name}
              </SliderItemTitle>
            </SliderItem>
          ))
        }
        <SliderItem>
          <AllMoviesLink to={'/films'}>
            Все сериалы
          </AllMoviesLink>
        </SliderItem>
      </SwiperWrapper>
      <MoviesInfo loading={loading} result={result} setOpenMovieInfo={setOpenMovieInfo} openMovieInfo={openMovieInfo} serialInfoItem={serialInfo?.id} />
    </MoviesWrapper>
  )
}

export default Serial