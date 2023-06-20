import React, { FC, useCallback, useEffect, useState } from 'react'
import Header from '../components/Header'
import { Container } from '../components/Container'
import styled from 'styled-components'
import axios from 'axios'
import { IMovie, ResultsTypes } from '../types/types'
import debounce from 'lodash.debounce'
import { Link } from 'react-router-dom'
import { img_original } from '../config/config'
import Loader from '../components/Loader'

const SearchBlock = styled.div`
    margin-top: 120px;
`

const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 20px;
  outline: none;
  font-size: 18px;
  line-height: 21px;
  font-family: 'Raleway-Bold';
  color: #141414;

  &::placeholder {
    line-height: 21px;
    font-family: 'Raleway-Bold';
    color: #141414;
  }
`

const SearchBlockItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 25px;
    margin-top: 50px;
`

const SearchBlockItem = styled(Link)`
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

const Search: FC = () => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState<ResultsTypes[]>([])

  const updateValue = useCallback(
    debounce((str: string) => {
      getSearch(str)
    }, 500),

    []
  )




  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    updateValue(e.target.value)
  }


  const getSearch = async (parametr: string) => {
    setLoading(true)
    const { data } = await axios.get<IMovie>(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=1&query=${parametr}&include_adult=false`)
    setItems(data.results)
    setLoading(false)
  }





  return (
    <div>
      <Header />
      <Container>
        {
          loading && <Loader />
        }
        <SearchBlock>
          <SearchInput value={search} onChange={handleChange} type='text' placeholder='Найти фильм, сериал...' />
          <SearchBlockItems>
            {
              items && items.map((item: ResultsTypes) => (
                <SearchBlockItem to={`${item.media_type === 'tv' ? '/serials' : '/films'}/${item.id}`}>
                  <img src={`${img_original}${item.poster_path}`} alt="" loading='lazy' />
                  <span>{item.title}</span>
                </SearchBlockItem>
              ))
            }
          </SearchBlockItems>
        </SearchBlock>
      </Container>
    </div>
  )
}

export default Search