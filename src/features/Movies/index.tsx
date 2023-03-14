import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MoviesWrapper = styled.div`
  
`

const MoviesTitle = styled(Link)`
  
`

const Movies: FC = () => {
  return (
    <MoviesWrapper>
      <MoviesTitle to='/films'>Фильмы {'>'}</MoviesTitle>

    </MoviesWrapper>

  )
}

export default Movies