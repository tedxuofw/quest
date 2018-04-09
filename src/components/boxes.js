import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

import Modal from 'react-modal';

class Boxes extends Component {
    
	render() {
		return (
			<div className={css(boxStyles.container)}>
				<Box s={this.props.index <= 0 ? (this.props.index != 0 ? 0 : 1) : 2} />
				<Box s={this.props.index <= 1 ? (this.props.index != 1 ? 0 : 1) : 2} />
				<Box s={this.props.index <= 2 ? (this.props.index != 2 ? 0 : 1) : 2} />
				<Box s={this.props.index <= 3 ? (this.props.index != 3 ? 0 : 1) : 2} />
				<Box s={this.props.index <= 4 ? (this.props.index != 4 ? 0 : 1) : 2} />
				<Box s={this.props.index <= 5 ? (this.props.index != 5 ? 0 : 1) : 2} />
				<Box s={this.props.index <= 6 ? (this.props.index != 6 ? 0 : 1) : 2} />
				<Box s={this.props.index <= 7 ? (this.props.index != 7 ? 0 : 1) : 2} />
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
		marginTop:'50px',
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