import { useEffect, useState } from 'react'
import './TestQuery.css'
import {queryTask} from '../api/tasks.api.js'
import KeyWords from '../components/KeyWords'
import { v4 as uuidv4 } from 'uuid';

export default function TestQuery () {
  
  const [query, setQuery] = useState('')
  
  const [rows, setRows] = useState()
  
  const [keys, setKeys] = useState()

  const [uuid, setUuid] = useState(uuidv4().replaceAll('-', ''))
  
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
    // console.log(uuid);
    // const uuidQuery = query.replace('create table ', `create table ${uuid}`);
    // const uuidQuery = query.replace('from ', ` from ${uuid}`)
    // console.log(uuidQuery);
    const response = await queryTask(query);
    console.log(response);
    if(Array.isArray(response.data))
      if(!response.data.length == 0)
        setRows(response.data)
  }

  const handleOutputUuid = (value) => {
    const newValue = value.toString().replace(`${uuid}`, '');
    return newValue;
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
                    <td key={keyId}>{handleOutputUuid(item[key])}</td>
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