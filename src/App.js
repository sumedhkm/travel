import React from 'react'
import Stack from '@mui/material/Stack';

import Menu from './Components/Menu';
import RightBar from './Components/RightBar';
import Content from './Components/Content';
import { Box, Container } from '@mui/material';
import Navbar from './Components/Navbar';
 const App = () => {
  return (
    <Box>
    <Navbar/>
    <Container maxWidth="xl">
    <Stack direction="row" spacing={2} justifyContent="space-between">
    <Menu/>
      <Content/>
      <RightBar/>
    
 
    </Stack>
    </Container>
    </Box>
  
  )
}
export default App;