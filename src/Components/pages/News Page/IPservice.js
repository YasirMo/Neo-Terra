import axios from 'axios'

const IP_API_URL = 'https://api.ipify.org/?format=json';

class IPservice {

    getIPaddress(){

        return (IP_API_URL);

    }

}

export default new IPservice();