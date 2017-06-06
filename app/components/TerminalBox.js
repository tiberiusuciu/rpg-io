import React, { Component } from 'react';

import styles from '../styles/TerminalBox.css';
import TerminalLogs from './TerminalLogs';
import TerminalInput from './TerminalInput';

class TerminalBox extends Component {
	render() {
		return (
			<div>
				<div className={styles.terminalLogs}>
					<TerminalLogs/>
				</div>
				<div className={styles.terminalInput}>
					<TerminalInput
						onUserCurrentInput={this.props.onUserCurrentInput}
						userCurrentInput={this.props.userCurrentInput}
						onSubmitCurrentInput={this.props.onSubmitCurrentInput}
					/>
				</div>
			</div>
		)
	}
};

export default TerminalBox;
