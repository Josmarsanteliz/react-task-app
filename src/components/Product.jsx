import React,{useContext} from 'react'
import {TaskContext} from '../context/dataContext'

function Product({task}) {
 const {deleteTask} = useContext(TaskContext);
  return (
    <>
        <div className='bg-gray-800 text-white p-4 rounded-md'>
        <h1 className='text-xl font-bold capitalize'>{task.materia}</h1>
        <p className='text-grey-500 text-sm'>{task.tarea}</p>
        <button  className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400'onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
        </div>
        </>
  )
}

export default Product