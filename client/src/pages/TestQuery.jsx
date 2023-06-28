import { useEffect, useState } from 'react'
import './TestQuery.css'
import {queryTask} from '../api/tasks.api.js'
import KeyWords from '../components/KeyWords'

export default function TestQuery () {

  const [query, setQuery] = useState('')

  const [rows, setRows] = useState()

  const [keys, setKeys] = useState()

  useEffect(() => {
    if(rows){
      setKeys(Object.keys(rows[0]));
    }
  }, [rows])

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await queryTask(query);
    console.log(response);
    if(Array.isArray(response.data))
      setRows(response.data)
  }

  return(
    <div className="layout-query">
      <form className='form-query' onSubmit={handleSubmit}>
        <label>Input</label>
        <textarea value={query} onChange={(handleChange)}></textarea>
        <button type='submit'>Send</button>
      </form>
      {
        rows &&
        <table>
          <thead>
            <tr>
              {
                keys && 
                  keys.map((item) => (
                    <th key={item}>{item}</th>
                  ))    
              }
            </tr>
          </thead>
          <tbody>
          {
            rows && rows.map((item, rowId) => (
              <tr key={rowId}>
                {
                  keys && keys.map((key, keyId) => (
                    <td key={keyId}>{item[key]}</td>
                  ))
                }
              </tr>
            ))
          }
          </tbody>
        </table>
      }
    </div>
  )
}