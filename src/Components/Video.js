import React from 'react'
import './Video.css'


function Video() {
    return (

        <div className ="video">
           
                <video src = '/videos/Climate.mp4'  autoPlay loop muted/>
        </div>
       
   
    )
}

export default Video
