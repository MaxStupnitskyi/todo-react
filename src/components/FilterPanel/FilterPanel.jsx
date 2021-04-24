import React from 'react';
import Filter from './Filter';
import Search from './Search';
import './FilterPanel.sass';
export default class FilterPanel extends React.Component {
	render() {
		return (
			<div className="filter-panel">
				<Search onSearch={this.props.onSearch} />
				<Filter filter={this.props.filter} toggleFilter={this.props.toggleFilter} />
			</div>
		);
	}
}
