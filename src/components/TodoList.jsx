function TodoList(props){

    const { children } = props
    return (
        <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '30px' }}>
            {children}
        </div>
        </>
    )
}

export default TodoList