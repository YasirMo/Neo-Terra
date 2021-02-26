import React from 'react';
import AdminNSComponent from './AdminNSComponent';
import IPservice from './IPservice';
//import '../.././../Styles/App.css';



class IPAdminAuth extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            IP: ""

        }
    }

    componentDidMount() {

        IPservice.getIPaddress().then((response) => {

            this.setState({IP: response.data})
            console.log(response.data)

        } );

    }

    render () {
    const {IP} = this.state

    {   
        
        switch (IP.ip) {
                                                //DEVELOPERS ADD YOUR IP ADDRESSES HERE!!!!!!!!
            case "90.212.113.193":
                return (

                    <div class = "newsgrid">
        
                        <AdminNSComponent/>   
        
                    </div>
        
                )
            case "134.83.252.34":
                return (
                    <div class = "newsgrid">
                        <AdminNSComponent/>   
                    </div>
                )

            case "134.83.3.147":
                return (

                    <div class = "newsgrid">
                        <AdminNSComponent/>
                    </div>

                )

            case "134.83.252.204":
                return (
    
                    <div class = "newsgrid">
                        <AdminNSComponent/>
                    </div>
    
                )

            default:
                
                return (

                    <div>
                        <h1>This page is only accessible by Developers</h1>
                    </div>
                    
                )
        }

    }
        
}

}

export default IPAdminAuth