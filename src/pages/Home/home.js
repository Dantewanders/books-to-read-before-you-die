import React, { Fragment } from 'react'
import Header from '../../components/Header/header'
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import './home.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function Home(props) {
  return (
    <main>
      <Header />  
      <Fragment>    
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginBottom="20px"
        marginTop="20px"
      >
        <Typography
          align="center"
          fontSize="32px"
          fontWeight="bold"
          mb={3}
        ></Typography>
          <Card sx={{ maxWidth: 1000, borderRadius: "25px", opacity: "inherit" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dante's Books to Read Before You Die
            </Typography>
            <Typography variant="body2" color="text.secondary">
           </Typography>
          </CardContent>
        </Card>
        
        </Grid>
      </Fragment>
       
      <Outlet />
    </main>
  )
}

export default Home


 
 