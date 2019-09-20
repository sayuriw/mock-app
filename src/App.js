import React from 'react';
import Headline from './components/Headline';
import Button from './components/Button';
import SpecialButton from './components/SpecialButton'
import Grid from './components/Grid'
import PasswordInput from './components/PasswordInput';
import GlobalStyles from './components/GlobalStyles'


function App() {
  return (
    <>
    <GlobalStyles />
      <Grid>
         <Headline size="XL">Hello all!</Headline>
         <Button color="yellow">Click me</Button>
         <SpecialButton>Click me too!</SpecialButton>
         <PasswordInput/>
      </Grid>
    </>
    )   
  }

export default App;
