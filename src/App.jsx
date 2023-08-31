 import './App.css';
import List from './component/List';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './component/Form';
import { useEffect, useState } from 'react';
import { api } from './api/apiStart';
import uuid from 'react-uuid';

function App() { 
   
  const [todo , settodo ] = useState([])
  const fetchdata = async() => { 

   const res = await api.get('/todolist'); 

   settodo(res.data); 
     } 
 

     // add process 
     const btnadd  =async (work) => { 

        const data = { 
           id : uuid(), 
          task : work.current.value ,
          complete  : false  
        } 

      await api.post('todolist',data) 
        work.current.value = '';   


    } //add process  


    // delete process 
    const remove = async (id) => { 
        

      
       await api.delete('todolist/'+id)

    } 
    // delete process 
   
    // update process 
     
    const updated = async (idup , complete ) => {  
         await api.patch(`todolist/${idup}`,{complete}) // <- should same with db.jso -> 
      }
    // update process 

  useEffect(() => {  
     fetchdata() 
   },[todo])
  return (
 <div className='mx-auto w-50 mt-5'> 
    <Form btnadd = {btnadd}/>
    <List task={todo}   idss={remove}  upp={updated}/> 
 </div>
  );
}

export default App;
