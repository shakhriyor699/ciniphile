import React, { FC, useState, useEffect } from 'react'
import Header from './Header'
import YouTube, { YouTubeProps } from 'react-youtube';
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { ResultsTypes } from '../types/types'
import axios from 'axios'
import { img_500 } from '../config/config'
import { loadTrailer, selectTrailer } from '../features/Trailer';
import { useAppDispatch, useAppSelector } from '../hooks';
import { loadMovieActors } from '../features/Movie/movieActorsSlice';
import ActorsInfo from '../UI/ActorsInfo';


const opt: YouTubeProps['opts'] = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
}

interface IMainProps {
  isOpen: boolean
}

const Main = styled.main<IMainProps>`
  padding-bottom: 70px;
  position: relative;
  overflow: ${props => props.isOpen ? 'hidden' : 'visible'};
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
  width: 60%;

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
  margin-bottom: 100px;
`

const GenresSpan = styled.span`
  &:not(:last-child):after {
    content: ', ';
    margin-right: 10px;
    color: #FFFFFF;
  }
`
const Right = styled.div`
  width: 40%;

  img {
    width: 400px;
    border-radius: 10px;
  }
`

const YouTubeBlock = styled.div`
    position: absolute;
    background: rgba(0,0,0,.8);
    top: 0;
    left: 0;
    opacity: 1;
    transition: 1s;
    z-index: 99;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    span {
      position: absolute;
      right: 30px;
      top: 30px;
      color: #fff;
      cursor: pointer;
      font-family: Arial;
      font-size: 25px;
    }
`

const Button = styled.button`
    padding: 10px 15px;
    background: #149A03;
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: max-content;
    gap: 15px;
    cursor: pointer;
    
    span {
      font-size: 20px;
      line-height: 1.5;
      color: #fff;
      font-family: 'Raleway-Regular';
    }
`

const ActorsBlock = styled.div`
  width: 100%;
  h2 {
    margin-bottom: 30px;
    color: #fff;
    line-height: 30px;
    font-size: 16px;
    font-family: 'Raleway-Regular';
  }
`

const ActorsBlockItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const BudjetBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 80px;
  width: 100%;
  z-index: 99;
`

const BudjetBlockItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  span {
    font-size: 20px;
    line-height: 30px;
    color: #fff;
    font-family: 'Raleway-Regular';
  }
`

const FullMovie: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { filmsId } = useParams()
  const [movies, setMovies] = useState<ResultsTypes>({})
  const dispatch = useAppDispatch()
  const results = useAppSelector(selectTrailer)
  const key = results ? results.filter(item => item.type === 'Trailer')[0].key : ''
  const { cast } = useAppSelector(state => state.movieActors.list)
  const actorsName = [...cast].splice(0, 6)
  const budgetInfo = [
    {
      name: 'Бюджет',
      info: `$${movies.budget}`
    },
    {
      name: 'Сборы',
      info: `$${movies.revenue}`
    },
    {
      name: 'Статус',
      info: movies.status
    },
    {
      name: 'Исходное название',
      info: movies.original_title
    },
  ]





  console.log(movies);

  useEffect(() => {
    dispatch(loadTrailer({ type: 'movie', id: filmsId }))
    dispatch(loadMovieActors(Number(filmsId)))
  }, [])


  useEffect(() => {
    getMovies()
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'visible'
    }
  }, [isOpen])

  const trailerVideoOpen = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(true)
  }
  const trailerVideoClose = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false)
  }

  const getMovies = async () => {
    const { data } = await axios.get<ResultsTypes>(`https://api.themoviedb.org/3/movie/${filmsId}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`)
    setMovies(data)
  }

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }

  return (
    <>
      <Header />
      <Main isOpen={isOpen}>
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
              <Button onClick={trailerVideoOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                  <path d="M12.5 15.25H0V17.75H12.5V15.25ZM20 5.25H0V7.75H20V5.25ZM0 12.75H20V10.25H0V12.75ZM0 0.25V2.75H20V0.25H0Z" fill="white" />
                </svg>
                <span>Смотреть трейлер</span>
              </Button>
            </Left>
            <Right>
              <img src={`${img_500}${movies.poster_path}`} alt="" />
            </Right>
            <ActorsBlock>
              <h2>В главный ролях</h2>
              <ActorsBlockItems>
                {
                  actorsName && actorsName.map(item => (
                    <ActorsInfo key={item.id} {...item} />
                  ))
                }
              </ActorsBlockItems>
            </ActorsBlock>
          </MainBlockInfo>
          <BudjetBlock>
            {budgetInfo.map(item => (
              <BudjetBlockItem key={item.name}>
                <span>{item.name}</span>
                <span>{item.info}</span>
              </BudjetBlockItem>
            ))}

          </BudjetBlock>
        </MainBlock>
        {isOpen && <YouTubeBlock>
          <YouTube videoId={key} opts={opt} onReady={onPlayerReady} />
          <span onClick={trailerVideoClose}>X</span>
        </YouTubeBlock>}
      </Main>
    </>
  )
}

export default FullMovie