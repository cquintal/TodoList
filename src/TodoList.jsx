import { useState, useEffect } from 'react'
import Todo from './components/Todo'


function App() {
  const [Tarea, setTarea] = useState('');
  const [Tareas, setTareas] = useState( ()=> {
  
    const Savetask = window.localStorage.getItem("Task");

    if(Savetask){
      return JSON.parse(Savetask)
    } else {
      return []
    }
  });

  useEffect( ()=> {
    window.localStorage.setItem("Task", JSON.stringify(Tareas))
  })

  function ObtenerTarea(event){

   const texto = event.target.value.trim();
	setTarea(event.target.value);

  }

  function guardarTarea(){
  
    if(Tarea){
      setTareas([...Tareas, Tarea])
      setTarea('')
    }

  }

  function EliminarTarea (index) {
     const  NuevaTarea = [...Tareas]
     NuevaTarea.splice(index, 1)
     setTareas(NuevaTarea)
  }


  return (
    <>
    <br></br>

    <div  className='container'> 
			<div className='row'>
			<div className='col-md-3'></div>
			<div className='col-md-6'>
				<h2 className='text-center'>Lista De Tareas</h2>
				<br></br> 
				<div className="input-group mb-3">
					<input  type="text" value={Tarea} onChange={ObtenerTarea} className="form-control" placeholder="Agregar Tarea" aria-label="Recipient's username" aria-describedby="button-addon2" />
					<button type='submit' onClick={guardarTarea} className="btn btn-outline-secondary"  id="button-addon2">Agregar</button>
				</div>
				<br></br>
			</div>
		
		<div className='col-md-3'></div>
			</div>
		
		</div> 

	{ Tareas.map((tarea, index) => (
  <Todo key = { index }
  tarea = {tarea}
  EliminarTarea = { EliminarTarea }
/>

  ))}
	
	</>
  )
}

export default App
