// import React from 'react';
import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



const BottomNavbar = () => {
    const initialcount = 1
    // const maximumcount = 6
    const [count, setCount] = useState(initialcount);

    // const maximumcount = () => {
    //     for (let i = 1; i <= 7; i++) {
    //         setCount(prevcount => prevcount + 1)
    //     }
    // }

    return (
        <BottomNavigation
            xs={{ Width: '100%', position: 'fixed', bottom: 0 }}
        >
            <BottomNavigationAction icon={<HomeIcon />} />
            <BottomNavigationAction icon={<NavigateBeforeIcon onClick={() => setCount(prevcount => prevcount - 1)} />} />
            <h3> {count} of 6 </h3>
            <BottomNavigationAction icon={<NavigateNextIcon onClick={() => setCount(prevcount => prevcount + 1)} />} />
        </BottomNavigation>

    );
}
export default BottomNavbar;