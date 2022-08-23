import  { createContext, useState,useEffect } from 'react' //va con useContext
import {data} from '../data/data'

export const TaskContext = createContext()// name, se le dice provider a la funcion ya que provee,en useContext usa esto de parametro

export function DataContextProvider(props) {
    const [datos, setDatos] = useState([]);

    function addTask (materia,tarea) {
        setDatos([...datos, {
          materia,
          tarea,
          id: datos.length
        }]);
      }

      function deleteTask (taskId) {
        const newDatos = datos.filter(dato => dato.id !== taskId);
        setDatos(newDatos);
      }

      useEffect(() => {
        setDatos(data);
      }, [])
      


  return (
  <TaskContext.Provider value={{
    datos,
    deleteTask,
    addTask
  }}>
{props.children}
</TaskContext.Provider>
  )
}

export default DataContextProvider