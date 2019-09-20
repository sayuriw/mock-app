import  React, { useState } from 'react'
import styled from 'styled-components/macro'


const PasswordInput = () => {
  const [password, setPassword] = useState('')
  const onPasswordChange = event => {
    setPassword(event.currentTarget.value)
    console.log(password)
  }
  return (
  <InputStyled 
    onChange={onPasswordChange} 
    passwordLength={password.length}
    type="password" 
    value={password}>
    </InputStyled>
    )
  }

  const getHue = (number) => {
    const degrees = number * 10
    return Math.min(degrees, 120)
  } 


const InputStyled = styled.input`
border: 2px solid hotpink;
margin-top: 30px;
padding: 5px;

 :focus{
background-color: hsl(${props => getHue(props.passwordLength)}, 80%, 80% )
}
`

export default PasswordInput