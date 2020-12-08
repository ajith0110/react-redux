import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPost} from '../redux/actions/postAction'

class AddPost extends Component {
    constructor(props){
        super(props);
        this.state ={
            title:'',
            body:''

        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);


    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    
    onSubmit(e){
        e.preventDefault();
        const post ={
            title:this.state.title,
            body:this.state.body
        }
        this.props.addPost(post)
    }
     
    

    render() {
        
        return (
            <div>
            <form onSubmit={this.onSubmit}>
                <label>Title</label>: <input type="text" name="title" value={this.state.title} onChange={this.onChange} /> <br/>
                <label>Body</label>: <input type="text" name="body" value={this.state.body} onChange={this.onChange} /> <br/>
                <button type="submit" >Add</button>

            </form>
        </div>
        )
    }
}

export default connect(null,{addPost}) (AddPost)
