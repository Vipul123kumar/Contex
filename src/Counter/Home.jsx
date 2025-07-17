import React from 'react'
import { useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();

  return (
    <div>
        <h2>WELCOME TO THE SHOPWORLD!</h2>
        <button className='bg-blue-500 h-7 '
         onClick={()=>navigate("/item")}>Go to the shop page </button>
    </div>
  )
}

export default Home
 