import React from 'react'
import { Link } from 'react-router-dom' 
import {ReactComponent as AddIcon} from '../assets/add.svg'



const AddButton = () => {
  return (
    <Link to="/note/new" className='floating-button'>
        <AddIcon className="add-icon" />
    </Link>
  )
}

export default AddButton
