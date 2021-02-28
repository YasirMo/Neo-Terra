import React from 'react'
import '../../../Styles/Solutions.css'

const Solutions = (props) => {
    const  HandleSolutions =()=>{
        
        if (props.finalScore < 10 ){
            return window.location.href = "/firstSolutions";
        } else{
            return window.location.href = "/secondSolutions";
        }
    }
    return (
        <div>
           <button onClick={HandleSolutions} className='Solutions-btn'> Solutions </button>
        </div>
    )
}

export default Solutions
