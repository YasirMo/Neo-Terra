import axios from 'axios'
import React from 'react';
import IPservice from '../.././../Components/pages/News Page/IPservice.js';

class SolutionsService extends React.Component {

    /*
    constructor(props) {
        super(props)
        this.state = {

            IP:""

        }
    }

    componentDidMount() {

        IPservice.getIPaddress.then((response) => {

            this.setState({IP: response.data})
            console.log(response.data)

        } );

    } */

    getAnswers(){

        //const IPAddress = this.state.ip
        const ANSWERS_URL = "http://localhost:8080/users/90.217.179.169"; //Change the IP Here

        return axios.get(ANSWERS_URL);

    }

}

export default new SolutionsService();