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

const questions = 	[ 	{question:"Type 'start' to start the hunt!", keyword:"start", blurb:"Welcome to TEDxUofW Moonshot Scavenger Hunt! There are various words scattered throughout the experience parlor leading to a small prize. Each time you come across a word, if you think it matches the prompt, try entering it into the box! Be sure to keep an eye out for 3D printed TEDxUofW logos and have fun exploring!", },
						{question:"If you were to give a TED talk of your own, you might be very careful with how you do this with your words. (Hint: Check out the speech bubbles!)", keyword:"choose", blurb:"Maya Angelou is an American writer, poet, actress and civil rights activist.  She is a sexual assault survivor who refused to be silenced in spite of a Jim Crow society that promoted silence and shame.  She became the first African American woman to have a non fiction bestseller, I Know Why the Caged Bird Sings. She read her poem, “On the Pulse of Morning” at the 1993 inauguration of Bill Clinton and received several NAACP image awards for outstanding literary work.", },
						{question:"Next: This is a place that many have dreamed of going, but few have ever succeeded in. (Hint: Take a trip in the UW Mobile Planetarium.)", keyword:"moon", blurb:"Project Apollo promised to do the impossible, to take humankind to the moon. The mission that coined the term moonshot, John F. Kennedy’s speech served as inspiration to the nation that came to fruition in the Apollo space program, but also had a lasting impact on the mentality of many people long after we had made it to the moon.", },
						{question:"Next: This word merely scratches the surface on how one might describe their experience as a woman in engineering. (Hint: The Society of Women Engineers might be able to provide some insight)", keyword:"hard", blurb:"Katherine Johnson was an African American mathematician who faced severe discrimination for both her race and her gender while working for NASA. Despite the hard task of overcoming stereotypes and stigmas, she persevered, integral to the success of the first and following U.S. manned space flights. She went on to become nationally recognized as a leader for women in engineering, depicted in the movie Hidden Figures and awarded the Presidential Medal of Freedom by President Barack Obama.", },
						{question:"Next: You likely have plenty of these, whether they appear to be simple or nearly impossible. (Hint: Go write about yours and send it off to outer space on our string of rockets!)", keyword:"goal", blurb:"While she didn’t fly a rocket, persay, Amelia Earhart was the first female aviator to fly solo across the Atlantic ocean. She was the first woman to get a pilot’s license from the National Aeronautic Association.  She defied conventional feminine behavior in a male dominated business in spite of financial and prejudicial challenges and paved the way for many women in the aviation industry.", },
						{question:"At some point in all of our lives we have had to do this, whether it be a file cabinet or curating one’s own event.  (Hint: Husky Robotics has had to this while working on their many projects)", keyword:"organize", blurb:"In November 2011, a car sized rover called Curiosity was launched by NASA’s Mars Science Laboratory. It landed on Mars in August of 2012.  Curiosity’s goal is to investigate the climate and Geology of Mars, more specifically, the Gale Crater. Curiosity is used to assess water environmental conditions for microbial life to help prepare for human exploration. Curiosity’s stay on Mars has been extended indefinitely and is being used as the model for the Mars 2020 rover.", },
						{question:"Many do this when they need to know their height or meet some specification when creating something. (Hint: whether you are designing a rocket or clocking its speed, you need to ______ it to get your results.)", keyword:"measure", blurb:"Georgia O’Keefe is regarded as the mother of American Modernism. After quitting painting three times in her lifespan, she has created a body of work depicting flowers, skyscrapers, animal skulls and southeastern landscapes. In 1977 she was presented with the Presidential Medal of Freedom by Gerald Ford. She is quotes saying,'I've been absolutely terrified every moment of my life and I've never let it keep me from doing a single thing I wanted to do.'", } ,
						{question:"We all try to put our ____ foot forward when starting a new project or meeting a new person.  (Hint: Formula One Motorsports has tries their ___ all time when working on their projects.)", keyword:"best", blurb:"The land speed record is highest speed a person has reached in a vehicle while on land. The official land-speed record (measured over one mile) is 763.035 miles per hour which was set by Andy Green in 1997. He was the first person to break the sound barrier in a moving vehicle on land.", } ,
						{question:"___ can never be created nor destroyed, only can be transformed from one form to another.  (Hint: Check out Hyperloop to see what they use a lot of this working on.)", keyword:"energy", blurb:"Elon Musk a South African born American entrepreneur.  He is the founder of SpaceX, Tesla, and Paypal. Before he became a multimillionaire in his late twenties, he was rejected from working at several companies, and was removed as CEO of multiple companies, both were his own startups. He launched a rocket with his company, SpaceX, that would send the first commercial vehicle to the International Space Station", } ,
						{question:"We all develop this over time as we continue to try new things and continuously work on them.  (Hint: The creators of the Human Powered Submarine have a diverse set of this to be able to create their submarine.)", keyword:"skill", blurb:"Born in France in 1910, Jacques Cousteau originally planned to be a naval aviator when he joined the French navy until he was in a horrific car crash in 1936, making him not able to finish his pilot training. Jacques went on to invent the Aqua-Lung, a device to help with breathing while scuba diving in 1943. He went on to start the French navy’s undersea research group. He began to film his yearly expeditions on his ship the Calypso and produced the TV series the Undersea World of Jacques Cousteau.  ", } ,
						{question:"We all face these as we go through life, while some may be harder than others, we experience personal growth as we face them. (Hint: Check out Tyler Ung’s art installation to learn a bit more about how these relate to the world at large.)", keyword:"challenge", blurb:"Stephen Wiltshire was born in London, was mute as a baby, and was diagnosed with autism at the age of three. By the time turned 8, he received his first commission from the British Prime Minister to create a drawing of Salisbury Cathedral. He is most known for his drawings of cities completely from memory.  In December 2005, he created a 10 meter long drawing of Victoria Harbour in Hong Kong after a mere 20 minute helicopter ride overlooking the city. He later did the same for Frankfurt, MAdrid, Dubai, Jerusalem, and London.", } ,
						{question:"You must be ____ to try new things and learn about different ideas. (Hint:  The Society for Advanced Rocket Propulsion is ____ to fail and succeed when experimenting with different rockets.)", keyword:"willing", blurb:"On October 14th, 2012 Felix Baumgartner, an Australian daredevil jumped from a hot air balloon to the Earth, thus jumping from the Stratosphere.  He ultimately reached 1.25 times the speed of sound (1,357.64 km/h) on his descent back to Earth. He is the first person in history to break the sound barrier without vehicular power.", } ,
						{question:"When we ____ one another for who we are we feel more ___ed in our own communities. (Hint:  At the photo booth we ____ the way we look when captured by a camera.)", keyword:"accept", blurb:"Humans of New York is a photo blog that was started in 2010 by Brandon Stanton. His goal was to take 10,000 portraits of New Yorkers that he met on the street. His project has gone viral on social media and has resonated with over twenty million followers. The glimpses of the daily lives of people has allowed for people to feel genuine connections with strangers across the world. His project has also resulted in two New York Times Bestselling books.", } ,
						{question:"All of us on the TEDxUofW team ___ for you to have a wonderful experience at the conference this year. (Hint:  All of the speakers ____ for you to learn something from their talks. Go chat with them to discuss ideas!)", keyword:"intend", blurb:"Malala Yousafzai is the youngest person to ever receive the Nobel Peace Prize (2014) after surviving being shot by the Taliban when traveling home from school in Pakistan in 2012. She blogged anonymously for the BBC about her experience of the Taliban threatening to take away her education.  She is a children’s rights activist and an advocate for equal education opportunities for Women. After, the attack she continues to advocate to this day and gave a speech for the UN where July 12th, her birthday, has officially been recognized as Malala day.", } ,
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
		this.correct = this.correct.bind(this);
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
		this.notification();
		this.setState({ correct: false });
	}
	
	correct() {
		this.setState({ correct: true });
		this.notification();
	}
	
	increment() {
		localStorage[cacheKey] = '' + (this.state.index+1);
		this.setState({ index: this.state.index+1 });
	};
	
	notification() {
		
		$("#curtain").animate({
			opacity:1,
		}, {duration:250, queue:false});
		$("#notification").animate({
			opacity:1,
		}, {duration:250, queue:false});
		
		$("#curtain").animate({
			height:'0%',
		}, {duration:250, queue:false, complete:function() {
			$("#curtain").animate({
				opacity:'1'
			}, 4000, function() {
				$("#curtain").animate({
					height:'100%',
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
					<Question question={question.question} keyword={question.keyword} blurb={question.blurb}
									next={this.correct} incorrect={this.incorrect} 
									increment={this.increment}/>
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