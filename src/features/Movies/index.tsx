import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { loadMovies } from './moviesSlice'
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



const SliderItem = styled(SwiperSlide)`
  height: 462px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`

const Movies: FC = () => {
  const dispatch = useAppDispatch()
  const { results } = useAppSelector(state => state.movie.list)

  console.log(results);


  useEffect(() => {
    dispatch(loadMovies())
    // eslint-disable-next-line
  }, [])

  return (
    <MoviesWrapper>
      <MoviesTitle to='/films'>Фильмы <span>{'>'}</span></MoviesTitle>
      <Swiper
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
            <SliderItem key={item.id}>
              <Link to={'/'}>
                <img src={`${img_original}${item.backdrop_path}`} alt="" />
              </Link>
            </SliderItem>
          ))
        }
        <SliderItem>
          asd
        </SliderItem>
      </Swiper>
    </MoviesWrapper>
  )
}

export default Movies