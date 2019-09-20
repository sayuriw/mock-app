import React from 'react';
import Headline from './components/Headline';
import Button from './components/Button';
import SpecialButton from './components/SpecialButton'
import Grid from './components/Grid'


function App() {
  return (
      <Grid>
         <Headline size="XL">Hello all!</Headline>
         <Button color="yellow">Click me</Button>
         <SpecialButton>Click me too!</SpecialButton>
      </Grid>
    )   
  }

export default App;
