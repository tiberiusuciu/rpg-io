import React, { Component } from 'react';

import styles from '../styles/TerminalInput.css'

class TerminalInput extends Component {

	handleSubmit(e) {
		e.preventDefault();
		// console.log('TEST!!!');
	}

	handleChange(e) {
		e.preventDefault();
		this.props.onUserCurrentInput(e.target.value);
	}

	render() {
		return (
			<div className={styles.terminalInputContainer}>
				<div className={styles.terminalInputSignature}>
					CoreProxy@rpg-io$
				</div>
				<div className={styles.terminalInputField}>
					<form onSubmit={this.handleSubmit}>
						<input autofocus={true} onChange={this.handleChange.bind(this)} value={this.props.userCurrentInput} className={styles.terminalInputText} name="command" type="text"/>
					</form>
				</div>
			</div>
		)
	}
};

export default TerminalInput;
