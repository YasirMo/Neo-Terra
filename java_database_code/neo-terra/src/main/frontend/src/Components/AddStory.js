import axios from 'axios';
import React from 'react';

class AddStory extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            story_id: '',
            story_title: '',
            story_link: ''

        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8080/rest/web/addStory', this.state)
    }

    render() {

        const { story_id, story_title, story_link } = this.state

        return (
            <div>
                <form onSubmit = {this.submitHandler}>

                <div> 
                <input type = "text" name = "story_id" value = {story_id} onChange = {this.changeHandler} />
                </div>

                <div> 
                <input type = "text" name = "story_title" value = {story_title} onChange = {this.changeHandler} />
                </div>

                <div> 
                <input type = "text" name = "story_link" value = {story_link} onChange = {this.changeHandler} />
                </div>
                
                <button type = "submit">Add Story</button>
                </form>

            </div>

            

        )

    }

    
}

export default AddStory