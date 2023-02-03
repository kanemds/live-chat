
import { Box, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import './App.css'
import FriendList from './components.js/FriendList'
import Messages from './components.js/Messages'
import { useEffect, useRef } from 'react'
import { render } from '@testing-library/react'

function App() {

  const num = useRef(0)

  useEffect(() => {
    num.current++
  }, [])

  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography>main app render: {num.current}</Typography>
      <Box >
        <Paper sx={{ width: '80vw', height: '80vh' }}>
          <Grid container>
            <Grid xs={4}>
              <FriendList />
            </Grid>
            <Grid xs={8}>
              <Messages />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box >
  )
}

export default App
