import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import styled from 'styled-components'
import Send from './Send'

const Lists = styled.div`
  height: calc(100% - 60px - 60px);
  background-color:#F0FFF0;
  overflow-y:auto;
  ::-webkit-scrollbar {
    display: none;
}
`

const Messages = () => {
  return (
    <Box sx={{ width: '100%', height: '60vh' }}>
      <Box sx={{ height: '60px', backgroundColor: '#87CEFA' }}>
        <Typography>Name</Typography>
      </Box>
      <Lists >
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
        <Typography>Messages</Typography>
      </Lists>
      <Box sx={{ height: '60px', backgroundColor: '#whites' }}>
        <Send />
      </Box>
    </Box>
  )
}

export default Messages