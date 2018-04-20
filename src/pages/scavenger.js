import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import $ from 'jquery';

import Boxes from '../components/boxes';
import Congratulations from '../components/congratulations';
import Question from '../components/question';
import TEDMenu from '../components/ted-menu.js';

const questions = 	[ 	{question:"answer:1234", keyword:"1234", },
						{question:"answer:2345", keyword:"2345", },
						{question:"answer:3456", keyword:"3456", },
						{question:"answer:4567", keyword:"4567", },
						{question:"answer:5678", keyword:"5678", },
						{question:"answer:6789", keyword:"6789", }
					];
					
const cacheKey = 'index';

class Scavenger extends Component {
    constructor() {
        super();
		
		var i = 0;
		if (localStorage[cacheKey] !== undefined){
			i = parseInt(localStorage[cacheKey]);
		}
		
        this.state = {
            open: false,
			correct: false,
			index: i,
        };
        
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
		this.increment = this.increment.bind(this);
		this.incorrect = this.incorrect.bind(this);
		this.notification = this.notification.bind(this);
    }
	
	componentDidMount() {
		$("#curtain").animate({
			opacity:0,
		}, 1);
		$("#notification").animate({
			opacity:0,
		}, 1);
	}
    
	openMenu() {
		this.setState({ open: true });
	};

	closeMenu() {
		this.setState({ open: false });
	};
	
	incorrect() {
		this.setState({ correct: false });
		this.notification();
	}
	
	increment() {
		this.setState({ index: this.state.index+1, correct: true });
		localStorage[cacheKey] = '' + (this.state.index+1);
		this.notification();
	};
	
	notification() {
		
		$("#curtain").animate({
			opacity:1,
		}, 1);
		$("#notification").animate({
			opacity:1,
		}, 1);
		
		$("#curtain").animate({
			height:'toggle',
		}, {duration:250, queue:false, complete:function() {
			$("#curtain").animate({
				opacity:'1'
			}, 4000, function() {
				$("#curtain").animate({
					height:'toggle',
				}, 250, function() {
					$("#curtain").animate({
						opacity:0,
					}, 1);
					$("#notification").animate({
						opacity:0,
					}, 1);
				});
				
			});
		}});
	}
    
	render() {
		
		const goodJobMessage = "Good job, that's correct!";
		const goodJobSubMsg = "Time for the next clue.";
		const sorryMessage = "Sorry, that's incorrect.";
		const sorrySubMsg = "Please try again!";
		
		var content = null;
		
		if (this.state.index < questions.length) {
			var question = questions[this.state.index];
			content = (
				<div>
					<Question question={question.question} keyword={question.keyword} next={this.increment} incorrect={this.incorrect} />
					<Boxes total={questions.length} index={this.state.index} />
					
					<div className={css(styles.container)} id="notification" style={{height:'15vh',}}>
						<div className={css(styles.textcontainer)}>
							<p className={css(styles.line1)}> {this.state.correct ? goodJobMessage : sorryMessage} </p>
							<p className={css(styles.line2)}> {this.state.correct ? goodJobSubMsg : sorrySubMsg} </p>
						</div>
					</div>
					
					<div className={css(styles.curtain)} id="curtain" style={{height:'15vh',}}/>
				</div>);
		} else {
			content = (
				<div>
					<Congratulations />
					<Boxes total={questions.length} index={this.state.index} />
				</div>);
		}
		
		return (

			<MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    
                    <AppBar 
                        title="TEDxUofW 2018"
                        titleStyle={{
                            fontSize: '16px',
                            fontWeight:'bold',
                            textAlign: 'center'
                        }} 
                        iconClassNameRight="muidocs-icon-navigation-expand-more" 
                        onLeftIconButtonClick={this.openMenu}
                    />
					{content}
					
                    <TEDMenu open={this.state.open} close={this.closeMenu} />
                </div>
			</MuiThemeProvider>

		);
	}
}

const styles = StyleSheet.create({
	curtain: {
		position:'absolute',
		marginTop:'67vh',
		width:'100vw',
		backgroundColor:'rgba(255, 255, 255, 1)'
	},
	container: {
		position:'absolute',
		marginTop:'67vh',
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

const muiTheme = getMuiTheme({
    palette: {
        textColor: '#000'
    },
    appBar: {
        color: 'rgba(230, 43, 37, 1)',
    },
});

export default Scavenger;