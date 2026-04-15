function TodoProgressBar(props){
  const {total, complete} = props;
  const percentage = total > 0 ? Math.round((complete / total) * 100) : 0;
  
  return(
    <div style={{ 
          maxWidth: '80%',
          minWidth: '80%',
          margin: '0px auto',  // <-- Cambia '10px 0' por '10px auto'
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
     }}>
      {/* Contenedor con porcentaje */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        fontSize: '14px',
        fontWeight: 'bold'
      }}>
        <span>{percentage}%</span>
      </div>
      
      {/* Barra de progreso personalizada */}
      <div style={{
        width: '100%',
        height: '5px',
        backgroundColor: '#e0e0e0',
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Barra de progreso rellena */}
        <div style={{
          width: `${percentage}%`,
          height: '100%',
          backgroundColor: percentage === 100 ? '#4caf50' : '#f4271d',
          transition: 'width 0.3s ease',
          borderRadius: '5px'
        }} />
      </div>
    </div>
  )
}
export default TodoProgressBar