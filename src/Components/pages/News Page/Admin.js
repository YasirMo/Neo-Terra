import React, { useState} from 'react'
import NewsStoryComponent from './NewsStoryComponent'
import AddStory from './AddStory'
import Layout from '../../../Layout/Layout'
import { Container } from 'reactstrap';
import axios from 'axios';
function Admin() {
    const News = {
        backgroundImage : "url(/images/News.jpg)",
        height: "700px",
        overflow: "scroll",
	  };
    const requestNews = (site) =>
    {
        axios.post('http://localhost:8080/autoNews?newsSite='+site)
        .then((response) => {
            console.log(response.data);});
    }
    return (
        <Layout>
        <div style={News}>
            <form>
                <label>What website would you like to fetch news from?</label>
                <button onClick={() => requestNews("bbc")} >Generate BBC news</button>
                <button onClick={() => requestNews("nyt")} >Generate New York Times news</button>
            </form>
            <NewsStoryComponent />
            
        </div>
        </Layout>
        
    )
}

export default Admin