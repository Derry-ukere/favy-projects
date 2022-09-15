import React from "react";
import { Routes, Route } from 'react-router-dom'
import Header from "./Header";
import { Indexone } from "./ScreenOne/IndexOne";
import { IndexTwo } from "./ScreenTwo/IndexTwo";
import IndexThree from './ScreenThree/IndexThree';
import IndexFour from './ScreenFour/IndexFour';
import IndexFive from './ScreenFive/IndexFive';
import IndexSix from './ScreenSix/IndexSix';
// import BottomNavbar from "./BottomNavbar";



function App() {
    return (
        <div className="desktop">
            <>

                <Header />
                <Routes>
                    <Route path="sign-in" element={<Indexone />} />
                    <Route path="films" element={<IndexTwo />} />
                    <Route path="starships" element={<IndexThree />} />
                    <Route path="people" element={<IndexFour />} />
                    <Route path="vehicles" element={<IndexFive />} />
                    <Route path="species" element={<IndexSix />} />
                </Routes>
                {/* <BottomNavbar /> */}
            </>

        </div>
    );

}
export default App;