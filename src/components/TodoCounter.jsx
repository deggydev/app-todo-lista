function TodoCounter(props){
    const {total, complete} = props;

    if (total === complete) {
        return <h3>¡Felicidades! Has completado todas las tareas. 🎉</h3>;
    }

    return(
        <>
        <h3>Actividades completadas {complete} de {total} tareas.</h3>
        </>
    )
}

export default TodoCounter