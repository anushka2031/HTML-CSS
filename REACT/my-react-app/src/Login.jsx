import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  let [show,Setshow] = useState({})
  let [data,Setdata] = useState({
    //    name:"",
       email:"",
       password:""
  })

   function fun2(){
      Setshow({...data})
      console.log(show);
      
   }

  function fun1(e){
     
       let {name,value} = e.target
       Setdata({...data,[name]:value})
       console.log(data);
       
     
  }

  return (
    <div>
        <fieldset><legend>Login</legend>
        {/* <input type='text' placeholder='name' value= {data.name} onChange={fun1} name='name'/>
        <br />
        <br /> */}
        <input type='email' placeholder='email' value={data.email} onChange={fun1} name='email'/>
        <br />
        <br />
         <input type='password' placeholder='password' value={data.password} onChange={fun1} name='password'/>
         <br />
         <br />
        <button onClick={fun2}>Click</button>
        <br />
        </fieldset>

        <Link to={'/Signup'}>
        <button>go to signup page</button>
        </Link>
        {/* {show.name}
        <h2>{show.email}</h2>
        <p>{show.password}</p> */}
    </div>
  )
}

export default Login