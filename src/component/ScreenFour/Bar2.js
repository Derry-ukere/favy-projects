import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Typography, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@material-ui/core";



export default function Selectheader() {
    const navigate = useNavigate()


    return (
        <div className='header'>
            <AppBar
                position=""

                color="inherit"
            >
                <Toolbar variant='dense'>




                    <Grid container>
                        <Grid item lg={0}>
                            <BottomNavigation>
                                <BottomNavigationAction icon={<NavigateBeforeIcon onClick={() => navigate(-1)} />} />
                            </BottomNavigation>
                        </Grid>
                        <Grid item lg={2}>
                            <Typography variant="h5" noWrap marginTop={2}>
                                Back
                            </Typography>
                        </Grid>
                    </Grid>

                    <Button
                        className='searchbutton'
                        endIcon={<SearchIcon />}
                        size='large'
                        variant='contained'
                    >
                        Search for people
                    </Button>


                </Toolbar >
            </AppBar >
        </div >

    );
}