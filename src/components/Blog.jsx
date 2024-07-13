import { Button, TextField } from '@mui/material'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <TextField variant='outlined' label='blog name'></TextField><br /><br />
      <TextField variant='outlined' label='Description'></TextField><br /><br />
      <TextField variant='outlined' label='Auther name'></TextField><br/><br></br>
      <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Blog
