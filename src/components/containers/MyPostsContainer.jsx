import React from 'react';
import MyPosts from '../Profile/myPosts/MyPosts';
import { connect } from "react-redux"
import { addNewPost } from '../../action/actionCreators';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}



export default connect(mapStateToProps, {
    addNewPost
})(MyPosts);