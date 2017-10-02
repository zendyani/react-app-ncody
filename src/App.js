import React, { Component } from 'react';
import axios from 'axios';
import Courses from './Courses.js';
import Filters from './Filters.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {courses: []};
  }

  componentDidMount() {
    // make ajax call to fill courses state
    axios.get(`/data/items.json`)
        .then(response => { this.setState({courses: response.data, original: response.data})} )
  }

  // will be executed as callback when filters will be updated
  updateCourses = (filters) => {

    // transform filters array to regexp of OR elements
    let regexp_filter = filters.join("|");
    let f_courses = this.state.original.filter( (course) => {
        // transform tag to string separated with , to be searchable with regexp
        return course.tag.join(",").match(regexp_filter);
    });

    this.setState({courses: f_courses});
  }
 
  render() {
    const items = this.state.courses;

    return (
      <div className="App Container">
        <Filters onSelectFilter={this.updateCourses}  />
        <div className="content">
          <p>
            Ncody is the our representation of what a web learning experience must be,
            the goal is to make existing content on different subject like web developement and 
            system administration easy to access and well orginized for beginner and intemediat level
          </p>
        </div>  
        <Courses items={items} />
      </div>
    );
  }
}

export default App;