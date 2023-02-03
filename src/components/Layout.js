import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Paper, Typography } from '@mui/material'

const Layout = () => {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey' }}>
      <Outlet />
    </Box >
  )
}

export default Layout