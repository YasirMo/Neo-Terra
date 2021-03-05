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
    const ansRemapped = useState([]);
    const [IP, setIP] = useState(0);
    
    useEffect(() => {
        if(IP ===0 || IP === null) {
            IPservice.getIPaddress().then((response) => {setIP(response.data.ip)})
        }
    },[IP])

    useEffect(() => {
        if(IP !==0) {
            axios.get("http://localhost:8080/users/" + IP).then((response) => {setAnswers(response.data.answers)})
        }
    }, [IP, Answers])

    var i;
    for (i = 0; i < 18; i++) { //Remapping Options Picked to their Actual Values in Units

        switch (i) {

            case 0: //Q1: Number of Members in the Household
                switch (Answers[i]) { 
                    case 1:
                        ansRemapped.push(1);
                        break;
                    case 2:
                        ansRemapped.push(3);
                        break;
                    case 3:
                        ansRemapped.push(6);
                        break;
                    case 4:
                        ansRemapped.push(8);
                        break;
                
                    default:
                        break;
                }
                break;
            
            case 1: //Q2: Type of House
                ansRemapped.push(Answers[i]);
                break;
            
            case 2: //Q3: Number of Cars in the Household
                switch (Answers[i]) { 
                    case 1: 
                        ansRemapped.push(0);
                        break;
                    case 2:
                        ansRemapped.push(2);
                        break;
                    case 3:
                        ansRemapped.push(4);
                        break;
                    case 4:
                        ansRemapped.push(6);
                        break;
                
                    default:
                        break;
                }
                break;

            case 3: //Q4: Type of Car
                ansRemapped.push(Answers[i]);
                break;

            case 4: //Q5: Car's Annual Mileage
                switch (Answers[i]) { 
                    case 1: 
                        ansRemapped.push(6000);
                        break;
                    case 2:
                        ansRemapped.push(9000);
                        break;
                    case 3:
                        ansRemapped.push(12000);
                        break;
                
                    default:
                        break;
                }
                break;
            
            case 5: //Q6: How much of the food that you eat is organic?
                ansRemapped.push(Answers[i]);
                break;

            case 6: //Q7: Meat/ Dairy Eaten
                ansRemapped.push(Answers[i]);
                break;

            case 7: //Q8: Locally Produced Food
                ansRemapped.push(Answers[i]);
                break;

            case 8: //Q9: Packed/processed Food
                ansRemapped.push(Answers[i]);
                break;
            
            case 9: //Q10: Composting
                ansRemapped.push(Answers[i]);
                break;

            case 10: //Q11: Waste Food
                ansRemapped.push(Answers[i]);
                break;
            
            case 11: //Q12: Bus Time (Weekly)
                switch (Answers[i]) { 
                    case 1: 
                        ansRemapped.push(0);
                        break;
                    case 2:
                        ansRemapped.push(0.5);
                        break;
                    case 3:
                        ansRemapped.push(1.5);
                        break;
                    case 4:
                        ansRemapped.push(2.5);
                        break;
                
                    default:
                        break;
                }
                break;

            case 12: //Q13: Train Time (Weekly)
                switch (Answers[i]) { 
                    case 1: 
                        ansRemapped.push(0);
                        break;
                    case 2:
                        ansRemapped.push(0.5);
                        break;
                    case 3:
                        ansRemapped.push(1.5);
                        break;
                    case 4:
                        ansRemapped.push(2.5);
                        break;
                
                    default:
                        break;
                }
                break;

            case 13: //Q14: Number of Flights
                switch (Answers[i]) { 
                    case 1: 
                        ansRemapped.push(0);
                        break;
                    case 2:
                        ansRemapped.push(2);
                        break;
                    case 3:
                        ansRemapped.push(5);
                        break;
                    case 4:
                        ansRemapped.push(10);
                        break;
                
                    default:
                        break;
                }
                break;

            case 14: //Q15: Flight Time
                switch (Answers[i]) { 
                    case 1: 
                        ansRemapped.push(3);
                        break;
                    case 2:
                        ansRemapped.push(5);
                        break;
                    case 3:
                        ansRemapped.push(8);
                        break;
                    case 4:
                        ansRemapped.push(10);
                        break;
                
                    default:
                        break;
                }
                break;

            case 15: //Q16: Misc Spending
                ansRemapped.push(Answers[i]);
                break;
            
            case 16: //Q17: Recycle Paper
                ansRemapped.push(Answers[i]);
                break;
            
            case 17: //Q18: Recycle Plastic
                ansRemapped.push(Answers[i]);
                break;
        
            default:
                break;
        }

    } //End For

    //This is the area where all the Solutions would be Presented
    //The code below is for when a User has answered that their household owns a car

    return ( //When Acessing the array 'ansRemapped', make sure to increase the location of the item by 2. So if you want to acess the third element, put ansRemmaped[5]
        <div>
            <Layout>
            
            Solutions Card PAGE
            
            <h2>{Answers}</h2>
            <h2>{ansRemapped}</h2>
            <h2>{ansRemapped[6]}</h2>
            

            <div>

                <div class = "solutionCard">
                    <div style = {ElectricCarSolution} className = "solutionImage" ></div>
                        
                        <div class = "solutionContent">
                            <h2 class = "solutionContentTitle">Buy an Electric Car</h2>
                            <span class = "solutionContentCO2">CO2 Emissions Prevented: {ansRemapped[6] * 169.4} grams</span>
                            <span class = "solutionContentFuel">Fuel Savings: £{(0.3 * ansRemapped[6]) * 0.12}</span>
                        </div>

                    </div>
                    
                </div>

                <div class = "solutionCard">
                    <div style = {CompostSolution} className = "solutionImage" ></div>
                    
                    <div class = "solutionContent">
                        <h2 class = "solutionContentTitle">Compost Your Waste</h2>
                        <span class = "solutionContentCO2">CO2 Emissions Prevented: {29500 /ansRemapped[10]} grams</span>
                    </div>

                </div>

                <div class = "solutionCard">
                    <div style = {FashionSolution} className = "solutionImage" ></div>
                    
                    <div class = "solutionContent">
                        <h2 class = "solutionContentTitle">Buy from Charity/ Thrift Shops</h2>
                        <span class = "solutionContentCO2">CO2 Emissions Prevented: {15000 /ansRemapped[15]} grams</span>
                        <span class = "solutionContentCO2">Savings Made: £{ansRemapped[15] * 210}</span>
                    </div>

                </div>

            </Layout>
        </div>
    )
}

export default SolutionCards
