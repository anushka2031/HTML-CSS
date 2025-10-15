import React, { useContext } from 'react' 
import Context from './Context'

const HomeChild = () => {

    let data = useContext(Context)
  return (
    <div>
        {data}
    </div>
  )
}

export default HomeChild