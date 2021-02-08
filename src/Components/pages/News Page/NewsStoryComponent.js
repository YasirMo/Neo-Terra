import React from 'react';
import NewsService from './NewsService';
//import '../.././../Styles/App.css';

import '../.././../Styles/NewsStory.css';
import axios from 'axios';

const Newsstory = {

    backgroundImage : "url(/images/forest.jpg)",
   
};


class NewsStoryComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            News:[],
            story_id:''
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
        return (

            /*

            <div>

                <table >
                <h1 className="News-Stories"> News Stories</h1>
                    <tbody >

                        {

                            this.state.News.map(

                                News => 
                                <tr key = {News.story_id}>
                                    <td> {News.story_title} </td>
                                    <td> {News.story_link} </td>

                                </tr>

                            )

                        }

                    </tbody>

                </table>

            </div>
            */


            //First <div> element with class "newscard" is a dummy
            //Also all cards redirect to BBC
            <div class = "newsgrid">

                <div class = "newscard">

                    <div style = {Newsstory} class = "newsimage"></div>
                    <div class = "newscontent">

                        <h2>Test Post</h2>
                        <p>Test desciption is quite long on purpose do not mind anything nothing shady going on here</p>
                        <span>Source</span>
                        <span>Date of Upload</span>
                        <a href="https://www.bbc.co.uk/news" target ="_blank">Learn More</a>
            
                    </div>

                </div>
                
                {

                this.state.News.map(

                News=>
                <div class = "newscard">

                    <div style = {Newsstory} class = "newsimage"></div>
                    <div class = "newscontent">

                        <h2>{News.story_title}</h2>
                        <p>Test desciption is quite long on purpose do not mind anything nothing shady going on here</p>
                        <span>{News.story_link}</span>
                        <span>Date of Upload</span>
                        <a href="https://www.bbc.co.uk/news" target ="_blank">Open Story</a>
                        <button id = {News.story_id} onClick = {this.deleteHandler}>DELETE</button>
            
                    </div>

                </div>
                )

                }

            </div>

        )
    }

}

export default NewsStoryComponent
