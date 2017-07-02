import {
	SET_USER_CURRENT_INPUT,
	SUBMIT_USER_INPUT,
	NEW_LOG_ENTRY,
	INVALID_COMMAND,
} from '../actions';

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
			state.push(action.userCurrentInput);
			return state;
		default:
			return state;
	}
};

const logs = (state = [], action) => {
	switch (action.type) {
		case NEW_LOG_ENTRY:
			state.push({
				source: action.source,
				content: action.content,
				coloration: action.coloration,
			});
			return state;
		case INVALID_COMMAND:
			state.push({
				source: action.parsedCommand.source,
				content: action.parsedCommand.message,
			})
		default:
			return state;
	}
};

export default ({
	userCurrentInput,
	userInputHistory,
	logs,
});
