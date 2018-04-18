import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


class Question extends Component {
	render() {
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.img)} />
				<p className={css(styles.question)}>{this.props.question}</p>
				<Input keyword={this.props.keyword} next={this.props.next}/>
			</div>
		);
	}
}

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
		
	}
	
	handleSubmit(event) {
		if (this.state.value == this.props.keyword) {
			this.props.next();
			this.setState({value: ""});
		}
	}
	
	render() {
		return (
			<form className={css(styles.inputcontainer)} onSubmit={this.handleSubmit}>
				<label>
					<input 
						type="text" 
						value={this.state.value} 
						onChange={this.handleChange} 
						placeholder="Type in the keyword here" 
						className={css(styles.input)}
					/>
				</label>
				<input type="button" onClick={this.handleSubmit} value="✔" className={css(styles.submitButton)} />
			</form>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		position:'absolute',
		marginLeft:'15vw',
		marginTop:'15vw',
		marginBottom:'200px',
	},
    img: {
		
		width:'70vw',
		height:'25vh',
		backgroundColor:'#f5f5f5',
	},
	question: {
		fontSize:'19pt',
		fontFamily:'AvenirBlack',
		marginBottom:'50px',
	},
	inputcontainer: {
		border:'none',
	},
	input: {
		fontSize:'12pt',
		fontFamily:'Avenir',
		fontStyle:'italic',
		border:'none',
		backgroundColor:'#f5f5f5',
		width:'56vw',
		height:'10vw',
		paddingLeft:'2vw',
		paddingRight:'2vw',
	},
	submitButton: {
		width:'10vw',
		height:'10vw',
		backgroundColor:'rgba(230, 43, 37, 1)',
		color:'white',
		border:'none',
		fontFamily:'Avenir',
		fontSize:'15pt',
	},
});

export default Question;