import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import {questions}from './Questions'
import Charts from './Charts'
function CarbonFootprint(props)   {

	
    const backgroundImage = {
        backgroundImage : "url(/images/peach-background.png)",
        height: "1000px",
        position: "fit",
        display: "flex",
        
      };
	 
	 const [currentQuestion, setCurrentQuestion] = useState(0);
	 const [showScore, setShowScore] = useState(false);
	 const [score, setScore] = useState(0);
	 const handleAnswerOptionClick = (Answer) => {
	
		 if (Answer) {
			  
			 setScore(Answer);
			 
		 }
		 if (score > 0) {
			  
			setScore(score +1);
			 Answer = score.toFixed(2)
		} 
		 
		 const nextQuestion = currentQuestion + 1;
		 if (nextQuestion < questions.length) {
			 setCurrentQuestion(nextQuestion);
		 } else {
			 setShowScore(score  );
		 }
		
	 };
	 function refreshPage() {
		window.location.reload(false);
	  }
    return (

		<div style={backgroundImage}  >
		
		<div  className="app-carbon">
		
			{showScore ? (
				<div >
					<p>
					<Charts/>	
					</p>
					<h1 className='score-section-carbon'>
					
					Your total is:  { (showScore*0.93) *100/1000+1.1 +showScore/2} 
					<br/>
					The world average is 4.4
					<br/>
					The Uk average is 14.1
					</h1> 

					
					<button onClick={refreshPage} className="Start-btn">Retake Quiz</button>
					<button  className='Start-btn' >
					<Link to='/Maps' className="map-btn" >
              Maps
              </Link>
					</button>
				
				</div>
				
			) : (
				
				<>
				
					<div className='question-sections'>
					<h2 className="Question-length-carbon" > 
						<span >Question {currentQuestion } </ span  >/{questions.length -1 }
						</h2>
				
						<div className='question-count'>
						<div className='question-carbon'>{questions[currentQuestion].CarbonFootprint} 
						<br/>		
						<p className="messure-carbon">{questions[currentQuestion].CarbonFootprint2} </p>
						</div>

					</div>
					
					<div className='questionaire-carbon'>
					
						</div>
						
                        <div  className="questionaire-carbon">{questions[currentQuestion].questionText}</div>
						
						<div >
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.Answer)} className="Start-btn">{answerOption.answerText}</button>
						))}
						
					</div>
						
				
					</div>
					
				</>
			)}
            
		</div>
        </div>
		
	);
}

export default  CarbonFootprint;
