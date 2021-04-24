import React from 'react';
export default class Search extends React.Component {
	state = {
		value: '',
	};

	search(e) {
		this.setState({ value: e.target.value });
		this.props.onSearch(e.target.value);
	}
	render() {
		return (
			<input
				className="form-control"
				type="text"
				placeholder="type to search"
				value={this.state.value}
				onChange={e => this.search(e)}
			/>
		);
	}
}
