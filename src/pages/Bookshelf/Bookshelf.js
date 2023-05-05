import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { Grid } from '@mui/material'
function Bookshelf(props) {
  return (
    <Grid item xs={12} sm={4} >
    <Card sx={{ maxWidth: 300, borderRadius: "5px", mb: "20px", boxShadow:"0px 10px 10px" , alignItems:"center" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" alignContent="center" >
             Coming Soon
            </Typography>
          </CardContent>
        </Card>
    </Grid>
  )
}

export default Bookshelf