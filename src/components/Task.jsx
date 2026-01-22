import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../store/taskSlice';
import '../styles/Task.css';

export const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEditSave = () => {
    if (editedDescription.trim() === '') {
      alert('Task description cannot be empty');
      return;
    }
    dispatch(editTask({ id: task.id, description: editedDescription }));
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setEditedDescription(task.description);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.isDone ? 'done' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggle}
          className="task-checkbox"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="task-edit-input"
            autoFocus
          />
        ) : (
          <span className={`task-description ${task.isDone ? 'completed' : ''}`}>
            {task.description}
          </span>
        )}
      </div>
      <div className="task-actions">
        {isEditing ? (
          <>
            <button onClick={handleEditSave} className="save-button">
              Save
            </button>
            <button onClick={handleEditCancel} className="cancel-button">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className="edit-button">
              Edit
            </button>
            <button onClick={handleDelete} className="delete-button">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};
