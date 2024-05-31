
function Todo ( { tarea, EliminarTarea } ) {

	const color ={
		color: "8e0c00"
	}

	return(
		<div  className='container'> 
			<div className='row'>
			<div className=" col-md-3"></div>
				<div className=" col-md-6">
				<ul className="list-group">
					<li className="list-group-item d-flex justify-content-between align-items-center">
						{ tarea}
						<span className="bi bi-trash-fill text-danger" onClick={ EliminarTarea} ></span>
					</li>
				</ul>
				</div>
				<div className=" col-md-3"></div>
			</div>
		</div>
	)
}

export default Todo