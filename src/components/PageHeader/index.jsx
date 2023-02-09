import React from 'react'
import './style.scss'

function PageHeader(props) {
  return (
    <>
        <div className="header-container">
            <div className='header-container-name'>{props.name}</div>
            <div className='header-container-icon'>{props.icon}</div>
        </div>
    </>
  )
}

export default PageHeader