import MyPosts from '../Profile/myPosts/MyPosts';
import { connect } from "react-redux"
import { addNewPost } from '../../action/actionCreators';
import { deletePost } from '../../action/actionCreators';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}



export default connect(mapStateToProps, { addNewPost, deletePost })(MyPosts);