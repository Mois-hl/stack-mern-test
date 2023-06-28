import { Link } from 'react-router-dom'
import './NavBar.css';

export default function NavBar() {
  return (
    <div className='navbar'>
      <h1>React Mysql</h1>

      <ul>
        <li>
          <Link to='/'><span>Home</span></Link>
        </li>
        <li>
          <Link to='/new'><span>Create task</span></Link>
        </li>
        <li>
          <Link to='/test'><span>Query test zone</span></Link>
        </li>
      </ul>
    </div>
  )
}