import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import $ from 'jquery';


class Question extends Component {
	
	render() {
		
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.img)} id="image"/>
				<p className={css(styles.question)} id="question" >{this.props.question}</p>
				<Input keyword={this.props.keyword} next={this.props.next} 
							incorrect={this.props.incorrect} increment={this.props.increment}/>
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
		var increment = this.props.increment;
		if (this.state.value === this.props.keyword) {
			this.setState({value: ""});		
			this.props.next();
			
			$("#image").animate({
				left:'500px',
			}, {duration:250, queue:false, complete:function() {
				
				$("#image").animate({
					left:'-500px',
				}, 0);
				
				increment();
				
				$("#image").animate({
					left:'0px',
				}, 250, function() {
					// Animation complete.
				});
			}});
			$("#question").animate({
				left:'500px',
			}, {duration:250, queue:false, complete:function() {
				
				$("#question").animate({
					left:'-500px',
				}, 0);
				
				$("#question").animate({
					left:'0px',
				}, 250, function() {
					// Animation complete.
				});
			}});
		} else {
			this.props.incorrect();
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
				<input type="button" onClick={this.handleSubmit} value="✔" className={css(styles.submitButton)} 
						style={{WebkitAppearance: 'none', borderRadius: '0',}}/>
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
		position:'relative',
		width:'70vw',
		height:'25vh',
		backgroundColor:'#f5f5f5',
	},
	question: {
		position:'relative',
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