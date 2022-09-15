import React from 'react'
import { Grid, Card } from '@mui/material'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';




const sideBar = () => {
    return (
        <div className='sidebar'>

            <Grid container justifyContent='right'>
                <Grid item>
                    <Card className='sidecard-vehicle'>
                        <Grid container className='Gcontainer'>
                            <Grid item lg={1.5} marginTop={2}>
                                <DashboardIcon />
                            </Grid>
                            <Grid item lg={10} >
                                <nav>
                                    <Link to='/films' className='card-link'>
                                        <Typography variant="h5" noWrap>
                                            Dashboard</Typography>
                                    </Link>
                                </nav>
                            </Grid>

                            <Grid container className='Gcontainer-2'>
                                <Grid item lg={2} marginTop={2}>
                                    <LocalActivityIcon />
                                </Grid>
                                <Grid item lg={10}>
                                    <nav>
                                        <Link to='/starships' className='card-link'>
                                            <Typography variant="h5" noWrap>
                                                Starships</Typography>
                                        </Link>

                                    </nav>
                                </Grid>

                            </Grid>
                            <Grid container className='Gcontainer-2'>
                                <Grid item lg={2} marginTop={2} >
                                    <PeopleIcon />
                                </Grid>
                                <Grid item lg={10}>
                                    <nav>
                                        <Link to='/people' className='card-link'>
                                            <Typography variant="h5" noWrap>
                                                People</Typography>
                                        </Link>
                                    </nav>
                                </Grid>

                            </Grid>
                            <Grid container className='Gcontainer-2'>
                                <Grid item lg={2} marginTop={2}>
                                    <DriveEtaIcon />
                                </Grid>
                                <Grid item lg={10}>
                                    <nav>
                                        <Link to='/vehicles' className='card-link'>
                                            <Typography variant="h5" noWrap>
                                                Vehicles  </Typography>
                                        </Link>
                                    </nav>
                                </Grid>

                            </Grid>
                            <Grid container className='Gcontainer-2'>
                                <Grid item lg={2} marginTop={2}>
                                    <ViewComfyIcon />

                                </Grid>
                                <Grid item>
                                    <nav>
                                        <Link to='/species' className='card-link'>
                                            <Typography variant="h5" noWrap>
                                                Species </Typography>
                                        </Link>
                                    </nav>
                                </Grid>

                            </Grid>

                        </Grid>

                    </Card>
                </Grid>
                <Grid item >
                    <Card className='sidecardvehicle-1' />
                </Grid>

            </Grid>
        </div>

    )
}
export default sideBar;