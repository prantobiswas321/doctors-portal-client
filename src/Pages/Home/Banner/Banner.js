import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    height: 400,
    alignItems: 'center'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, laborum quia sapiente error delectus minus ipsa nesciunt quae ipsum labore!
                        </Typography>
                        <Button style={{ backgroundColor: '#5CE7ED' }} variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;