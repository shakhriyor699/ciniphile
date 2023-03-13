import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
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




  useEffect(() => {
    dispatch(loadUpComingBanner())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setTimeout(handleNextSlide, 10000)
    // eslint-disable-next-line
  }, [slide])



  const handleNextSlide = () => {
    if (results.length - 1 === slide) {
      setSlide(0)
    } else {
      setSlide(slide + 1)
    }
  }


  return (
    <BannerWrapper>
      {
        results.map((item, i) => (
          slide === i ?
            <BannerItem key={item.id} movie={item} slide={slide} next={results[i + 1 === results.length ? 0 : i + 1]} /> : null
        ))
      }

    </BannerWrapper>
  )
}

export default Banner