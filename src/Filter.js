import React, {Component} from 'react';

class Filter extends Component {
	
	constructor(props) {
		super(props);
		this.state = {selected: false};
	}

	/*
	* Handel click event and execute onClick on parent component
	* Make click element selection style toggle
	*/
	_handelClick = (event) => {
		this.props.onClick(this.props.name);
		this.setState((prev) => {
			return {selected: !prev.selected};
		});
	}

	/*
	* toggle selection
	*/
	_isSelected = () => {
		if (this.state.selected) {
			return 'is-success';
		}
		return '';
	}

	render() {
		const {name} = this.props;
		return (
            <a>
            	<span className={"tag " + this._isSelected() } onClick={this._handelClick}>{name.toUpperCase()}</span>
            </a>
		)
	}
}

export default Filter;