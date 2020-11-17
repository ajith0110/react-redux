import {FETCH_POSTS,NEW_POST} from '../actions/types'
// import {fetchPosts} from '../actions/postAction'


const inState ={
    items :[],
    item:{}

}


export default (state=inState,action)=>{
    
    switch(action.type)
            {
                case FETCH_POSTS :
                    console.log('fetching')
                    return {
                         ...state,
                         items:action.payload   


                    }


                default : return state




            }

    
}
