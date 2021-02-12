import axios from 'axios';
import React from 'react';
class AddStory extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            storyTitle: '',
            storyLink: '',
            source: ''

        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8080/news', this.state)
    }

    render() {

        const {storyTitle, storyLink, source} = this.state

        return (
            <div>
                <form onSubmit = {this.submitHandler} className="tables">

                <div> 
                <input type = "text" name = "storyTitle" value = {storyTitle} placeholder = "Story Title" onChange = {this.changeHandler} />
                </div>

                <div> 
                <input type = "text" name = "storyLink" value = {storyLink} placeholder = "Story Link" onChange = {this.changeHandler} />
                </div>

                <div> 
                <input type = "text" name = "source" value = {source} placeholder = "Story Source" onChange = {this.changeHandler} />
                </div>
                
                <button type = "submit" className="sub-btn">Add Story</button>
                </form>

            </div>

            

        )

    }

    
}

export default AddStory