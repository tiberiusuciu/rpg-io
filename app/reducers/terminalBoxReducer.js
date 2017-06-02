// import {
// 	ADD_ALERT, REMOVE_ALERT, SHOW_ALERT, HIDE_ALERT,
// } from '../actions';

import {
	SET_USER_CURRENT_INPUT,
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
		console.log('action', action);
			return action.userCurrentInput;
		default:
			return state;
	}
};

const userInputHistory = (state = [], action) => {
	switch (action.type) {
		case 'test':
			console.log('test!');
		default:
			return state;
	}
};

export default ({
	userInputHistory,
	userCurrentInput,
});
