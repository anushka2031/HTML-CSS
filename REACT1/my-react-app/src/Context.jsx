import { createContext, useEffect, useReducer } from "react";

let Context = createContext()

export default  Context

const ContextP=({Children})=>{
    let data={
        apiData:[],
        cart:[]
    }

    function reducer(apiData,action){

        if(action.type == "FETCH_DATA"){
            return{
                apiData:action.payload
            }
        }
    }

    useEffect(()=>{
        fetch("https://dummyjson.com/recipes").then((res)=>{
            return res.json
        }).then((data)=>{
            dispatch({type:"FETCH_DATA",payload:data.recipes})
        })
    })

    let [val,dispatch]= useReducer(reducer,data)
    return(
        <div>
            <ContextProvider>
                {Children}
            </ContextProvider>
        </div>
    )
}