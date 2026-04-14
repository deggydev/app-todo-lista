function TodoCounter(props){
    const {total, complete} = props;
    return(
        <>
        <h3>Actividades completadas {complete} de {total} tareas.</h3>
        </>
    )
}

export default TodoCounter