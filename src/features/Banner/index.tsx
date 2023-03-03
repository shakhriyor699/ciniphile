import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../hooks'
import BannerItem from './BannerItem'
import { loadUpComingBanner } from './bannerSlice'

const BannerWrapper = styled.div`
  
`


const Banner: FC = () => {
  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(loadUpComingBanner())
  }, [])


  return (
    <BannerWrapper>
      <BannerItem />
    </BannerWrapper>
  )
}

export default Banner