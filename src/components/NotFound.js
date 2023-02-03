import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography>Page not Found</Typography>
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </Box>
  )
}

export default NotFound