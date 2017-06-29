import MainPage from '../components/MainPage';
import { connect } from 'react-redux';
// import { test, setAddress, navigate, startProject, resetDone, setReferredId } from '../../actions';
import { setUserCurrentInput, submitCurrentInput } from '../actions';

const mapStateToProps = (state, ownProps) => {
	return {
		userCurrentInput: state.userCurrentInput,
		userInputHistory: state.userInputHistory,
		user: state.user,
		// referredId: ownProps.location.query.referredId,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUserCurrentInput: (userCurrentInput) => {
			dispatch(setUserCurrentInput(userCurrentInput));
		},
		onSubmitCurrentInput: (username, userCurrentInput) => {
			dispatch(submitCurrentInput(username, userCurrentInput));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MainPage);
