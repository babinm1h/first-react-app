import MyPosts from '../Profile/myPosts/MyPosts';
import { connect } from "react-redux"
import { addNewPost } from '../../action/actionCreators';
import { deletePost } from '../../action/actionCreators';
import { AppStateType } from '../../redux/store';
import { PostType, ProfileType } from '../../types/profileTypes';


type mapStateToPropsType = {
    posts: PostType[],
    profile: ProfileType | null
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}



export default connect(mapStateToProps, { addNewPost, deletePost })(MyPosts);