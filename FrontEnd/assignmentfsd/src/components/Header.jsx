
import React from 'react'
import './CSS/common.css'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  const handleLogOut = () => {

    localStorage.removeItem('jwt-token');
    navigate('/');
  }
  return (
    <div>
      <div className="header">
        <h1>Welcome</h1>
        <div className="container">
          <form>
            <Link to={'/upload'}><button className='btn'>Upload Data</button></Link>
            <Link to={'/display'}><button className='btn'>Display Data</button></Link>
            <button className='btn-l' onClick={handleLogOut}>Logout</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header
