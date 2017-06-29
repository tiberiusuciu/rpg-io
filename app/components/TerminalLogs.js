import React, { Component } from 'react';

import styles from '../styles/TerminalLogs.css';

class TerminalLogs extends Component {
	render() {
		return (
			<div className={styles.lineLength} >
				<ul className={styles.listStyling}>
					{
						this.props.userInputHistory.map( (log) => {
							return (
								<li style={{color: 'white'}}>
									{log}
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
};

export default TerminalLogs;
