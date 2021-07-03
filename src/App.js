import {React,useState} from 'react';
import Show from './Show'
const App=()=>{
    const [data,setData]=useState([])
    const [name,setName]=useState('');
    const [roll,setRoll]=useState('');
    const addData=()=>{
    data.push({name:name,roll:roll})
    setData([...data]) 
    }
    const remData=(id)=>{
        const newData=data.filter(data=>data.roll!==id)
        setData(newData)
    }
    const editData=(index,evt)=>{
        console.log(index,evt);
        let record=data;
        const row=record[index];
        row.name=evt.target.value;
        setData([...record])

        console.log(row);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                  <div>
                  <h1 className='text-center fw-bold'><i>Todo using Hooks</i></h1>
                   <input  className="form-control w-50 mx-auto my-2" placeholder="Roll" type="text" name="roll" value={roll} onChange={(evt)=>setRoll(evt.target.value)}/>
                   <input  className="form-control w-50 mx-auto my-2" placeholder="Name" type="text" name="name" value={name} onChange={(evt)=>setName(evt.target.value)}/>
                   <button className="btn btn-danger mx-auto my-2 d-block w-50" type="button" onClick={addData}>Add</button>
                  </div>  
                  <hr/>
                </div>
                {
                    data.map((list,i)=>{
                        return(
                            <Show  className='row'
                        key={i}
                        roll={list.roll}
                        name={list.name}
                        del={remData} 
                        edit={(evt)=>editData(i,evt)}/>
                        )

                    })
                }

            </div>
        </div>
    )
}
export default App;