import React, { useState} from 'react'
import NewsStoryComponent from './NewsStoryComponent'
import AdminNSComponent from './AdminNSComponent'
import AddStory from './AddStory'
import AdminCard from './AdminCard'
import Layout from '../../../Layout/Layout'
import { Container } from 'reactstrap';
import IPAdminAuth from './IPAdminAuth'

function Admin() {
    const News = {
        backgroundImage : "url(/images/News.jpg)",
        height: "700px",
        overflow: "scroll",
	  };
    return (
        <Layout>
        <div style={News}>

            <h1>Administration Page</h1>
            <IPAdminAuth />
        </div>
        </Layout>
        
    )
}

export default Admin