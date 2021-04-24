import React from 'react';
import './Header.sass';

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<h1 className="title">Todo</h1>
				<div className="counting">
					{this.props.active} more to do, {this.props.done} done
				</div>
			</div>
		);
	}
}
