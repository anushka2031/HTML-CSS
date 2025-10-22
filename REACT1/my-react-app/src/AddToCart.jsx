// import React from 'react'

// const AddToCart = ({cart}) => {
//   return (
//     <div>
//         {
//             cart.map((a)=>{
//                 return (<>
//                 <div id='card'> 
//                     <img  src={a.image}/>
//             <p>{a.name}</p>
//             <p> Rating: {a.rating}</p>
//          <button  onClick={()=> SetCart([...cart,a])}>add </button>
//          </div>
//                 </>)

//             })
//         }
//     </div>
//   )
// }

// export default AddToCart

import React, { useContext } from 'react'
import Context from './Context'

const AddToCart = () => {

  let {state,dispatch} = useContext(Context)
  console.log(state.cart,"hiii");
  
  return (
    <div>
      {

        state.cart.map((a)=>{

          return (<>

          <div id="card">
            <p>{a.name}</p>
            <p>Rating: {a.rating}</p>
            <button onClick={() => SetCart([...cart,a])}>Add</button>
          </div>

          </>)

        })
        
      }

    </div>
  )
}

export default AddToCart