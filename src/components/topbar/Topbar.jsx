import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import Searchbar from '../searchbar/Searchbar'
import "./topbar.css"


export default function Topbar({handleSearch,handleDeleteMultiple}) {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
           <Searchbar handleSearch={handleSearch} />
        </div>
        <div className='topbarCenter'></div>
        <div className='topbarRight'>
          <button className='deleteButton' onClick={handleDeleteMultiple}>
              <DeleteOutlineIcon className='deleteIcon' />
          </button>
        </div>
    </div>
  )
}
