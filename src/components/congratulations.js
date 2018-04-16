import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


class Congratulations extends Component {
	render() {
		return (
			<div className={css(styles.container)}>
				<p className={css(styles.title)}>Congratulations!</p>
				<p className={css(styles.description)}>You've completed the scavenger hunt.</p>
				<p className={css(styles.description)}>Show this to the front desk to redeem your reward.</p>
				<p className={css(styles.description)}>Thanks for participating!</p>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position:'absolute',
		marginLeft:'10vw',
		marginTop:'100px',
		marginBottom:'200px',
		width:'80vw',
	},
    title: {
		fontSize:'20pt',
		fontFamily:'AvenirBlack',
	},
	description: {
		fontSize:'12pt',
		fontFamily:'Avenir',
	},
});

export default Congratulations;