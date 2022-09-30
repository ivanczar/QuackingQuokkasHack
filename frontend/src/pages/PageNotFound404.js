import React from 'react'
import sadPuppyPic from "../assets/Sad_Puppy.jpeg";

const PageNotFound404 = () => {
    return (
        <div className="error404-container">
            <h1>ERROR 404 PAGE NOT FOUND</h1>
            <div className="sad-puppy-container">
                <img id="sad-puppy-pic" src={sadPuppyPic} alt="sad puppy" />
            </div>

        </div>
    )
}

export default PageNotFound404
