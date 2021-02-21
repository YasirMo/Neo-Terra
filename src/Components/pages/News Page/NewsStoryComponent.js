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
        this.toggleSortDate = this.toggleSortDate.bind(this)
        this.state = {
            News:[],
            story_id:'',
            isOldestFirst: true
        }
        
    }

    //Sorting Code implemeneted by Hamza
    sortByDate () {
        const {News} = this.state
        let newNews = News
        const sortedNews = News.sort((a, b) => a.date - b.date)
        this.setState({
            isOldestFirst: !this.state.isOldestFirst,
            News: newNews
        })
    }
    
    toggleSortDate (event) {
        this.sortByDate()
    }

    componentDidMount() {

        NewsService.getNews().then((response) => {

            this.setState({News: response.data})

        } );

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

                                News => //Change the Underscores if ever enabling this piece of code
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
                <button onClick={this.toggleSortDate}>Order by date</button>

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

                        <h2>{News.storyTitle}</h2>
                        <p>Test desciption is quite long on purpose do not mind anything nothing shady going on here</p>
                        <span>{News.storyLink}</span>
                        <span>{News.date}</span>
                        <a href={News.storyLink} target ="_blank">Open Story</a>
            
                    </div>

                </div>
                )

                }

            </div>

        )
    }

}

export default NewsStoryComponent
