import * as React from 'react'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { Typography, Box } from '@mui/material'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))


const Friend = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ maxWidth: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/13766768/pexels-photo-13766768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      </StyledBadge>
      <Box component="div"
        sx={{
          textOverflow: 'ellipsis',
          overflow: 'hidden'
        }}>Ada testing overflow aaaaaaaaaaaaaaaa</Box>
    </Stack>
  )
}

export default Friend