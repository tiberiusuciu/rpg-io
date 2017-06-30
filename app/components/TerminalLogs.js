import React, { Component } from 'react';

import styles from '../styles/TerminalLogs.css';

// TODO: Change to moment.js timing
let id = 0;
class TerminalLogs extends Component {
	render() {
		return (
			<div className={styles.lineLength} >
				<ul className={styles.listStyling}>
					{
						// Log = {
						// 	username = STRING,
						// 	content = STRING,
						// 	coloration = {}
						// }
						this.props.logs.map( (log) => {
							id++;
							return (
								<li key={id} style={{color: 'white'}}>
									{`${log.source}@rpg-io$ ${log.content}`}
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
