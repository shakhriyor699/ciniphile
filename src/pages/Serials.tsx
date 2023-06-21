import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Container } from '../components/Container'
import { useAppDispatch, useAppSelector } from '../hooks'
import { loadSerials, selectSerials } from '../features/Serials/serialsSlice'
import { img_original } from '../config/config'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FilmsMain = styled.main`
  margin-top: 140px;
  padding-bottom: 90px;
`

const FilmsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 25px;
    margin-top: 50px;

    @media(max-width: 992px) {
      grid-template-columns: repeat(3,1fr);
    }
    @media(max-width: 760px) {
      grid-template-columns: repeat(2,1fr);
    }
    @media(max-width: 520px) {
      grid-template-columns: repeat(1,1fr);
    }
`

const FilmsTitle = styled.h1`
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  font-family: 'Raleway-Bold';
`

const FilmsItem = styled(Link)`
    min-height: 450px;
    position: relative;
    display: flex;
    flex-direction: column;
    background: linear-gradient(358.77deg,#000000 .69%,rgba(0,0,0,.723958) 37.71%,rgba(0,0,0,0) 72.49%);
    border-radius: 10px;
    border: 1px solid #000000;
    overflow: hidden;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 15px;
    img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -2;
    }

    span {
      font-size: 16px;
      line-height: 19px;
      font-family: 'Raleway-Regular';
      color: #FFFFFF;
    }
`

const Serials = () => {
  const [pageCount, setPageCount] = useState(1)
  const [loading, setLoading] = useState(true)
  const dispatch = useAppDispatch()
  const results = useAppSelector(selectSerials)
  const [items, setItems] = useState(results)

  useEffect(() => {
    setItems(results)
    if (loading) {
      dispatch(loadSerials(pageCount))
      setItems([...items, ...results])
      setPageCount(pageCount + 1)
    }
    setLoading(false)
  }, [results, loading])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.addEventListener('scroll', scroollHandler)
    return () => {
      document.removeEventListener('scroll', scroollHandler)
    }
  }, [])

  const scroollHandler = (e: any) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setLoading(true)
    }
  }


  return (
    <div>
      <Header />
      <FilmsMain>
        <Container>
          <FilmsTitle>Все фильмы</FilmsTitle>
          <FilmsContent>
            {
              items.map(movie => (
                <FilmsItem to={`/serials/${movie.id}`} key={movie.id}>
                  <img src={`${img_original}${movie.poster_path}`} alt="" loading='lazy' />
                  <span>{movie.title}</span>
                </FilmsItem>
              ))
            }
            {loading && <div>LOADING</div>}
          </FilmsContent>
        </Container>
      </FilmsMain>
    </div>
  )
}

export default Serials