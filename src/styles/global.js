import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #191920 url(${background}) no-repeat;
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button{
    font: 14px sans-serif;
  }
  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
    height: 100%;
  }
  button{
    cursor: pointer
  }
`;

export default GlobalStyle;
