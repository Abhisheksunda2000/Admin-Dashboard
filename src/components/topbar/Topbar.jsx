import React from 'react'
import "./topbar.css"

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <div className='searchbar'>
                <input placeholder='Enter Value...' className='searchInput'></input>
            </div>
        </div>
        <div className='topbarCenter'></div>
        <div className='topbarRight'>
            <button className='deleteButton'>Delete</button>
        </div>
    </div>
  )
}
