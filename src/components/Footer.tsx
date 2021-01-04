import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <FooterStyled>
      <small>copyright 2021 nob</small>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  background-color: orange;
  padding: 8px 24px;
  small {
    color: white;
    text-align: center;
  }
`
