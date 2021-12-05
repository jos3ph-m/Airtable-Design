import React from 'react'
import { createGlobalStyle } from 'styled-components'
// provider

const GlobalStyle = createGlobalStyle`
h2{
  color:red;
  font-size:4rem;
}
`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}
