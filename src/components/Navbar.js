import React from 'react'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <div className='col-md-2'>
                    <a className="navbar-brand" href="#">
                        <img src={require("../images/logo.png")} alt="" width="120" height="60" className="d-inline-block align-text-top" />
                    </a>
                </div>
                <div className='col-md-8'>
                    <input className="form-control me-2" type="search" placeholder="Search company, tagline, category, title ..." aria-label="Search" />
                </div>
                <div className='col-md-2'></div>
            </div>
        </nav>
    </>
  )
}
