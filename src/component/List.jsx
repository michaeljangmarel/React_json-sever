 import React from 'react'
import Table from './Table'
  
 const List = ({task ,idss,upp}) => { 
    return ( 
    
     <div>
         <Table task={task} idss={idss} upp={upp}/>
 
     </div>
   )
 }
 
 export default List


