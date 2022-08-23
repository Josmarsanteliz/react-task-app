import React, {useContext} from 'react'
import Product from './Product'
import {TaskContext} from '../context/dataContext.jsx'
function Products() {
  
const {datos} = useContext(TaskContext);

if (datos.length === 0) {
  return <h1 className='text-white text-4xl font-bold text-center'>Sin datos</h1>
} else {

  return (
    <>
     <div className='grid grid-cols-4 gap-2'>
    {
     
      datos.map((dato) => (
        <Product key={dato.id} task={dato}/>
      ))
    }
    </div>
    </>
  )
}
}

export default Products