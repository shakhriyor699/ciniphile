import { createGlobalStyle } from "styled-components";

import MontserratReg from '../assets/fonts/Montserrat/Montserrat-Regular.ttf'
import MontserratBold from '../assets/fonts/Montserrat/Montserrat-Bold.ttf'
import MontserratBoldItalic from '../assets/fonts/Montserrat/Montserrat-BoldItalic.ttf'
import MontserratLight from '../assets/fonts/Montserrat/Montserrat-Light.ttf'
import RalewayBold from '../assets/fonts/Raleway/Raleway-Bold.ttf'
import RalewayRegular from '../assets/fonts/Raleway/Raleway-Regular.ttf'


const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Montserrat-Regular';
  src: url(${MontserratReg})   
}
@font-face {
  font-family: 'Montserrat-Bold';
  src: url(${MontserratBold})     
}
@font-face {
  font-family: 'Montserrat-BoldItalic';
  src: url(${MontserratBoldItalic})  
}
@font-face {
  font-family: 'Montserrat-Light';
  src: url(${MontserratLight})     
}
@font-face {
  font-family: 'Raleway-Bold';
  src: url(${RalewayBold})     
}
@font-face {
  font-family: 'Raleway-Regular';
  src: url(${RalewayRegular})     
}
`;


export default FontStyles;
