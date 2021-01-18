import React from 'react';
import NewsService from '../Services/NewsService';

class NewsStoryComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            News:[]
        }
    }

    componentDidMount() {

        NewsService.getNews().then((response) => {

            this.setState({News: response.data})

        } );

    }

    render () {
        return (

            <div>

                <h1> News Stories</h1>

                <table>
                    <tbody>

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

        )
    }

}

export default NewsStoryComponent
