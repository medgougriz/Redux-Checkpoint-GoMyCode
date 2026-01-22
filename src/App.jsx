import './App.css'
import { AddTask } from './components/AddTask'
import { ListTask } from './components/ListTask'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📝 My Todo App</h1>
        <p>Manage your tasks efficiently with Redux</p>
      </header>
      <main className="app-main">
        <AddTask />
        <ListTask />
      </main>
      <footer className="app-footer">
        <p>&copy; 2026 Redux Todo App. Built with React and Redux Toolkit.</p>
      </footer>
    </div>
  )
}

export default App
