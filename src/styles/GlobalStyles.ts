'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:  'Poppins','Open Sans', sans-serif;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  hr {
    opacity: 0.3;
    cursor: pointer;
  }

 


  body {
    background-color: #000;
    color: #FFF
  }

  .toastBody {
  
  font-size: 26px !important;
}
`

export default GlobalStyles
