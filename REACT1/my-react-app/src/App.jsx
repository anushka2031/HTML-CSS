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


// import React ,{useState}from 'react'
// import Home from './Home'
// // import SignUp from './SignUp'
// // import Login from './Login'
// import { Route, Routes } from 'react-router-dom'
// import AddToCart from './AddToCart.jsx'

// const App = () => {
//   let [apiData,SetData]=     useState([])
//   let [filteredddData,SetFilteredddData]=     useState([])

//     let [cart,SetCart]=    useState([])
//     console.log(cart,"h=dekhooooo");
    
//   return (
//     <div>
//       {/* <Home/>
//       <SignUp/>
//       <Login/> */}
//       <Routes>
//         <Route   path='/'  element={<Home cart={cart} SetCart={SetCart}   apiData={apiData} SetData={SetData} filteredddData={filteredddData}    SetFilteredddData={SetFilteredddData}  />} />
//         {/* <Route   path='/signup'  element={<SignUp/>} />
//         <Route   path='/login'  element={<Login/>} /> */}
//         <Route   path='/cart'  element={<AddToCart cart={cart}/>} />


//       </Routes>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App