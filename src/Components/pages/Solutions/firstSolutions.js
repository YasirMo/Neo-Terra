import React from 'react'
import Layout from '../../../Layout/Layout'
import axios from 'axios';
import SolutionsService from './SolutionsService';
import IPservice from '../.././../Components/pages/News Page/IPservice.js';
import '../.././../Styles/Solutions.css';

const ElectricCarSolution = {backgroundImage : "url(/images/EV.jpg)",};
const CompostSolution = {backgroundImage : "url(/images/plant.jpg)",};
const FashionSolution = {backgroundImage : "url(/images/recycle.jpg)",};

class firstSolutions extends React.Component {

    state = {
        answers: []
    }

    componentDidMount() {

        SolutionsService.getAnswers().then((response) => {

            this.setState({answers: response.data.answers})

        } );

    }

    render() {

        //This is the area where all the Solutions would be Presented

        //The code below is for when a User has answered that their household owns a car

        const {answers} = this.state

        if (answers[2] = 2) { //For some reason cannot work with comparision operators, tried parsing to int but no luck

            return (
                <div>
                    <Layout>
                    
                    First Solutions PAGE

                    <div>

                        <div class = "solutionCard">
                            <div style = {ElectricCarSolution} className = "solutionImage" ></div>
                                
                                <div class = "solutionContent">
                                    <h2 class = "solutionContentTitle">Buy an Electric Car</h2>
                                    <span class = "solutionContentCO2">CO2 Emissions Prevented: {answers[4] * 169.4} grams</span>
                                    <span class = "solutionContentFuel">Fuel Savings: £{(0.3 * answers[4]) * 0.12}</span>
                                </div>

                            </div>
                            
                        </div>

                        <div class = "solutionCard">
                            <div style = {CompostSolution} className = "solutionImage" ></div>
                            
                            <div class = "solutionContent">
                                <h2 class = "solutionContentTitle">Compost Your Waste</h2>
                                <span class = "solutionContentCO2">CO2 Emissions Prevented: {29500 /answers[8]} grams</span>
                            </div>

                        </div>

                        <div class = "solutionCard">
                            <div style = {FashionSolution} className = "solutionImage" ></div>
                            
                            <div class = "solutionContent">
                                <h2 class = "solutionContentTitle">Buy from Charity/ Thrift Shops</h2>
                                <span class = "solutionContentCO2">CO2 Emissions Prevented: {15000 /answers[13]} grams</span>
                                <span class = "solutionContentCO2">Savings Made: £{answers[13] * 210}</span>
                            </div>

                        </div>

                    </Layout>
                </div>
            )

        } else {

            return (
                <div>
                    <Layout>
                    <div>
                    First Solutions PAGE
                    <h3>More Solutions would be added soon!</h3>
                    </div>
                    </Layout>
                </div>
            )

        }

    }
}

export default firstSolutions
