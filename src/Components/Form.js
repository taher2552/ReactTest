import React, { useEffect } from 'react'


export default function Form({name, setName,age, setAge, data, setData, tableEdit, setTableEdit}) {

    const nameFunction=(e)=>{
      setName(e.target.value)
    }
    const ageFunction=(e)=>{
      setAge(e.target.value)
    }

    const updateTable =(name, age, id)=>{
        const updated = data.map((data)=>
         data.id===id ? {name:name, age:age, id:id} : data
        )

        console.log()
        setData(updated);
        setTableEdit("");
    }

    useEffect(()=>{
        if(tableEdit){
            setName(tableEdit.name);
            setAge(tableEdit.age);
        }
        else{
            setName("");
            setAge("");
        }

    },[setName, setAge, tableEdit])

    const submitFunction=(e)=>{

        e.preventDefault();
        
       
     

         if(!tableEdit){
            setName("");
            setAge("");
            setData([...data, {name:name, age:age, id:Date.now()}]);
           
         }
         else{
            console.log("kkk");
            console.log(tableEdit);
            updateTable(tableEdit.name, tableEdit.age, tableEdit.id);
         }

    }
    
  return (
    <>
    <div>
        <form onSubmit={submitFunction}>
            <input type="text" placeholder='enter your name' value={name} onChange={nameFunction}  />
            <input type="text" placeholder='enter your age' value={age} onChange={ageFunction} />
            <button type="Submit">{tableEdit? "Save" : "Add"}</button>
        </form>
    </div>

    </>
   
  )
}
