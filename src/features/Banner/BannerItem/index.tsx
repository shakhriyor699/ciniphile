import React, { FC } from 'react'
import styled from 'styled-components'
import banner from '../../../assets/images/banner.png'
import { Container } from '../../../components/Container'

const BannerItemWrapper = styled.div`

`

const BannerItemContent = styled.div`
  
`
const BannerItemTitle = styled.h1`
  

`
const BannerItemText = styled.p`
  

`

const BannerItem: FC = () => {
  return (
    <BannerItemWrapper>
      <img src={banner} alt="banner" />
      <BannerItemContent>
        <Container>
          <BannerItemTitle>Мир Юрского периода: Господство</BannerItemTitle>
          <BannerItemText>После уничтожения острова Нублар динозавры вырвались на свободу и стали полноправными обитателями планеты. Людям удается поддерживать хрупкое равновесие, определяющее мирное сосуществование на Земле. Но как долго человек сможет сохранять...</BannerItemText>
          
        </Container>
      </BannerItemContent>
    </BannerItemWrapper>
  )
}

export default BannerItem