import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Notification extends Component {
	
	render() {
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.textcontainer)}>
					<p className={css(styles.line1)}> {this.props.message} </p>
					<p className={css(styles.line2)}> {this.props.submessage} </p>
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position:'absolute',
		marginTop:'75vh',
		width:'100vw',
		textAlign:'left',
		backgroundColor:'rgba(230, 43, 37, 1)'
	},
	textcontainer: {
		position:'relative',
		marginTop:'5vh',
		marginLeft:'20vw',
	},
	line1: {
		position:'relative',
		fontSize:'15px',
		fontFamily:'AvenirBlack',
		marginBottom:'0px',
		color:'white',
	},
	line2: {
		position:'relative',
		fontSize:'15px',
		fontFamily:'Avenir',
		marginTop:'0px',
		color:'white',
	}
});

export default Notification;