import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GridViewIcon from '@mui/icons-material/GridView';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import Badge from '@material-ui/core/Badge';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'




function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(4),
        height: '6%',

    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    marginRight: theme.spacing(4),
    marginLeft: 0,
    width: '100%',

    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(4),
        width: 'auto',
    },


    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('lg')]: {
            display: 'flex',

        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));


function Header() {
    const classes = useStyles();



    return (
        <div className='header'>
            <AppBar
                position="fixed"
                color="inherit"
            >
                <Toolbar variant='dense'
                >
                    <div role="presentation" onClick={handleClick}>
                        <Grid container>

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                            >

                                <nav>
                                    <Link to='sign-in' className="header-link">

                                        <Grid item lg={4}>

                                            <GridViewIcon />
                                        </Grid>
                                    </Link>
                                </nav>

                            </IconButton>
                            <Breadcrumbs aria-label="breadcrumb">

                                <Typography variant="h5" noWrap marginTop={1} >
                                    <nav>
                                        <Link to='sign-in' className="header-link">

                                            <Grid item lg={15} >
                                                Untitled
                                            </Grid>
                                        </Link>
                                    </nav>
                                </Typography>
                            </Breadcrumbs>

                        </Grid>
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton color="inherit">
                            <OpenInFullIcon />
                        </IconButton>


                        <IconButton color="inherit">
                            <HelpIcon />

                        </IconButton>
                        <IconButton color="inherit">
                            <Badge >
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            edge="end"
                            aria-label="account of current use"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar >
            </AppBar >
        </div >

    );
}
export default Header;