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
                <IconButton

                    color="inherit"
                    aria-label="open drawer">

                    <GridViewIcon />
                </IconButton>

                <Typography variant="h6" noWrap>
                    Untitled
                </Typography>

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