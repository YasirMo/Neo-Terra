import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../.././../Styles/App.css';
import {questions}from './Questions';
import axios from 'axios';
import Charts from './Charts'
import Layout from '../../../Layout/Layout'

function CarbonFootprint(props)   {
	
    const backgroundImage = {
        backgroundImage : "url(/images/ForestPic.jpg)",
        height: "1000px",
		display: "flex",
		width :"1900px"
	};

	const [ip, setIp] = useState(0);
	const [finalScore,setFinalScore]=useState(0);
	const [answersArray, setAnswersArray] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [temp, setTemp] = useState(false);

	useEffect(() => {
		if(ip==0||ip==null)
		{
			axios.get('https://api.ipify.org?format=json')
			.then((response) => {
				console.log(response.data);
				setIp(response.data.ip);});
		}
		if(showScore==true&&(finalScore==0||finalScore==null))
		{
			axios.get('http://localhost:8080/users/'+ip)
			.then((response) => {
				console.log(response.data);
				setFinalScore(response.data.score);});
		}
	})

	// function getScore(){
		
	// 	fetch('http://localhost:8080/users/'+ip)
	// 	.then(response => response.json())
	// 	.then(data => setFinalScore(data.score));
	// }

	const handleAnswerOptionClick = (Value) => 
	{
		if (Value) {
			answersArray.push(Value);
			setScore(Value);
			console.log(showScore);
		}
		console.log(answersArray);
		if (score > 0) {
		setScore(score +1);
		Value = score.toFixed(2)
		}

		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) 
		{
			if(currentQuestion==3&&answersArray[2]==1)
			{
				
				answersArray.push(10);
				answersArray.push(10);
				console.log("Skipped 2 questions related to cars");
				setCurrentQuestion(nextQuestion+2)
			}
			else if(currentQuestion==14&&answersArray[13]==1)
			{
				answersArray.push(10);
				console.log("Skipped 2 questions related to cars");
				setCurrentQuestion(nextQuestion+1)
			}
			else
			{
				setCurrentQuestion(nextQuestion);
			}
		} 
		else {
			let data = {id: ip, email: "", answers: answersArray};
			fetch('http://localhost:8080/users', {
				method : 'POST',
				headers :{ 'Content-Type' : 'application/json'},
				body : JSON.stringify(data)
			}).then(response => response.json())
				.then(data => {
				if(data === 'success'){
					this.props.onRouteChange('home');
				}
			})
			setShowScore(true);
		}
	};

	function setScreen(){
		if(currentQuestion<1)
		{
			fetch('http://localhost:8080/users/'+ip)
				.then(function(response) {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					return response;
				}).then(function(response) {
					console.log("ok");
					setTemp(true);
					console.log(temp);
				}).catch(function(error) {
					console.log(error);
				});
			if (temp==true)
			{
				setShowScore(true);
			}
		}
	}

	function refreshPage() 
	{
	window.location.reload(false);
	}

	function deleteUser()
	{
		fetch('http://localhost:8080/users/'+ip, {
			method : 'DELETE'
		})
		window.location.reload(false);
	}

    return (
		
		<div style={backgroundImage}>
		
		<div  className="app-carbon">
		
			{showScore ? (
				<div >
					<p>
					<Charts finalScore={finalScore.toFixed(2)}/>	
					</p>
					<h1 className='score-section-carbon' >
					
					Your total is:  {finalScore.toFixed(2)} 
					<br/>
					The world average is 4.4
					<br/>
					The Uk average is 14.1
					</h1> 
					<button  className='Start-btn' >
					<Link to='/LearnPageThree' className="map-btn" >
				Learn More
				</Link>
				</button>
					<button onClick={deleteUser}  className="Start-btn">Retake Quiz</button>
					
				</div>
				
			) : (
				<>
					<div className='question-sections' onload={setScreen()}>
					<h2 className="Question-length-carbon" onload="setScreen()"> 
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
							<button onClick={() => handleAnswerOptionClick(answerOption.Value)} className="Start-btn">{answerOption.answerText}</button>
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