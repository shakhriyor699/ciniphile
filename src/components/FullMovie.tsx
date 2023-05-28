import React, { FC, useState, useEffect } from 'react'
import Header from './Header'
import YouTube, { YouTubeProps } from 'react-youtube';
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { ResultsTypes } from '../types/types'
import axios from 'axios'
import { img_500 } from '../config/config'


const opt: YouTubeProps['opts'] = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
}

const Main = styled.main`
  padding-bottom: 70px;
`

const MainBlock = styled.div` 
    min-height: 700px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    margin-top: 90px;

    & > img {
      position: absolute;
      right: 0;
      top: 0;
      object-fit: cover;
      height: 100%;
      width: 60%;
      filter: blur(10px);
    }
`

const MainBlockInfo = styled.div`
  background: linear-gradient(90deg,#000 20%,rgba(0,0,0,.2) 60%,transparent 65%);
  padding: 30px 50px;
  width: 100%;
  position: relative;
  min-height: 700px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 30px;
`

const Left = styled.div`
  

  h1 {
    font-size: 50px;
    line-height: 59px;
    color: #FFFFFF;
    font-family: 'Raleway-Bold';
  }
  p {
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;
    font-family: 'Raleway-Regular';
    max-width: 935px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 25px;
  }
`

const Release = styled.span`
  font-size: 20px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Montserrat-Bold';
    &:not(:last-child):after {
      content: ', ';
      margin-right: 10px;
  }
`

const Genres = styled.div`
  font-size: 20px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Montserrat-Bold';

`

const GenresSpan = styled.span`
  &:not(:last-child):after {
    content: ', ';
    margin-right: 10px;
    color: #FFFFFF;
  }
`
const Right = styled.div`
  
`

const FullMovie: FC = () => {
  const { filmsId } = useParams()
  const [movies, setMovies] = useState<ResultsTypes>({})

  console.log(movies);



  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const { data } = await axios.get<ResultsTypes>(`https://api.themoviedb.org/3/movie/${filmsId}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`)
    setMovies(data)
  }

  return (
    <>
      <Header />
      <Main>
        <MainBlock>
          <img src={`${img_500}${movies.backdrop_path}`} alt="" />
          <MainBlockInfo>
            <Left>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <Genres>
                <Release>{movies.release_date?.substring(0, 4)}</Release>
                {

                  movies.genres?.map(genre => (
                    <GenresSpan key={genre.id}>{genre.name}</GenresSpan>
                  ))
                }
              </Genres>
            </Left>
            <Right>
              <img src={`${img_500}${movies.poster_path}`} alt="" />
            </Right>
          </MainBlockInfo>
        </MainBlock>
      </Main>
    </>
  )
}

export default FullMovie