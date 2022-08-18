// import React from 'react';
import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const BottomNavbar= () => {
    const [value, setValue] = useState(0)


    return (
        <BottomNavigation
            sx={{ width: '100%', position: 'absolute', bottom: 0 }}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
            }}
        >
            <BottomNavigationAction icon={<HomeIcon />} />
            <BottomNavigationAction icon={<NavigateBeforeIcon />} />
            <h3>1 of 6</h3>
            <BottomNavigationAction icon={<NavigateNextIcon />} />

        </BottomNavigation >
    );
}
export default BottomNavbar;