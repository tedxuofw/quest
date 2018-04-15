import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

import Modal from 'react-modal';

class Boxes extends Component {
    
	render() {
		
		var boxes = [];
		for (var i = 0; i < this.props.total; i++) {
			var s = this.props.index <= i ? (this.props.index != i ? 0 : 1) : 2;
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
		if (this.props.s == 2) {
			return (
				<div className={css(boxStyles.singlecontainer)} >
					<span className={css(boxStyles.box)} />
				</div>
			);
		} else if (this.props.s == 1) {
			return (
				<div className={css(boxStyles.singlecontainer)} >
					<span className={css(boxStyles.box)} />
					<span className={css(boxStyles.innerbox)} />
				</div>
			);
		} else {
			return <div className={css(boxStyles.singlecontainer)} />;
		}
	}
}

const boxStyles = StyleSheet.create({
	container: {
		position:'absolute',
		marginTop:'500px',
	},
	singlecontainer: {
		position:'relative',
		display:'inline-block',
		width:'30px',
		height:'30px',
		marginLeft:'10px',
		marginRight:'10px',
		marginTop:'0px',
		marginBottom:'0px',
	},
	box: {
		position:'absolute',
		width:'30px',
		height:'30px',
		backgroundColor:'rgba(230, 43, 37, 1)',
	},
    innerbox: {
		position:'absolute',
		width:'15px',
		height:'15px',
		margin:'7px',
		backgroundColor:'white',
	},
});

export default Boxes;