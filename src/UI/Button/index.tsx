import styled from "styled-components";
import btnIcon from '../../assets/images/btn-icon.svg'

export const Btn = styled.a`
  background: #149A03;
  border-radius: 10px;
  padding: 15px 20px;
  display: flex;
  column-gap: 10px;
  span {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;
    font-family: 'Raleway-Regular';
  }
`



const Button = () => {
  return (
    <Btn href="">
      <img src={btnIcon} alt="btn-icon" />
      <span>Подробнее</span>
    </Btn>

  )
}

export default Button