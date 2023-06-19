import React, { FC, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import ActorsInfo from '../UI/ActorsInfo'
import Button from '../UI/Button'
import { CSSTransition } from 'react-transition-group';

import { ResultsTypes } from '../types/types'
import { img_original } from '../config/config';
import { loadMovie } from '../features/Movie/movieSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { loadSerial } from '../features/Serial/serialSlice';
import { loadMovieActors } from '../features/Movie/movieActorsSlice';



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
      z-index: 100;
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
    width: 60%;
    z-index: -1;
`
const MoviesInfoItem = styled.div`
   height: 100%;
   position: relative;
  z-index: 99;
  background: linear-gradient(90deg, #000000 2.2%, rgba(0,0,0, 0.2) 70.82%, rgba(0,0,0,0) 80.73%);  
`

const MoviesInfoContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-left: 50px;

  h3 {
    color: #FFFFFF;
    font-size: 50px;
    line-height: 59px;
    font-family: 'Raleway-Bold';
  }

  p {
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;
    font-family: 'Raleway-Regular';
  }
`

const AboutMoviesBlock = styled.div`
    font-size: 20px;
    line-height: 30px;
    color: hsla(0,0%,100%,.6);
    font-family: 'Montserrat-Bold';
    display: flex;
    align-items: center;
    column-gap: 30px;
`

const ActorsBlock = styled.div`
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`

const Transitions = styled(CSSTransition)`
  &.enter {
  opacity: 0;
  transform: scale(0.9);
}
&.enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 300ms, transform 300ms;
}
&.exit {
  opacity: 1;
}
&.exit-active {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 300ms, transform 300ms;
}
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
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

interface IProps {
  movieInfoItem?: number | undefined
  serialInfoItem?: number | undefined
  openMovieInfo?: boolean
  setOpenMovieInfo: React.Dispatch<React.SetStateAction<boolean>>
  result: ResultsTypes,
  loading: boolean,
  page: string
}

const MoviesInfo: FC<IProps> = ({ page, result, loading, movieInfoItem, serialInfoItem, openMovieInfo, setOpenMovieInfo }) => {

  const dispatch = useAppDispatch()
  const { cast } = useAppSelector(state => state.movieActors.list)
  const actorsName = [...cast].splice(0, 4)


  useEffect(() => {
    if (openMovieInfo) {
      dispatch(loadMovie(movieInfoItem))
      dispatch(loadMovieActors({ movieId: movieInfoItem, type: 'movie' }))
    }
    // eslint-disable-next-line
  }, [movieInfoItem])

  useEffect(() => {
    if (openMovieInfo) {
      dispatch(loadSerial(serialInfoItem))
      dispatch(loadMovieActors({ movieId: serialInfoItem, type: 'tv' }))
    }
  }, [serialInfoItem])

  const handleClose = () => {
    setOpenMovieInfo(false)
  }

  return (
    <Transitions
      in={openMovieInfo}
      timeout={500}
      unmountOnExit
    >
      <MoviesInfoWrapper>
        {loading &&
          <Loader>
            <span></span>
          </Loader>}
        <CloseButton onClick={handleClose}>X</CloseButton>
        <MoviesInfoBlock>
          <MainImg src={`${img_original}${result.backdrop_path}`} alt="" />
          <MoviesInfoItem>
            <MoviesInfoContent>
              <h3>{result.title || result.name}</h3>
              <p>{result.overview}</p>
              <AboutMoviesBlock>
                <span>{result.release_date?.substring(0, 4) || result.first_air_date?.substring(0, 4)}, {result.genres?.map(item => (
                  <span key={item.id}>{item.name ? item.name + ',' : ''} </span>
                ))}</span>
              </AboutMoviesBlock>
              <ActorsBlock>
                {
                  actorsName.map(item => (
                    <ActorsInfo key={item.id} {...item} />
                  ))
                }
              </ActorsBlock>
              <Button page={page} id={result.id} />
            </MoviesInfoContent>
          </MoviesInfoItem>
        </MoviesInfoBlock>
      </MoviesInfoWrapper>
    </Transitions>
  )
}

export default MoviesInfo