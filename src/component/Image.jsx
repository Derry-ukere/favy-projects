import React from 'react';

function Image() {
    return (
        <div>
            <div className='star'>
                <h1>welcome to star war the clone war</h1>

                <img src="/images/star_war.png" alt="star" className='star_war' />
            </div>
            <div className='Rectangle'>
                <img
                    src="/images/Rectangle.png" alt="rectangle" className="Rectangle" />
            </div>
            <div className='image'>
                <img src="/images/Astronaut.png" alt="astronaut" />

            </div>
        </div>

    );
}
export default Image;