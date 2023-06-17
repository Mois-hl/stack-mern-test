import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import './TaskForm.css'

export default function TaskForm() {

  const {handleCreate, loadTaskDetail, handleUpdate} = useTasks()
  const params = useParams()
  const [task, setTask] = useState({
    title: "",
    description: ""
  })
  const navigate = useNavigate()

  useEffect(() => {
    const loadTask = async () => {
      if(params.id){
        const task = await loadTaskDetail(params.id);
        setTask({
          title: task.title,
          description: task.description
        });
      }
    }
    loadTask();
  }, [])

  return (
    <div className='layout-form'>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if(params.id){
            await handleUpdate(params.id, values)
            navigate("/")
          }else{
            await handleCreate(values);
            actions.resetForm();
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}  className='form'>
            <label>title</label>
            <input
              type='text'
              name='title'
              placeholder='write a title'
              onChange={handleChange}
              value={values.title} />

            <label>descripción</label>
            <textarea
              name='description'
              rows='3'
              placeholder='write a description'
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}