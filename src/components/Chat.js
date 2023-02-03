import React from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import FriendList from './FriendList'
import Messages from './Messages'
import { useNavigate } from 'react-router-dom'

const Chat = () => {

  const navigate = useNavigate()

  return (
    <Paper sx={{ width: '60%', height: '60vh' }}>
      <Grid container >
        <Grid xs={4}>
          <FriendList />
        </Grid>
        <Grid xs={8}>
          <Messages />
        </Grid>
      </Grid>
      <Button onClick={() => navigate('/login')}>Login</Button>
      <Button onClick={() => navigate('/register')}>Register</Button>
    </Paper>
  )
}

export default Chat