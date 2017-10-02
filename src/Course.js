import React from 'react';

function Course(props) {
		const {title, description, url} = props.content;
		return (
			<div className="box course" >

				<article className="media">
				    <div className="media-left">
				      <figure className="image is-14x14">
				        
				      </figure>
				    </div>
				    <div className="media-content">
				      <div className="content">
				        <h2><a href={url} >{title}</a></h2>
				        <p>
				          {description}
				        </p>
				      </div>
				      <nav className="level is-mobile">
				        <div className="level-left">
				          <span className="level-item">
				            <span className="is-small">Tag, Tag2, Tag3</span>
				          </span>
				        </div>
				      </nav>
				    </div>
				  </article>
			</div>
		);
}

export default Course;