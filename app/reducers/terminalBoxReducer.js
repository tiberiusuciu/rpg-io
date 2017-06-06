// import {
// 	ADD_ALERT, REMOVE_ALERT, SHOW_ALERT, HIDE_ALERT,
// } from '../actions';

import {
	SET_USER_CURRENT_INPUT,
	SUBMIT_USER_INPUT,
} from '../actions';

// const alert = (state = [], action) => {
// 	switch (action.type) {
// 		case ADD_ALERT:
// 			return [...state, action.alert];
// 		case REMOVE_ALERT:
// 			return state.filter( (item, index) => index !== 0);
// 		default:
// 			return state;
// 	}
// };
//
// const alertVisibility = (state = false, action) => {
// 	switch (action.type) {
// 		case SHOW_ALERT:
// 			return true;
// 		case HIDE_ALERT:
// 			return false;
// 		default:
// 			return state;
// 	}
// };
//
// export default ({
// 	alert,
// 	alertVisibility,
// });

const userCurrentInput = (state = '', action) => {
	switch (action.type) {
		case SET_USER_CURRENT_INPUT:
			return action.userCurrentInput;
		case SUBMIT_USER_INPUT:
			return '';
		default:
			return state;
	}
};

const userInputHistory = (state = [], action) => {
	switch (action.type) {
		case SUBMIT_USER_INPUT:
			console.log(state);
			return state = state.concat([action.userCurrentInput]);
		default:
			return state;
	}
};

export default ({
	userCurrentInput,
	userInputHistory,
});
