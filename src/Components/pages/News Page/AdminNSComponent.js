import React from 'react';
import NewsService from './NewsService';
//import '../.././../Styles/App.css';
import AdminCard from './AdminCard'
import '../.././../Styles/NewsStory.css';
import axios from 'axios';

const Newsstory = {

    backgroundImage : "url(/images/forest.jpg)",
   
};


class AdminNSComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            News:[],
            story_id:'',
        }
    }

    componentDidMount() {

        NewsService.getNews().then((response) => {

            this.setState({News: response.data})

        } );

    }

    deleteHandler = e => {

        e.preventDefault()

        this.setState({story_id: e.target.id})
        axios.delete('http://localhost:8080/news/', {params: {id: this.state.story_id}})

    }

    render () {

    {   

        return (

            <div class = "newsgrid">

                <AdminCard />   
                
                {

                this.state.News.map(

                News=>
                <div class = "newscard">

                    <div style = {Newsstory} class = "newsimage"></div>
                    <div class = "newscontent">

                        <h3>{News.story_id}</h3>
                        <h2>{News.storyTitle}</h2>
                        <p>Test desciption is quite long on purpose do not mind anything nothing shady going on here</p>
                        <span>{News.storyLink}</span>
                        <span>Date of Upload</span>
                        <a href={News.storyLink} target ="_blank" rel="noreferrer">Open Story</a>
                        <button id = {News.id} onClick = {this.deleteHandler}>DELETE</button>
            
                    </div>

                </div>
                )

                }

            </div>

        )

    }
        
}

}

export default AdminNSComponent