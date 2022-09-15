import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, TextField, MenuItem } from '@mui/material'


export default function Selectheader() {


    return (
        <div className='header'>
            <AppBar
                position=""

                color="inherit"
            >
                <Toolbar variant='dense'>

                    <Box className="select1">
                        <TextField placeholder="Current Year" color='secondary' select fullWidth>
                            <MenuItem value='CY'>Current Year</MenuItem>
                            <MenuItem value='LY'>Last Year</MenuItem>
                            <MenuItem value='TT'>2020</MenuItem>
                            <MenuItem value='TN'>2019</MenuItem>
                            <MenuItem value='TE'>2018</MenuItem>

                        </TextField>
                    </Box>

                    <Box className="select2">
                        <TextField placeholder="Current Week" color='secondary' select fullWidth >
                            <MenuItem value='CW'>Current Week</MenuItem>
                            <MenuItem value='LY'>Last Week</MenuItem>
                            <MenuItem value='TT'>week 20-04/19-04/25</MenuItem>
                            <MenuItem value='TN'>week 20-04/19-04/25</MenuItem>
                            <MenuItem value='TE'>week 20-04/19-04/25</MenuItem>

                        </TextField>
                    </Box>
                </Toolbar >
            </AppBar >
        </div >

    );
}