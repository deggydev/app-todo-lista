
import { Icon } from '@iconify/react';

function TodoItem(props){
    const { id, actividad, isComplete, fechaCreacion } = props;
  return (
    <div style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center', gap: '15px', padding: '10px' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon 
                    icon={isComplete ? "mdi:check-bold" : "mdi:check-bold"} 
                    color={isComplete ? "green" : "red"} 
                    style={{ fontSize: '30px', textAlign: 'center' }}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{actividad}</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#d6d6d6' }}>{fechaCreacion.toLocaleDateString()}</p>
            </div>
        </div>
      
        <div style={{ display: 'flex', gap: '10px' }}>
            <button 
                style={{ 
                    padding: '9px 10px', 
                    border: 'none', 
                    borderRadius: '50%', 
                    textAlign: 'center', 
                    justifyItems: 'center' }}>
                <Icon icon="mdi:edit" />
            </button>
            <button 
                style={{ 
                    padding: '9px 10px', 
                    border: 'none', 
                    borderRadius: '50%', 
                    textAlign: 'center', 
                    justifyItems: 'center' }}>
                <Icon icon="mdi:delete" />
            </button>
        </div>
    </div>
  )
}
export default TodoItem