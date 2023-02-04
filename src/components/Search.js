import * as React from 'react'
import { Box } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import DirectionsIcon from '@mui/icons-material/Directions'

const Search = () => {
  return (
    <Box
      component="form"
      sx={{ height: '40px', p: '1px 1px', display: 'flex', alignItems: 'center' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Find Friend"
        inputProps={{ 'aria-label': 'Find Friend' }}
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Box>
  )
}

export default Search