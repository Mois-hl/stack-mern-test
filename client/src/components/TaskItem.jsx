import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import './TaskItem.css'

/* eslint-disable react/prop-types */
export default function TaskItem({ task }) {

  const { handleDelete, toggleTaskDone } = useTasks()
  const navigate = useNavigate()
  const handleDone = async () => {
    await toggleTaskDone(task.id)
  }

  return (
    <div className="card">
      <h2>{`${task.title}`}</h2>
      <p>{task.description}</p>
      <span>{task.createAt}</span>
      <div className="buttons">
        <button style={{ background: '#33aaff' }} onClick={() => { navigate(`edit/${task.id}` ) }}>update</button>
        <button style={{ background: '#ff4466' }} onClick={() => {handleDelete(task.id)}}>delete</button>
        <button style={{ background: '#ddd' }} onClick={() => {handleDone()}}>{task.done == 1 ? "🐱‍👤" : "🍙"}</button>
      </div>
    </div>
  );
}