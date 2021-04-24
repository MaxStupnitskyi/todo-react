import React from 'react';
import FilterPanel from '../FilterPanel/FilterPanel';
import Header from '../Header/Header';
import ListPanel from '../ListPanel/ListPanel';
import './App.sass';

export default class App extends React.Component {
	state = {
		tasks: JSON.parse(localStorage.getItem('tasks')) || [],
		filter: 'all',
		search: '',
	};

	componentDidUpdate() {
		localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
	}

	createTask(title) {
		return { title: title, important: false, done: false };
	}

	onTaskAdded(task) {
		const newTask = this.createTask(task);
		this.setState(({ tasks }) => {
			const newState = [...tasks, newTask];
			return { tasks: newState };
		});
	}

	changeTask(task, prop) {
		const changedTaskIndex = this.state.tasks.findIndex(item => item === task);

		const changedTask = this.state.tasks[changedTaskIndex];
		changedTask[prop] = !changedTask[prop];
		const newState = [
			...this.state.tasks.slice(0, changedTaskIndex),
			changedTask,
			...this.state.tasks.slice(changedTaskIndex + 1),
		];
		this.setState({ tasks: newState });
	}

	onToggleDone(task) {
		this.changeTask(task, 'done');
	}

	onToggleImportant(task) {
		this.changeTask(task, 'important');
	}

	onDeleted(task) {
		const deletedItem = this.state.tasks.findIndex(item => item === task);

		const newState = [
			...this.state.tasks.slice(0, deletedItem),
			...this.state.tasks.slice(deletedItem + 1),
		];
		this.setState({ tasks: newState });
	}

	toggleFilter(button) {
		this.setState({ filter: button });
	}

	filteredTasks(tasks) {
		switch (this.state.filter) {
			case 'active':
				return tasks.filter(task => !task.done);
			case 'done':
				return tasks.filter(task => task.done);
			default:
				return tasks;
		}
	}

	search(arr, query) {
		return query ? arr.filter(task => task.title.toLowerCase().includes(query.toLowerCase())) : arr;
	}

	applySearch(query) {
		this.setState({ find: query });
	}

	render() {
		const renderedTasks = this.filteredTasks(this.search(this.state.tasks, this.state.find));
		const done = this.state.tasks.filter(task => task.done).length;
		const active = this.state.tasks.length - done;
		return (
			<div className="App">
				<Header done={done} active={active} />
				<FilterPanel
					filter={this.state.filter}
					onSearch={query => this.applySearch(query)}
					toggleFilter={button => this.toggleFilter(button)}
				/>
				<ListPanel
					tasks={renderedTasks}
					onTaskAdded={data => this.onTaskAdded(data)}
					onToggleDone={task => this.onToggleDone(task)}
					onToggleImportant={task => this.onToggleImportant(task)}
					onDeleted={task => this.onDeleted(task)}
				/>
			</div>
		);
	}
}
