import React, { FC } from 'react'
import styled from 'styled-components'
import BannerItem from './BannerItem'

const BannerWrapper = styled.div`
  
`


const Banner: FC = () => {
  return (
    <BannerWrapper>
      <BannerItem />
    </BannerWrapper>
  )
}

export default Banner