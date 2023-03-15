import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch } from '../../hooks'
import { loadMovies } from './moviesSlice'

const MoviesWrapper = styled.div`
  
`

const MoviesTitle = styled(Link)`
  
`

const Movies: FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadMovies(1))
  })

  return (
    <MoviesWrapper>
      <MoviesTitle to='/films'>Фильмы {'>'}</MoviesTitle>

    </MoviesWrapper>
  )
}

export default Movies