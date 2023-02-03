import React, { useState, useEffect } from 'react'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Paper, Box, Button, TextField, Typography, Link } from '@mui/material'


const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()



  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const content = (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper sx={{ width: '100%', maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 3 }}>
        <Typography variant='h5' sx={{ p: 3 }} >Login</Typography>
        <Typography>{error}</Typography>
        <TextField fullWidth autoComplete='off' type='text' label='User Name' variant='outlined' required sx={{ mt: 3 }}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField fullWidth autoComplete='off' type='Password' label='Password' variant='outlined' required sx={{ mt: 3 }}
          onChange={e => setPassword(e.target.value)}
        />

        <Box sx={{ mt: 3 }}>
          <Button disabled={!canSave} onClick={handleSubmit} >Log In</Button>
          <Button><Link to='/' component={RouterLink} underline="none" >Cancel</Link></Button>
        </Box>

      </Paper>
    </Box>
  )

  return content
}

export default Login