import React, { Component } from 'react';

import styles from '../styles/TerminalInput.css'
class TerminalInput extends Component {

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmitCurrentInput(this.props.user.username, this.props.userCurrentInput);
	}

	handleChange(e) {
		e.preventDefault();
		this.props.onUserCurrentInput(e.target.value);
	}

	test(e) {
		e.preventDefault();
		console.log('target?', e.key);
		console.log('is it tab?', e.key === "Tab");
	}

	render() {
		return (
			<div className={styles.terminalInputContainer}>
				<div className={styles.terminalInputSignature}>
					{`${this.props.user.username}@rpg-io$`}
				</div>
				<div className={styles.terminalInputField}>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<input autoComplete="off" autofocus onKeyDown={this.test} onChange={this.handleChange.bind(this)} value={this.props.userCurrentInput} className={styles.terminalInputText} name="command" type="text"/>
					</form>
				</div>
			</div>
		)
	}
};

export default TerminalInput;
