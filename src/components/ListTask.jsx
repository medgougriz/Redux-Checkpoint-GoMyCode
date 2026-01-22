import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Task } from './Task';
import '../styles/ListTask.css';

export const ListTask = () => {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector((state) => state.tasks.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  const stats = {
    total: tasks.length,
    done: tasks.filter((t) => t.isDone).length,
    notDone: tasks.filter((t) => !t.isDone).length,
  };

  return (
    <div className="list-task-container">
      <div className="stats-section">
        <div className="stat">
          <span className="stat-label">Total:</span>
          <span className="stat-value">{stats.total}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Completed:</span>
          <span className="stat-value done">{stats.done}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Pending:</span>
          <span className="stat-value pending">{stats.notDone}</span>
        </div>
      </div>

      <div className="filter-section">
        <h3>Filter Tasks</h3>
        <div className="filter-buttons">
          <button
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Tasks
          </button>
          <button
            className={`filter-button ${filter === 'done' ? 'active' : ''}`}
            onClick={() => setFilter('done')}
          >
            Completed
          </button>
          <button
            className={`filter-button ${filter === 'notDone' ? 'active' : ''}`}
            onClick={() => setFilter('notDone')}
          >
            Pending
          </button>
        </div>
      </div>

      <div className="tasks-section">
        {filteredTasks.length === 0 ? (
          <p className="no-tasks">
            {filter === 'all'
              ? 'No tasks yet. Add one to get started!'
              : filter === 'done'
              ? 'No completed tasks.'
              : 'No pending tasks. Great job!'}
          </p>
        ) : (
          <div className="tasks-list">
            {filteredTasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
