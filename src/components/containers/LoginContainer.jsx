import { connect } from 'react-redux';
import Login from '../Login/Login';
import { login } from '../../thunks/thunks';

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login);