import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Friend from './Friend'
import Search from './Search'

const Lists = styled.div`
  height: calc(100% - 60px - 40px);
  background-color: #87CEEB;
  overflow-y:auto;
  ::-webkit-scrollbar {
    display: none;
}
`


const FriendList = () => {

  return (
    <Box sx={{ width: '100%', height: '60vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Box sx={{ height: '60px', backgroundColor: '#4682B4' }}>
        <Typography>Chat Now</Typography>
      </Box>
      <Search />
      <Lists >
        <Typography >name</Typography>
        <Friend />
      </Lists>
    </Box>
  )
}

export default FriendList