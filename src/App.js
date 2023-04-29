import React, {useState} from 'react';
import Header from '../src/Components/Header.js';
import Form from '../src/Components/Form.js';
import ShowData from '../src/Components/ShowData.js';

export default function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [data, setData] = useState([]);
  const [tableEdit, setTableEdit] = useState(null)
 

  return (
    <div>
      <Header/>
      <Form name={name} setName={setName} age={age} setAge={setAge} data={data} setData={setData} tableEdit={tableEdit} setTableEdit={setTableEdit}/>
      <ShowData data={data} setData={setData} tableEdit={tableEdit} setTableEdit={setTableEdit}/> 
    </div>
  )
}

