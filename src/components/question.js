import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import $ from 'jquery';


class Question extends Component {
	constructor(props) {
		super(props);
		if (this.props.keyword === "start") {
			this.state = {answered:true};
		} else {
			this.state = {answered:false};
		}
		
		this.correct = this.correct.bind(this);
		this.next= this.next.bind(this);
	}
	
	correct() {
		this.setState({answered:true});
	}
	
	next() {
		this.props.increment();
		this.setState({answered:false});
		this.setState({value: ""});	
		
			
			/*$("#image").animate({
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
			}});*/
	}
	
	render() {
		
		if (this.state.answered) {
			return (
			<div className={css(styles.container)} id="blurb" >
				<form className={css(styles.inputcontainer)} onSubmit={this.next}>
					<input type="button" onClick={this.next} value="Next Hint" className={css(styles.nextButton)} 
							style={{WebkitAppearance: 'none', borderRadius: '0',}}/>
				</form>
				<p className={css(styles.blurb)} id="image"> {this.props.blurb} </p>
				
			</div>
			);
		} else {
			return (
				<div className={css(styles.container)} id="question">
					<Input keyword={this.props.keyword} correct={this.correct} 
							incorrect={this.props.incorrect} increment={this.props.increment}/>
					<p className={css(styles.question)} >{this.props.question}</p>
					
				</div>
			);
		}
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
		if (this.state.value.toLowerCase() === this.props.keyword) {
			this.props.correct();
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
						placeholder="Type in keyword here" 
						className={css(styles.input)}
					/>
				</label>
				<input type="button" onClick={this.handleSubmit} value="ok" className={css(styles.submitButton)} 
						style={{WebkitAppearance: 'none', borderRadius: '0',}}/>
			</form>
		);
	};
	//"✔"
}

const styles = StyleSheet.create({
	container: {
		position:'absolute',
		marginLeft:'15vw',
		marginRight:'15vw',
		marginTop:'2vw',
		maxHeight:'60vh',
	},
    blurb: {
		position:'relative',
		fontSize:'12pt',
		fontFamily:'Avenir',
		marginBottom:'20px',
		maxHeight:'40vh',
		overflowY:'scroll',
		padding:'5%',
	},
	question: {
		position:'relative',
		fontSize:'15pt',
		fontFamily:'AvenirBlack',
		marginBottom:'20px',
		maxHeight:'50vh',
		overflowY:'scroll',
	},
	inputcontainer: {
		border:'none',
		position:'absolute',
		marginTop:'59vh',
	},
	input: {
		display:'inline-block',
		fontSize:'12pt',
		fontFamily:'Avenir',
		fontStyle:'italic',
		border:'none',
		backgroundColor:'#f5f5f5',
		width:'55vw',
		height:'5vh',
		paddingLeft:'2vw',
		paddingRight:'2vw',
	},
	submitButton: {
		display:'inline-block',
		width:'10vw',
		height:'5vh',
		backgroundColor:'rgba(230, 43, 37, 1)',
		color:'white',
		border:'none',
		fontFamily:'Avenir',
		fontSize:'15pt',
		textAlign:'center',
	},
	nextButton: {
		width:'70vw',
		height:'10vw',
		backgroundColor:'rgba(230, 43, 37, 1)',
		color:'white',
		border:'none',
		fontFamily:'Avenir',
		fontSize:'15pt',
		textAlign:'center',
	},
});

export default Question;