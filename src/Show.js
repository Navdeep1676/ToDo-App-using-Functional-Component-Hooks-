import React from 'react';

function Show(props) {
    
    return (
    
              <div className="col-3" >
                <div className="border rounded-3 text-white  bg-danger p-5 m-2">
                      <h1 className="mx-2 text-center"> {props.roll}</h1>
                      <input type="text" className="form-control" name="" value={props.name}  onChange={props.edit}/>
                      <button type="" className='btn btn-secondary mx-auto d-block mt-4' onClick={()=>props.del(props.roll)}><i className="fas fa-trash"></i></button>
                </div>
              </div>
              
        )
          
       
        
}

export default Show;