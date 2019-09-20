import styled from 'styled-components/macro'
//import React from 'react'

const Button = styled.button`
  padding: 10px;
  font-size: 24px;
  border-radius: 10%;
  background-color: ${props => props.color};
  :hover { background: lightpink;}
  `

export default Button

// const Button = props => (
// <ButtonStyled>{props.children}</ButtonStyled>
// )

// const ButtonStyled = styled.button`
//   font-size: 24px;
//   `

  // export default Button