import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import './App.css';

function App() {
  const [person,setPerson]= useState({
    username:'',email:'',age:''//object values
  })
  //  const [username,setUsername]= useState('');
   const [people,setPeople] = useState([]);
  //  const [email,setEmail]= useState('');
  //  const [age,setAge]=useState('');
  const changeEven = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}:${value}`);
    setPerson((person)=>{
      return{...person,[name]:value};
    });
    console.log(person);
  }
   const submitEvent=(e)=>{
    e.preventDefault();
    const {username,email,age}= person;
    if(username && email && age){
      const newPerson = {...person,id:uuidv4()};
      setPeople((people)=>{
        return [ ...people,newPerson];
      });
      setPerson({username:'',email:'',age:''});
    }else{
      alert('Please fill the blank first');
    }
    // if(username && email && age ){
    // const person = {id:uuidv4(),username:username,email:email,age:age};
    // setPeople((people)=>{
    //  return [...people,person]; 
    // });
    // setUsername('');
    // setAge('');
    // setEmail('');
    // }else{
    //   alert('Please input proper values');
    // }
    
   }
  return (
    <>
    <form className='form' onSubmit={submitEvent}>
    <div className='form-control'>
      <label htmlFor='username'>Username:</label>
      <input type='text' 
      name='username'
      id='username' 
      value={person.username}
      onChange={changeEven}/>
    </div>
    <div className='form-control'>
      <label htmlFor='email'>Email:</label>
      <input type='email' 
      name='email'
      id='email' 
      value={person.email}
      onChange={changeEven}/>
    </div>
    <div className='form-control'>
      <label htmlFor='Age'>Age:</label>
      <input type='number'
      name='age'
      id='age' 
      value={person.age}
      onChange={changeEven}/>
    </div>
    <button type='submit'>Submit</button>
    </form>
    {people.map(({username,id,email,age})=>{
      // const {username,id}=sadha;
      return(
        <>
        <div className='item'key={id}>
        <h4>{username}</h4>
        <h4>{email}</h4>
        <h4>{age}</h4>
        </div>
        </>
        )
    })}
    </>
   
  );
}

export default App;
