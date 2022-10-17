import React, { useState, useEffect } from 'react'

function Home() {
  const [tasks, setTasks] = useState([])
  const [newTaskValue, setNewTaskValue] = useState('')
  const [showAlertTaskId, setShowAlertTaskId] = useState(null)
  const handleTaskInputChange = (e) => setNewTaskValue(e.target.value)
  
  const handleSubmitTaskClick = (e) => {
    e.preventDefault()
    const newTask = { id: Math.round(Math.random() * 100000000) + Date.now(), value: newTaskValue }
    setTasks((prevState) => [...prevState, newTask])
    setNewTaskValue('')
  }

  const handleDeleteTask = (taskIndex) => {
    const newTaskArray = tasks.filter((task, index) => index !== taskIndex)
    setShowAlertTaskId(tasks[taskIndex].id)
    setTasks(newTaskArray)
  }

  useEffect(() => {
    if (showAlertTaskId) {
      alert(`Tache ${showAlertTaskId} supprimée`)
    }
   
  }, [showAlertTaskId])
  
  return (
    <div className='container'>
      <h1>Accueil</h1>

      <div className='mb-3'>
      <form onSubmit={handleSubmitTaskClick}>
        <label htmlFor='taskInput' className='form-label'>Tâches</label>
        <input name='taskInput' id='taskInput' type='text' className='form-control mb-2' value={newTaskValue} onChange={handleTaskInputChange}></input>
        <button type='submit' className="btn btn-primary">Enregistrer la tâche</button>
      </form>
      </div>
      <ul>
        {tasks.map(({value}, index) => (
          <>
            <li key={index}>{value}</li>
            <button type='button' className="btn btn-danger" onClick={() => handleDeleteTask(index)}>Supprimer</button>
          </>
        ))}
      </ul>
    </div>
  )
}

export default Home