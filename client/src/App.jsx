import { Route, Routes } from 'react-router-dom'
import TaskPage from './pages/TaskPage.jsx'
import TaskForm from './pages/TaskForm.jsx'
import NotFound from './pages/NotFound.jsx'
import NavBar from './components/NavBar.jsx'
import { TaskContextProvider } from './context/TaskContext.jsx'
import './App.css'

export default function App() {
  return (
    <TaskContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<TaskPage />} />
        <Route path='/new' element={<TaskForm />} />
        <Route path='/edit/:id' element={<TaskForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
  )
}