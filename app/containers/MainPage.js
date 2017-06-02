import MainPage from '../components/MainPage';
import { connect } from 'react-redux';
// import { test, setAddress, navigate, startProject, resetDone, setReferredId } from '../../actions';
import { setUserCurrentInput } from '../actions';

const mapStateToProps = (state, ownProps) => {
	return {
		userCurrentInput: state.userCurrentInput,
		userInputHistory: state.userInputHistory,
		// referredId: ownProps.location.query.referredId,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// onAddressChange: (address) => {
		// 	dispatch(setAddress(address));
		// },
		// submitAddress: () => {
		// 	dispatch(startProject());
		// 	dispatch(navigate('/location'));
		// 	dispatch(resetDone());
		// 	window.localStorage.clear();
		// },
		// goToReferal: () => {
		// 	dispatch(navigate('/referal/'));
		// },
		// goToUtility: () => {
		// 	dispatch(navigate('/utility'));
		// },
		// setReferredId: (referredId) => {
		// 	dispatch(setReferredId(referredId));
		// },
		// goToBanks: () => {
		// 	dispatch(navigate('/banks'));
		// },
		// test: () => {
		// 	dispatch(test());
		// },
		onUserCurrentInput: (userCurrentInput) => {
			dispatch(setUserCurrentInput(userCurrentInput));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainPage);
