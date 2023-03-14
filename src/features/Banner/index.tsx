import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import Loader from '../../components/Loader'
import { useAppDispatch, useAppSelector } from '../../hooks'
import BannerItem from './BannerItem'
import { loadUpComingBanner } from './bannerSlice'

const BannerWrapper = styled.div`
  position: relative;
  height: 100vh;
  /* overflow: hidden; */
`


const Banner: FC = () => {
  const [slide, setSlide] = useState<number>(0)
  const dispatch = useAppDispatch()
  const { results } = useAppSelector(state => state.banner.list)
  const { loading } = useAppSelector(state => state.banner)



  useEffect(() => {
    dispatch(loadUpComingBanner())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    let timeOut = setTimeout(handleNextSlide, 10000)

    return () => {
      clearTimeout(timeOut)
    }
    // eslint-disable-next-line
  }, [slide])




  const handleNextSlide = () => {
    if (results.length - 1 === slide) {
      setSlide(0)
    } else {
      setSlide(slide + 1)
    }
  }


  const handleClickNext = () => {
    if (results.length - 1 === slide) {
      setSlide(0)
    } else {
      setSlide(slide + 1)
    }
  }

  return (
    <>
      {loading && <Loader />}
      <BannerWrapper>
        {
          results.map((item, i) => (
            slide === i ?
              <BannerItem
                key={item.id}
                movie={item}
                handleClick={handleClickNext}
                next={results[i + 1 === results.length ? 0 : i + 1]} /> : null
          ))
        }
      </BannerWrapper>
    </>
  )
}

export default Banner