import React, { useRef } from 'react'

const Form = ({btnadd}) => { 

  const work = useRef('');  
  


 
  return (
    <div  className='row'>
        <div className="col-6 offset-3"> 
        <div className="d-flex justify-space-around">
        <input required ref={work} type="text" className='form-control' placeholder='Add To Do Work' /> 
        <button className='btn btn-primary btn-sm' onClick={() => btnadd(work)}><i className="fa-solid fa-plus"></i>Add</button>

        </div>
        </div> 
         
    </div>
  )
}

export default Form