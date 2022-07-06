import React from 'react'

export default function TechnoAdd() {
  return (
    <div className='techno-add'>
        <h1>Ajouter une techno</h1>
        <form>
            <label htmlFor='techno-name'>Name:</label>
            <br/>
            <input type="text" name='techno-name'></input>
        </form>
    </div>
  )
}
