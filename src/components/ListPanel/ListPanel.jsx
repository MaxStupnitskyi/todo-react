import React from 'react';
import List from './List/List';
import AddListItem from './AddListItem/AddListItem';

export default class ListPanel extends React.Component {
	render() {
		return (
			<div>
				<List
					tasks={this.props.tasks}
					onToggleDone={this.props.onToggleDone}
					onToggleImportant={this.props.onToggleImportant}
					onDeleted={this.props.onDeleted}
				/>
				<AddListItem onAddTask={this.props.onTaskAdded} />
			</div>
		);
	}
}
