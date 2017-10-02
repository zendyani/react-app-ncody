import React from 'react';
import Course from './Course.js';

function Courses(props) {
	return (
		<div>
          { props.items.map( item => <Course content={item} key={item.id} />) }
        </div>
	);
}

export default Courses;