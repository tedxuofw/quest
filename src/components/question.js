import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


class Question extends Component {
	render() {
		return (
			<div className={css(styles.container)}>
				<p className={css(styles.title)}>{this.props.title}</p>
				<p className={css(styles.description)}>{this.props.description}</p>
				<Input key={this.props.keyword} />
			</div>
		);
	}
}

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
		if (this.state.value == this.props.key) {
			
		}
	}
	
	render() {
		return (
			<form className={css(styles.inputcontainer)}>
				<label>
					<input 
						type="text" 
						value={this.state.value} 
						onChange={this.handleChange} 
						placeholder="Type in the keyword here" 
						className={css(styles.input)}
					/>
				</label>
			</form>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		position:'absolute',
		marginLeft:'50px',
		marginTop:'20px',
		marginBottom:'200px',
	},
    title: {
		fontSize:'40pt',
		fontFamily:'AvenirBlack',
	},
	description: {
		fontSize:'20pt',
		fontFamily:'Avenir',
		marginBottom:'100px',
	},
	inputcontainer: {
		border:'none',
	},
	input: {
		fontSize:'17pt',
		fontFamily:'Avenir',
		fontStyle:'italic',
		border:'none',
		marginLeft:'50px',
	},
});

export default Question;