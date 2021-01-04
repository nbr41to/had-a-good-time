import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <HeaderStyled>
      <h1>Had a good time!!</h1>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  background-color: orange;
  padding: 8px 24px;
  h1 {
    color: white;
  }
`
