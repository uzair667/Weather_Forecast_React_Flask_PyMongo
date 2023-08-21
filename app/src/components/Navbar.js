import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active"  aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/weatheranalytics" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Weather Analytics
              </Link>

              <ul className="dropdown-menu" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', borderRadius: '10px' }}>
                <li><Link className="dropdown-item" to="/bydate" style={{ color: '#0d6efd' }}>Check Weather By Date</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/textbox">Textbox</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/news">News</Link>
            </li>
          </ul>
          <div className="mx-2"></div>
          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <input className="form-check-input" onClick={props.changemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}