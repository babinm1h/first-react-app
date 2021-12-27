import { connect } from 'react-redux';
import Login from '../Login/Login';
import { login } from '../../thunks/thunks';
import { AppStateType } from '../../redux/store';


type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, { login })(Login);