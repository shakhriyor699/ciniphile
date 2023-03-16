import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { loadMovies } from './moviesSlice'
import { img_500 } from '../../config/config';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const MoviesWrapper = styled.div`
  
`

const MoviesTitle = styled(Link)`
  
`

const Movies: FC = () => {
  const dispatch = useAppDispatch()
  const { results } = useAppSelector(state => state.movie.list)

  console.log(results);


  useEffect(() => {
    dispatch(loadMovies())
  }, [])

  return (
    <MoviesWrapper>
      <MoviesTitle to='/films'>Фильмы {'>'}</MoviesTitle>
      <Swiper
        modules={[Navigation]}
        spaceBetween={25}
        navigation
      >

        {
          results?.map((item, i) => (
            <SwiperSlide key={item.id}>
              <img src={`${img_500}${item.backdrop_path}`} alt="" />
            </SwiperSlide>
          ))
        }


      </Swiper>
    </MoviesWrapper>
  )
}

export default Movies