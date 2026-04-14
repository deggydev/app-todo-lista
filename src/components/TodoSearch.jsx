import { Icon } from '@iconify/react';

function TodoSearch(){
  return(
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
        <Icon icon="mdi:magnify" style={{ fontSize: '35px' }} />
        <input
        type="text" 
        placeholder="Buscar tarea" 
        style={{ width: '300px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
    </div>
    </>
  )
}
export default TodoSearch