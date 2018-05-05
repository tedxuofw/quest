import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


class Congratulations extends Component {
	render() {
		return (
			<div className={css(styles.container)}>
				<p className={css(styles.title)}>Congratulations!</p>
				<p className={css(styles.description)}>You are on your way to greatness. As JFK once said: </p>
				<p className={css(styles.description)}>We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard; because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one we intend to win, and the others, too.</p>
				<p className={css(styles.description)}>Visit the help desk to claim your prize!</p>
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