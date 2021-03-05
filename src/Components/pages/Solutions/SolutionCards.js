import React, { useState, useEffect } from 'react';
import Layout from '../../../Layout/Layout'
import axios from 'axios';
import IPservice from '../.././../Components/pages/News Page/IPservice.js';
import '../.././../Styles/Solutions.css';

function SolutionCards() {

    const ElectricCarSolution = {backgroundImage : "url(/images/EV.jpg)",};
    const CompostSolution = {backgroundImage : "url(/images/plant.jpg)",};
    const FashionSolution = {backgroundImage : "url(/images/recycle.jpg)",};

    const [Answers, setAnswers] = useState([]);
    const [IP, setIP] = useState(0);

    
    useEffect(() => {
        if(IP ===0 || IP === null) {
            IPservice.getIPaddress().then((response) => {setIP(response.data.ip)})
        }
    },[IP])

    useEffect(() => {
        if(IP ===0) {
            axios.get("http://localhost:8080/users/" + IP).then((response) => {setAnswers(response.data.answers)})
        }
    }, [IP, Answers])

    //This is the area where all the Solutions would be Presented
    //The code below is for when a User has answered that their household owns a car

    return (
        <div>
            <Layout>
            
            Solutions Card PAGE

            <div>

                <div class = "solutionCard">
                    <div style = {ElectricCarSolution} className = "solutionImage" ></div>
                        
                        <div class = "solutionContent">
                            <h2 class = "solutionContentTitle">Buy an Electric Car</h2>
                            <span class = "solutionContentCO2">CO2 Emissions Prevented: {Answers[4] * 169.4} grams</span>
                            <span class = "solutionContentFuel">Fuel Savings: £{(0.3 * Answers[4]) * 0.12}</span>
                        </div>

                    </div>
                    
                </div>

                <div class = "solutionCard">
                    <div style = {CompostSolution} className = "solutionImage" ></div>
                    
                    <div class = "solutionContent">
                        <h2 class = "solutionContentTitle">Compost Your Waste</h2>
                        <span class = "solutionContentCO2">CO2 Emissions Prevented: {29500 /Answers[8]} grams</span>
                    </div>

                </div>

                <div class = "solutionCard">
                    <div style = {FashionSolution} className = "solutionImage" ></div>
                    
                    <div class = "solutionContent">
                        <h2 class = "solutionContentTitle">Buy from Charity/ Thrift Shops</h2>
                        <span class = "solutionContentCO2">CO2 Emissions Prevented: {15000 /Answers[13]} grams</span>
                        <span class = "solutionContentCO2">Savings Made: £{Answers[13] * 210}</span>
                    </div>

                </div>

            </Layout>
        </div>
    )
}

export default SolutionCards
