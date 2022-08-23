import { useState,useEffect } from 'react'
import Form from './components/Form';
import Products from './components/products';



function App() {
 

  return (<main className='bg-zinc-900 h-screen'>
    <div className='container mx-auto p-10'>
  <Form /> 
  <Products/>
  </div>
  </main>
)
 
}
 


export default App
