import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import {List, Button, Header, Container, Segment} from 'semantic-ui-react';
import {Route, Link} from 'react-router-dom';


class Display extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            'topic': this.props.location.state.topic,
            'question': this.props.location.state.question,
            'question_link': '',
            'solution_link': '',
            'video_link': '',
        }
    }

    componentDidMount(){
        var info = {'topic': this.state.topic, 
                    'question': this.state.question}

        axios.post('/question', info)
        .then(x => x['data'])
        .then(x => this.setState({
            'question_link': x['question_link'],
            'solution_link': x['solution_link'],
            'video_link': x['video_link']}))
    }

  render() {
    return(
      <div>
          <div>
            <iframe src={this.state.question_link} height="600" align="middle"></iframe>
          </div>
          
          <div>
          <iframe src={this.state.solution_link} height="600"></iframe>
          </div>
      </div>
    )
  }
}

export default Display;