import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(6),
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


function Header1() {
    const classes = useStyles();


    return (
        <div className='header'>
            <AppBar
                position=""

                color="inherit"
            >
                <Toolbar variant='dense'

                >
                    <Typography variant="h6" noWrap
                    >
                        Species
                    </Typography>


                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton color="inherit">
                            <QuestionAnswerIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge >
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Avatar src="/images/leterN.jpg" alt="Image N" />
                    </div>
                </Toolbar >
            </AppBar >
        </div >

    );
}
export default Header1;