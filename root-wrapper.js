import React from 'react'
import { createGlobalStyle } from 'styled-components'
// provider

const GlobalStyle = createGlobalStyle`

`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>s
  )
}
