import React from 'react';
import './List.sass';

let id = 0;
const generateId = () => id++;

export default class List extends React.Component {
	render() {
		const renderedTasks = this.props.tasks.map(task => {
			return (
				<li key={generateId()} className="list__item list-group-item">
					<span
						className={`list__item__text ${task.done && 'done'} ${task.important && 'important'}`}
						onClick={() => this.props.onToggleDone(task)}
					>
						{task.title}
					</span>
					<div className="list__item__buttons">
						<button
							className="list__item__button delete btn btn-outline-danger"
							onClick={() => this.props.onDeleted(task)}
						>
							<i className="fal fa-trash-alt"></i>
						</button>
						<button
							className="list__item__button important btn btn-outline-primary"
							onClick={() => this.props.onToggleImportant(task)}
						>
							<i className="fas fa-exclamation"></i>
						</button>
					</div>
				</li>
			);
		});

		return <ul className="list-group">{renderedTasks}</ul>;
	}
}
