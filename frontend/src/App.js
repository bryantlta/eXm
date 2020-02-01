import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import {List, Button, Header, Container, Segment} from 'semantic-ui-react';
import {Route, Link} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      "topics":[]
    }
  }

  componentDidMount(){
    axios.get('/topics')
    .then(x => x['data'])
    .then(x => this.setState({"topics":x['topics']}))
  }

  render() {
    let topic_segments = []
    let i = 0;
    for (i; i < this.state.topics.length; i++){
      topic_segments.push(<Segment>
              <Link to={{
              pathname: '/q',
              state: {
                topic: this.state.topics[i],
              }
            }}> {this.state.topics[i]}
              </Link>
              </Segment>)
    }
    return(
      <div>
        
        <List>
          {topic_segments}
        </List>
      
      </div>
    )
  }
}

export default App;
