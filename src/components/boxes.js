import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Boxes extends Component {
    
	render() {
		
		var boxes = [];
		for (var i = 0; i < this.props.total; i++) {
			var s = this.props.index <= i ? (this.props.index !== i ? 0 : 1) : 2;
			boxes.push({state:s});
		}
		
		return (
			<div className={css(boxStyles.container)}>
				{
					boxes.map((box, i) =>
					<Box s={box.state} key={i} />)
				}
			</div>
		);
	}
}

class Box extends Component {
	render() {
		if (this.props.s === 2) {
			return (
				<div className={css(boxStyles.singlecontainer)} >
					<span className={css(boxStyles.box)} />
				</div>
			);
		} else if (this.props.s === 1) {
			return (
				<div className={css(boxStyles.singlecontainer)} >
					<span className={css(boxStyles.box)} />
					<span className={css(boxStyles.innerbox)} />
				</div>
			);
		} else {
			return (
				<div className={css(boxStyles.singlecontainer)} >
					<span className={css(boxStyles.clearbox)} />
					<span className={css(boxStyles.innerbox)} />
				</div>
			);
		}
	}
}

const boxStyles = StyleSheet.create({
	container: {
		position:'absolute',
		marginTop:'71vh',
	},
	singlecontainer: {
		position:'relative',
		display:'inline-block',
		width:'5vh',
		height:'5vh',
		marginLeft:'1vw',
		marginRight:'1vw',
		marginTop:'0px',
		marginBottom:'0px',
	},
	box: {
		position:'absolute',
		width:'5vh',
		height:'5vh',
		backgroundColor:'rgba(230, 43, 37, 1)',
	},
	clearbox: {
		position:'absolute',
		width:'5vh',
		height:'5vh',
		backgroundColor:'rgba(245, 245, 245, 1)',
	},
    innerbox: {
		position:'absolute',
		width:'2.5vh',
		height:'2.5vh',
		margin:'1.25vh',
		backgroundColor:'white',
	},
});

export default Boxes;