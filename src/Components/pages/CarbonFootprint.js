import React from 'react'


function CarbonFootprint() {
    const backgroundImage = {
        backgroundImage : "url(/images/trees1.jpg)",
        height: "1000px",
        position: "fit",
		display: "flex",
	  };
    return (
        <div>
             <div style={backgroundImage}  ></div>
            
        </div>
        
    )
}

export default  CarbonFootprint;
