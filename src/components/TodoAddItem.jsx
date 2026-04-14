
import { Icon } from '@iconify/react';

function TodoAddItem(){
  return(
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button 
        style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#f4271d',
            color: 'white',
            padding: '10px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer'
        }}
        onClick={() => console.log('Agregar tarea')}
        > 
        <Icon style={{ fontSize: '30px' }} icon="mdi:plus" /> 
      </button>
    </div>
    
    </>
  )
}

export default TodoAddItem
