import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import ActorsInfo from '../UI/ActorsInfo'
import Button from '../UI/Button'
import { CSSTransition } from 'react-transition-group';



import { ResultsTypes } from '../types/types'
import { img_original } from '../config/config';
import { loadMovie } from '../features/Movie/movieSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

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

interface IProps {
  movieInfoItem?: number | undefined
  openMovieInfo?: boolean
  setOpenMovieInfo: React.Dispatch<React.SetStateAction<boolean>>
}

const MoviesInfo: FC<IProps> = ({ movieInfoItem, openMovieInfo, setOpenMovieInfo }) => {

  const dispatch = useAppDispatch()
  const results = useAppSelector(state => state.movie.list)


  console.log(results.genres);

  useEffect(() => {
    dispatch(loadMovie(movieInfoItem))
    // eslint-disable-next-line
  }, [movieInfoItem])

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
        <CloseButton onClick={handleClose}>X</CloseButton>
        <MoviesInfoBlock>
          <MainImg src={`${img_original}${results.backdrop_path}`} alt="" />
          <MoviesInfoItem>
            <MoviesInfoContent>
              <h3>{results.title}</h3>
              <p>{results.overview}</p>
              <AboutMoviesBlock>
                <span>{results.release_date?.substring(0, 4)}, {results.genres?.map(item => (
                  <span key={item.id}>{item.name},</span>
                ))}</span>

              </AboutMoviesBlock>
              <ActorsBlock>
                <ActorsInfo />
              </ActorsBlock>
              <Button />
            </MoviesInfoContent>
          </MoviesInfoItem>
        </MoviesInfoBlock>
      </MoviesInfoWrapper>
    </Transitions>
  )
}

export default MoviesInfo