import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import {List, Button, Header, Container, Segment} from 'semantic-ui-react';
import {Route, Link} from 'react-router-dom';

class Questions extends React.Component{
  constructor(props){
      super(props)

      this.state = {
          'topic': this.props.location.state.topic,
          'questions': []
      }
  }

  componentDidMount() {
      var topic = {'topic': this.props.location.state.topic}

      axios.post('/questions', topic)
      .then(x => x['data'])
      .then(x => this.setState({"questions":x['questions']}))
  }

  render() {
    let question_segments = []
    let i = 0;
    for (i; i < this.state.questions.length; i++){
      question_segments.push(<Segment>
              <Link to={{
              pathname: '/d',
              state: {
                topic: this.state.topic,
                question: this.state.questions[i],
              }
            }}> {this.state.questions[i]}
              </Link>
              </Segment>)
    }
    return(
      <div>
        <List>
          {question_segments}
        </List>
      
      </div>
    )
  }
}

export default Questions;
