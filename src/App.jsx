import { useState } from 'react';
import './Styles/style.css'

function App() {


const [task, setTask] = useState([]); // Array Vacio que guarda las tareas
const [newTask, setNewTask] = useState(''); // Inputs que se van a ir añadiendo al array

const handleInputChange = (event) => {
  if (event.target.value.length <= 60) { // Maximo 100 caracteres
  setNewTask(event.target.value)  // Referencia a lo que se escribe en el Input, modifica al array vacio de partida
}
}

const handleAddTask = () => {
  if(newTask.trim() !== ''){ // New Task es distinto de un string vacio?
    setTask([...task, newTask]) // Agrega la nueva tarea establecida del input y deja por detras a las antiguas
    setNewTask('') // El input siguiente queda vacio para una nueva entrada, el cleanup
  }
}

const handleDeleteTask = (index) => {
  const updatedTask = [...task] // Copia de todas las tareas hasta el momento y se guardan aca
  updatedTask.splice(index, 1); // Ubica el elemento segun su index y borrara el mismo elemento
  setTask(updatedTask) // Seteo el Array de tareas nuevo con el elemento eliminado

}



  return (

  <div>
    <h1>Desafio 2 Barra de Tareas</h1>
    <input
      class="form-control custom-input"
      type="text"
      placeholder="Agrega tu Tarea:"
      value={newTask} // Valor que toma el input, toma el que se establecio en el setNewTask
      onChange={handleInputChange} // Funcion que escucha lo que escribe el teclado
    />
  {/* Boton y Funcion que Agregan la tarea a la lista */}
  <div class="d-flex justify-content-center align-items-center pt-3">
    <button class="btn btn-success" onClick={handleAddTask}>Agregar Tarea</button>
    </div>
    <div class="d-flex justify-content-center align-items-center pt-3">
    <ul>
  {/* Mapeo de las tareas y su index en el array */}
      {task.map((value, index)=> (
        // La clave identificadora del listado es su index
        <li key={index}> 
        {/* Se muestra el valor tomado del mapeo */}
          {value}
  {/* Funcion y boton que borra la tarea nueva */}
          <button class="btn btn-danger buttonDelete" onClick={()=> handleDeleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
    </div>
  </div>

  )
}

export default App
