import { Box, IconButton, Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import ImageIcon from '@mui/icons-material/Image'

const TextField = styled.input`
  border:none ;

`



const Send = () => {

  const [text, setText] = useState('')
  const [upload, setUpload] = useState('')

  const handleText = e => {
    setText(e.target.value)
  }

  const handleImage = e => {
    setUpload(e.target.files[0])
  }




  return (
    <Box >
      <TextField
        type='text'
        value={text}
        onChange={handleText}
      />
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <ImageIcon />
      </IconButton>
      <Button variant='contained'>Send</Button>
    </Box>
  )
}

export default Send