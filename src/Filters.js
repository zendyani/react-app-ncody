import React, {Component} from 'react';
import Filter from './Filter.js';

class Filters extends Component {
	
	constructor(props) {
		super(props);
		const filters = ["html", "css", "game", "challenge", "algorithm", "javascript", "devtools", "help"];
		this.state = { 
			selectedFilter: [], 
			filters: filters 
		};
	}

	hendelAddFilter(value) {
		// 1- search if filter exist on list
		// 2- add if not
		// 3- delete if yes
		// 4- update courses state

		const selected = value;
		let filters = this.state.selectedFilter;
		const inStateExist = filters.indexOf(selected);

		if ( inStateExist === -1) {
			filters.push(selected);
		} else {
			filters.splice(inStateExist, 1);
		}

		this.setState({ selectedFilter: filters }, () => this.props.onSelectFilter(this.state.selectedFilter) );
	}

	render() {
		const {selectedFilter, filters} = this.state;

		return (
			<div className="box" >
				<div className="content">
					<span>Filters: </span>	
					{filters.map(f => <Filter key={f} name={f} onClick={ this.hendelAddFilter.bind(this) }/>)}
		        </div>
			</div>
		)
	}
}

export default Filters;