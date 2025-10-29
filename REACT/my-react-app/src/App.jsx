// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import React from "react"
// const App=()=>{
//   return(<><h1>hello</h1>
//      <h4>hii</h4></>)
    
// }

// export default App

// const App = () =>{
//     let count=0

//     function fun1(){
//         count+=1
//         console.log(count);
        
//     }
//     return (
//         <div>
//             <h2>(count)</h2>
//             <button onClick={fun1}>Click</button>
//         </div>
//     )
// }

// export default App


// 23 Sep

// import React, { useState} from "react";
// import Home from "./home";

// const App = () => {
//     // console.log("hii");
//     let [state,SetState] = useState(0)
//     function fun1(){
//         // SetState(state+1)
//         // SetState("green")
//         if(state=='red'){
//             SetState("gold")
//         }else{
//             SetState("red")
//         }
//     }
//     return(
//         // <div style={{backgroundColor:state}}>
//         //     <h2>{state}</h2>
//         //     <button onClick={fun1}>click</button>
//         //     <Home/>
//         // </div>
//         <div><Home/></div>
//     )
// }
// export default App

// 6 Oct

// import React, { useState } from 'react'

// const App = () => {

//     let [input,Setinput] = useState("")
//     let [data,Setdata] = useState([])

    // function fun1(e){
    //     // console.log(e.target.value);
    //     Setinput(e.target.value)
    // }

//     function done(){
//         Setdata([...data,input])
//     }

//     function d(id){
//        let filterData= data.filter((a,b)=>{
//         return b!=id
//        })
//        Setdata(filterData)
//     }

//   return (
//     <div>
//         {/* <h2>{input}</h2> */}
//         <input onChange={fun1} />
//         <button onClick={done}>Click</button>
//         {
//             data.map((a,index)=>{
//                 return(<>
//                 <h2>{a}</h2>
//                 <button onClick={()=>d(index)}>del</button>
//                 </>)
//             })
//         }
//     </div>
//   )
// }

// export default App

// 8 Oct

// import React, { useState } from 'react'

// const App = () => {

//   let [show,Setshow] = useState({})
//   let [data,Setdata] = useState({
//        name:"",
//        email:"",
//        password:""
//   })

//    function fun2(){
//       Setshow({...data})
//       console.log(show);
      
//    }

//   function fun1(e){
     
//        let {name,value} = e.target
//        Setdata({...data,[name]:value})
//        console.log(data);
       
     
//   }

//   return (
//     <div>
//         <input type='text' placeholder='name' value= {data.name} onChange={fun1} name='name'/>
//         <br />
//         <br />
//         <input type='email' placeholder='email' value={data.email} onChange={fun1} name='email'/>
//         <br />
//         <br />
//          <input type='password' placeholder='password' value={data.password} onChange={fun1} name='password'/>
//          <br />
//          <br />
//         <button onClick={fun2}>Click</button>
//         <br />
//         {show.name}
//         <h2>{show.email}</h2>
//         <p>{show.password}</p>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import SignUp from './SignUp'
// import Login from './Login'
// import Home from "./Home";
// import { Route, Routes } from 'react-router-dom'
// import AddToCart from './AddToCart';

// const App = () => {

//   let [apiData,SetData] = useState([])
//   let [filteredData,SEtfilteredData]= useState([])

//   let [cart,SetCart] = useState([])
//   console.log(cart,"hii");
  

//   return (

//     <div>
//       {/* <SignUp/>
//       <Login/> */}

//       <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/SignUp' element={<SignUp/>}></Route>
//         <Route path='/Login' element={<Login/>}></Route>
//          <Route   path='/cart'  element={<AddToCart cart={cart}/>} />
//       </Routes>
      
      
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
 
  let [state,setstate] = useState(0)
  let [isrun,setrun] = useState(false)

  useEffect(()=>{

    setInterval(()=>{
      setTimeout()
    },1000)
    
  })

  function fun1(){

    
  }

  function fun2(){

  }


  return (
    <div>
      <button onClick={fun1}>Start</button>
      <button onClick={fun2}>Stop</button>
    </div>
  )
}

export default App