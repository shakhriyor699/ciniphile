import React, { FC } from 'react'
import styled from 'styled-components'
import { img_original } from '../../config/config'

const ActorsInfoBlock = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
  border: 1px solid #fff;
  border-radius: 25px;

  img {
    width: 45px;
    height: 50px;
    border-radius: 50px;
    object-fit: cover;
  }
`
const ActorName = styled.span`
  font-size: 16px;
  line-height: 30px;
  color: #fff;
  margin-left: 10px;
  font-family: 'Raleway-Regular';
`
interface IActorsInfo {
  original_name: string
  profile_path: string
}

const ActorsInfo: FC<IActorsInfo> = ({ original_name, profile_path }) => {

  return (
    <ActorsInfoBlock>
      <img src={`${img_original}${profile_path}`} alt="" loading='lazy' />
      <ActorName>{original_name}</ActorName>
    </ActorsInfoBlock>
  )
}

export default ActorsInfo