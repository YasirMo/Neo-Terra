import React from 'react'
import NewsStoryComponent from './NewsStoryComponent'
import AddStory from './AddStory'
import Layout from '../../../Layout/Layout'
import { Container } from 'reactstrap';
function News() {
    const News = {
        backgroundImage : "url(/images/News.jpg)",
        height: "700px",
        overflow: "scroll",
       
	  };
    return (
        <Layout>
        <div style={News}>
            <NewsStoryComponent />
        </div>
        </Layout>
    )
}

export default News
