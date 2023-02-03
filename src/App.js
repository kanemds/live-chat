

import { Box, Paper, Typography } from '@mui/material'
import Chat from './components.js/Chat'



function App() {


  return (
    <Box sx={{ minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey' }}>
      <Chat />
    </Box >
  )
}

export default App
