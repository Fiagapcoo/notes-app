import React from 'react'
import { Link } from 'react-router-dom'


let getDate = (note) => {
  
  return new Date(note.updated).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

}

let getTitle = (note) => {

  let title = note.body.split('\n')[0]
  if (title.length > 20) {
    title = title.substring(0, 20) + '...'
  }
  if (title.length === 0) {
    title = 'Sem nome'
  }
  return title


}




const ListItem = ({note}) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className='notes-list-item'>

         <h3>{getTitle(note)}</h3>
          <p><span>{getDate(note)}</span> </p>

      </div>
     
    </Link>
  )
}

export default ListItem
