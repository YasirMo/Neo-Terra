
import '../.././../Styles/App.css';

function SplitDate(date) {

    //state = {
    //   total: 0
    //}

    //var day = 0;
    //var month = 0;
    //var year = 0;

    var dateSplit = date.split("/");

    var day = dateSplit[0];
    var month = dateSplit[1];
    var year = dateSplit[2];

    //var day = date.charAt(0) + date.charAt(1);
    //var month = date.charAt(3) + date.charAt(4);
    //var year = date.charAt(6) + date.charAt(7) + date.charAt(8)+ date.charAt(9);

    var totalDate = year + month + day;
    //this.setState({total: totalDate});

    return totalDate;

    //return this.state;

    
}

export default SplitDate