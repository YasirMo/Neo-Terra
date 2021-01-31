import React from 'react'
import NewsStoryComponent from './NewsStoryComponent'
import AddStory from './AddStory'
import Layout from '../../../Layout/Layout'
function News() {
    const News = {
        backgroundImage : "url(/images/News.jpg)",
        height: "700px",
       
	  };
    return (
        <Layout>
        <div style={News}>
            <NewsStoryComponent />
      <AddStory/>
        </div>
        </Layout>
    )
}

export default News
