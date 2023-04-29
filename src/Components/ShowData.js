import React from "react";

export default function ShowData({ data, setData,tableEdit,setTableEdit }) {


  const deleteFunction=id=>{
    let confirm = window.confirm("Are you sure you want to delete this??");

    if(confirm){
        setData(data.filter((data)=>data.id!==id));
    }
    
  }

  const editFunction=id=>{
    const editData = data.find((data)=>data.id===id);

    setTableEdit(editData);

  

  }

  return (
    
    <>
      <h1>Show</h1>

      <div>
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>

            {data.map((data) => {
              return (
                <>
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>
                      <button onClick={()=>deleteFunction(data.id)}>
                        Delete
                      </button>
                      <button onClick={()=>editFunction(data.id)}>
                        Edit
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}
