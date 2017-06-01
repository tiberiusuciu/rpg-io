import MainPage from '../components/MainPage';
import { connect } from 'react-redux';
// import { test, setAddress, navigate, startProject, resetDone, setReferredId } from '../../actions';

const mapStateToProps = (state, ownProps) => {
	return {
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
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainPage);
