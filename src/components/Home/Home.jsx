import React, { useState, useEffect } from 'react'

function Home() {
  const [tasks, setTasks] = useState([])
  const [newTaskValue, setNewTaskValue] = useState('')
  const [showAlertTaskId, setShowAlertTaskId] = useState(null)
  const handleTaskInputChange = (e) => setNewTaskValue(e.target.value)
  
  const handleSubmitTaskClick = () => {
    const newTask = { id: Math.round(Math.random() * 1000), value: newTaskValue}
    const newTaskArray = [...tasks, newTask]
    setTasks(newTaskArray)
    setNewTaskValue('')
  }

  const handleDeleteTask = (taskId) => {
    const newTaskArray = tasks.filter(({id}) => id !== taskId)
    setShowAlertTaskId(taskId)
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
        <label htmlFor='taskInput' className='form-label'>Tâches</label>
        <input name='taskInput' id='taskInput' type='text' className='form-control mb-2' value={newTaskValue} onChange={handleTaskInputChange}></input>
        <button type='button' className="btn btn-primary" onClick={handleSubmitTaskClick}>Enregistrer la tâche</button>
      </div>
      <ul>
        {tasks.map(({id, value}) => (
          <>
            <li key={id}>{value}</li>
            <button type='button' className="btn btn-danger" onClick={() => handleDeleteTask(id)}>Supprimer</button>
          </>
        ))}
      </ul>
    </div>
  )
}

export default Home