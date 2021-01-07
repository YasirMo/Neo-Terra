import React, { useState } from 'react';
import '../../App.css'
function CarbonFootprint()   {

	
    const backgroundImage = {
        backgroundImage : "url(/images/peach-background.png)",
        height: "1000px",
        position: "fit",
        display: "flex",
        
      };
      
      const questions = [
		
		{
			CarbonFootprint: 'Carbon Footprint Calculator' ,
			answerOptions: [
				{ answerText: 'Start' },
				
			],
		},
		{
			Userinput: '1.	How many people are in your household?',
			answerOptions: [
				{ answerText: '0', Household: 0},
				{ answerText: '1-3', Household: 3},
				{ answerText: '4-5' ,Household:5},
				{ answerText: '6' ,Household: 6},
			],
		},
		{
			questionText: '2.	What type of house do you live in?',
			answerOptions: [
				{ answerText: 'Small house / flat', Answer: 0.927  },
				{ answerText: 'Medium',  Answer : 1.483  },
				{ answerText: 'Large house',  Answer: 	2.163  },
				{ answerText: 'Hall of residence',  Answer:	0.618  },
				
			],
			
		},
		
		{
            questionText: '3.	How many cars are used in your household?' ,
			answerOptions: [
				{ answerText: '0', Household: 0},
				{ answerText: '1-3', Household: 2.436  },
				{ answerText: '4-5' ,Household: 3.654   },
				{ answerText: '6' ,Household: 5.481 },
				
			],
		},
		{
			questionText: '4.	What is the type of your car?',
			answerOptions: [
				{ answerText: 'Sports car or large SUV (35 mpg)', carType: 35 },
				{ answerText: 'Small or medium SUV or MPV (46 mpg)', carType: 46 },
				{ answerText: 'City, small, medium, large or estate car (52 mpg)', carType: 52 }
				
			],
			
		},
		{
			questionText: '5.	What is the annual mileage for your car?',
			answerOptions: [
				{ answerText: 'Low (6000 miles)', Answer: 	6  },
				{ answerText: 'Average (9000 miles)', Answer: 9 },
				{ answerText: 'High (12000)', Answer: 12 }
				
			],
			
		},
		{
			questionText: '6.	How much of the food that you eat is organic?',
			answerOptions: [
				{ answerText: 'None', Answer: 0.7 },
				{ answerText: 'Some', Answer: 0.5 },
				{ answerText: 'Most', Answer: 0.2 },
				{ answerText: 'All', Answer: 0 }
			],
			
		},
		{
			questionText: '7.	How much meat/diary do you eat personally?',
			answerOptions: [
				{ answerText: 'Above average', Answer: 0.6 },
				{ answerText: 'Average', Answer: 0.4 },
				{ answerText: 'Below average', Answer: 0.25 },
				{ answerText: 'Lacto-vegetarian', Answer: 0.1 },
				{ answerText: 'Vegan', Answer: 0 },
				
			],
			
		},
		{
			questionText: '8.	How much of your food is produced locally?',
			answerOptions: [
				{ answerText: 'Very little', Answer: 0.5 },
				{ answerText: 'Average', Answer: 0.3 },
				{ answerText: 'Below Average', Answer: 0.2 },
				{ answerText: 'Almost all', Answer: 0.1 }

				
			],
			
		},
		{
			questionText: '9.	How much of your food is packed/processed (e.g. ready meals, tins)?',
			answerOptions: [
				{ answerText: 'Above average', Answer: 0.6 },
				{ answerText: 'Average', Answer: 0.4 },
				{ answerText: 'Below average', Answer: 0.2 },
				{ answerText: 'Very little', Answer: 0.05 }
				
			],
			
		},
		{
			questionText: '10.	How much do you compost potato peelings, leftover and unused food, etc?',
			answerOptions: [
				{ answerText: 'none', Answer: 0.11 },
				{ answerText: 'some', Answer: 0.06 },
				{ answerText: 'All', Answer: 0 }
				
			],
			
		},
		{
			questionText: '11.	How much of your food do you waste (on average over 1/5 of edible food is thrown away)?',
			answerOptions: [
				{ answerText: 'Above average', Answer: 0.1 },
				{ answerText: 'Average', Answer: 0.2 },
				{ answerText: 'Below average', Answer: -0.1 },
				{ answerText: 'Very little', Answer: -0.18 }
				
			],
			
		},
		{
			questionText: '12.	Weekly, how long do you take the bus? (Choose the closest answer)',
			answerOptions: [
				{ answerText: 'I don’t take the bus', Answer: 0 },
				{ answerText: 'Less than 1 hour', Answer: 1 },
				{ answerText: 'Between 1 and 2 hours', Answer: 1.5 },
				{ answerText: 'More than 2 hours', Answer: 3 }
				
			],
			
		},
		{
			questionText: '13.	Weekly, how long do you take the train? (Choose the closest answer)',
			answerOptions: [
				{ answerText: 'I don’t take the train', Answer: 0 },
				{ answerText: 'Less than 1 hour', Answer: 1 },
				{ answerText: 'Between 1 and 2 hours', Answer: 1.5 },
				{ answerText: 'More than 2 hours', Answer: 3 }
				
			],
			
		},
		{
			questionText: '14.	How often do you take flights during the year?',
			answerOptions: [
				{ answerText: 'I do not take flights', Flights: 0 },
				{ answerText: '1 to 3 flights', Flights: 3 },
				{ answerText: '4 to 6 flights', Flights: 9 },
				{ answerText: '10 hours or more', Flights: 10 }
				
			],
			
		},
		{
			questionText: '15.	Roughly, how long does your flights last?',
			answerOptions: [
				{ answerText: '3 hours or less', Answer: 3 },
				{ answerText: '4 to 6 hours', Answer: 6 },
				{ answerText: '7 to 9 hours', Answer: 9 },
				{ answerText: '10 hours or more ', Answer: 10 }
				
			],
			
		},
		{
			questionText: '16.	What is your miscellaneous spending?',
			answerOptions: [
				{ answerText: 'Above average', Answer: 5 },
				{ answerText: 'Average', Answer: 3.4 },
				{ answerText: 'Below average', Answer: 2.4 },
				{ answerText: 'much below average', Answer: 1.4 }
				
			],
			
		},
		{
			questionText: '17.	Do you recycle paper, glass and metal?',
			answerOptions: [
				{ answerText: 'Yes', Answer: -0.7 },
				{ answerText: 'No', Answer: 0 },
			],
			
		},
		{
			questionText: '18.	Do you recycle plastic apart from bags?',
			answerOptions: [
				{ answerText: 'Yes', Answer: -0.14 },
				{ answerText: 'No', Answer: 0 },
			],
			
		},
	];



    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

		

	const handleAnswerOptionClick = (Answer) => {
		if (Answer) {
			setScore(Answer + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}

	};
	
	function refreshPage() {
		window.location.reload(false);
	  }
    return (
		<div style={backgroundImage}  >
		
		<div  className="app-carbon">
		
          
			{showScore ? (
				<div className='score-section-carbon'>
					
					<h1>
					Your total is: {score}
					<br/>
					The world total is: 4.4
					<br/>
					The Uk average is: 14.1
            	
					  
					</h1>
					<button onClick={refreshPage}>Retake Quiz</button>
				</div>
				
			) : (
				
				<>
				
					<div className='question-sections'>
					
				
						<div className='question-count'>
						<div className='question-carbon'>{questions[currentQuestion].CarbonFootprint}</div>
					</div>
					<div className='questionaire-carbon'>

						<div >{questions[currentQuestion].Userinput} </div>
						</div>
                        <div  className="questionaire-carbon">{questions[currentQuestion].questionText}</div>

						
						
						<div className='Start-btn'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.Answer)} >{answerOption.answerText}</button>
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
