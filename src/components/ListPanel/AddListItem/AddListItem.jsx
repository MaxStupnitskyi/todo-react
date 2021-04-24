import React from 'react';
import './AddListItem.sass';

export default class AddListItem extends React.Component {
	state = {
		value: '',
	};

	onTaskAdded(e) {
		e.preventDefault();
		this.props.onAddTask(this.state.value);
		this.setState({ value: '' });
	}

	render() {
		return (
			<form className="add-task" onSubmit={e => this.onTaskAdded(e)}>
				<input
					className="form-control"
					type="text"
					value={this.state.value}
					onChange={e => {
						this.setState({ value: e.target.value });
					}}
					placeholder="What needs to be done?"
				/>
				<button className="btn btn-outline-success">Add</button>
			</form>
		);
	}
}
