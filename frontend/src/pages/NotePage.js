import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'


const NotePage = (history) => {

  const { id } = useParams()
  //console.log(id)

  let [note, setNote] = useState(null)


  useEffect(() => {
    getNote()
  }, [id])


  let getNote = async () => {
    if (id === 'new') return

    let response = await fetch(`http://localhost:8000/api/notes/${id}`)
    let data = await response.json()
    setNote (data)
  }
  
  let updateNote = async () => {
    let response = await fetch(`http://localhost:8000/api/notes/${id}/update/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    let data = await response.json()
    setNote (data)
  }
  
  let deleteNote = async () => {
    let response = await fetch(`http://localhost:8000/api/notes/${id}/delete/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    let data = await response.json()
    setNote (data)
  }

let createNote = async () => {
  let response = await fetch(`http://localhost:8000/api/notes/create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
  let data = await response.json()
  setNote (data)
}


let handleSubmit = () => {

  updateNote()    

}
  
  


let handleDelete = () => {

  deleteNote()

}



return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to="/">
          <ArrowLeft onClick={handleSubmit}/>
          
          </Link>
        </h3>
        {id !== 'new' ? (
        <Link to="/">
          <button onClick={handleDelete}>Apagar Nota</button>
          </Link>
        ): (
          <Link to="/">
          <button onClick={createNote}>Salvar Nota</button>
          </Link>
        )}
      
       
      </div>
      <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage
