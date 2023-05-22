import React, { FC, useState, useEffect } from 'react'
import Header from './Header'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { ResultsTypes } from '../types/types'
import axios from 'axios'
import { img_500 } from '../config/config'

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
`

const Left = styled.div`
  
`

const Release = styled.span`
  display: block;
    &:not(:last-child):after {
      content: ', ';
      margin-right: 10px;
  }
`

const Genres = styled.div`
  
`

const GenresSpan = styled.span`
  &:not(:last-child):after {
    content: ', ';
    margin-right: 10px;
    color: #FFFFFF;
  }
`

const FullMovie: FC = () => {
  const { filmsId } = useParams()
  const [movies, setMovies] = useState<ResultsTypes>({})


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
                <span>{movies.release_date?.substring(0, 4)}, </span>
                {

                  movies.genres?.map(genre => (
                    <GenresSpan key={genre.id}>{genre.name}</GenresSpan>
                  ))
                }
              </Genres>
            </Left>
          </MainBlockInfo>
        </MainBlock>
      </Main>
    </>
  )
}

export default FullMovie