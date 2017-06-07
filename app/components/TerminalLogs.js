import React, { Component } from 'react';

class TerminalLogs extends Component {
	render() {
		return (
			<div>
				<ul>
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
