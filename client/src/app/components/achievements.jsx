import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';


// list all medals in a grid with type of medal, description, time
const style = {
  backgroundImage: "url('../src/public/img/speak.jpeg')",
  backgroundSize: '100px 100px',
  backgroundRepeat: 'no-repeat',
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Achievements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalMedals: 0,
      allMedals: ['Ten Hours Spanish', '1hr Looking at Cards', '5 min dab', 'OMG', 'Being a boss'],
      goldStars: [{from: 'languist', because: 'you rock'}, {from: 'lenny', because: 'dab dab'}]
    }
  }

  render() {
    return (
      <div>
        <h1>Achivements</h1>
        {this.state.allMedals.map((medal, key)=>{
          return(
            <div key={key}>
              <Paper 
              style={style} 
              zDepth={5} 
              circle={true}>
              </Paper>
              <h3>{ medal }</h3>
            </div>
            )
        })}
        {this.state.goldStars.map((star, key)=>{
          return(
            <div key={key}>
              <Paper 
              style={style} 
              zDepth={5} 
              circle={true}>
              </Paper>
              <h3>{ `${star.from} says ${star.because}` }</h3>
            </div>
            )
        })}
      </div>
    );
  }
}

export default Achievements;


