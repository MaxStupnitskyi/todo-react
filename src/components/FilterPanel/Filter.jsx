import React from 'react';

const buttons = ['all', 'active', 'done'];

export default class Filter extends React.Component {
	render() {
		const { filter } = this.props;
		const renderedButtons = buttons.map(button => (
			<button
				className={`btn btn-outline-primary ${filter === button ? 'active' : ''}`}
				onClick={() => this.props.toggleFilter(button)}
				key={button}
			>
				{button}
			</button>
		));

		return (
			<div className="btn-group" role="group">
				{renderedButtons}
			</div>
		);
	}
}
