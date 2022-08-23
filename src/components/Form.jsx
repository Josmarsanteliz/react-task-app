import React, {useState, useContext} from 'react'
import { TaskContext} from '../context/dataContext'

const Form = () => {
  
  const [materia, setMateria] = useState('');
  const [tarea, setTarea] = useState('');
 const { addTask } = useContext(TaskContext); //Destructuring

  function handleSubmit (e) {
    e.preventDefault()
    // const newTask = {
    //   materia,
    //   tarea,
    //   id: 30
      
    // }
    addTask(materia,tarea);
  }
  return (
    <div className='max-w-md mx-auto'>
    <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
      <h1 className='text-2xl font-bold capitalize text-white mb-1'>crear tarea</h1>
      <input className='bg-slate-300 p-3 w-full mb-2' type="text" name="" id=""  placeholder='añadir materia' onChange={(e) => setMateria(e.target.value)}/>
      <input className='bg-slate-300 p-3 w-full mb-2' type="text" name="" id=""  placeholder='añadir tarea' onChange={(e) => setTarea(e.target.value)}/>
      <button type="submit" className='bg-indigo-500 px-3 py-y text-white rounded-md capitalize hover:bg-indigo-400'>agregar tarea</button>
    </form>
    </div>
  )
}

export default Form