import React, { Component } from 'react';

import TerminalBox from './TerminalBox';
import DetailsBox from './DetailsBox';
import CanvasBox from './CanvasBox';

import styles from '../styles/MainPage.css';

class MainPage extends Component {
	render() {
		return (
			<div className={styles.MainPageLayout}>
				<div className={styles.TerminalLayout + " col-xs-8"}>
					<TerminalBox
						onUserCurrentInput={this.props.onUserCurrentInput}
						userCurrentInput={this.props.userCurrentInput}
						onSubmitCurrentInput={this.props.onSubmitCurrentInput}
						userInputHistory={this.props.userInputHistory}
					/>
				</div>
				<div className={styles.InformationLayout + " col-xs-4"}>
					<div className={styles.CanvasLayout}>
						Test Canvas
					</div>
					<div className={styles.DetailsBox}>
						Test Details
					</div>
				</div>
			</div>
		)
	}
};

export default MainPage;
