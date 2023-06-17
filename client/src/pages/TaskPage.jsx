import { useEffect } from "react"
import TaskItem from "../components/TaskItem";
import { useTasks } from "../context/TaskContext";
import './TaskPage.css'

export default function App() {

  const {tasks, loadTasks} = useTasks()

  useEffect(() => {
    loadTasks();
  }, [])

  function renderMain() {

    if(tasks.length === 0) return <h2>No tasks yet</h2>

    return tasks.map(task => (
      <TaskItem task={task} key={task.id} />
    ))
  }

  return (
    <div>
      <div className="layout-cards">
        {
          renderMain()
        }
      </div>
    </div>
  )
}