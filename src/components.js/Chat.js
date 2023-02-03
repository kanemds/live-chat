import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import FriendList from './FriendList'
import Messages from './Messages'

const Chat = () => {
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
    </Paper>
  )
}

export default Chat