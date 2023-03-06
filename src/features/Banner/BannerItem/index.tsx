import React, { FC } from 'react'
import styled from 'styled-components'
import banner from '../../../assets/images/banner.png'
import Button from '../../../UI/Button'

const BannerItemWrapper = styled.div`
  height: 100%;


`
const Img = styled.img`
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%; 
    object-fit: cover;
    z-index: -99;
`

const BannerItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`

const BannerItemContent = styled.div`
  background: rgba(20, 20, 20, 0.76);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const BannerItemTitle = styled.h1`
  font-size: 80px;
  line-height: 120%;
  color: #FFFFFF;
  font-family: 'Raleway-Bold';
  text-align: center;
`
const BannerItemText = styled.p`
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #FFFFFF;
  font-family: 'Raleway-Regular';
  max-width: 960px;
  width: 100%;
`

const BannerItem: FC = () => {
  return (
    <BannerItemWrapper>
      <Img src={banner} alt="banner" />
      <BannerItemContent>
          <BannerItemInfo>
            <BannerItemTitle>Мир Юрского периода: Господство</BannerItemTitle>
            <BannerItemText>После уничтожения острова Нублар динозавры вырвались на свободу и стали полноправными обитателями планеты. Людям удается поддерживать хрупкое равновесие, определяющее мирное сосуществование на Земле. Но как долго человек сможет сохранять...</BannerItemText>
            <Button /> 
          </BannerItemInfo>
      </BannerItemContent>
    </BannerItemWrapper>
  )
}

export default BannerItem