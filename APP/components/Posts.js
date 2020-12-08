import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../redux/actions/postAction'

 class Posts extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
             this.props.posts.unshift(nextProps.newPost)

        }


      


    }


    render() {
       const post = this.props.posts.map((post,i)=>
        {
            return(
                <div key={i}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
               
            )
        }
    ) 

    


    return (
        <div>
            {post}
        </div>
    )
    }
}

const mapStateToProps = state =>(
        {
            posts :state.posts.items,
            newPost:state.posts.item 
        }

)





export default connect(mapStateToProps,{fetchPosts})(Posts)
