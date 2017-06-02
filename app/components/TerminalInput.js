import React, { Component } from 'react';

import styles from '../styles/TerminalInput.css'

class TerminalInput extends Component {

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div className={styles.terminalInputContainer}>
				<div className={styles.terminalInputSignature}>
					CoreProxy@rpg-io$
				</div>
				<div className={styles.terminalInputField}>
					<form onSubmit={this.handleSubmit}>
						<input autofocus={true} className={styles.terminalInputText} name="command" type="text"/>
					</form>
				</div>
			</div>
		)
	}
};

export default TerminalInput;
