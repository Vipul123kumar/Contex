import React from 'react'
import { useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();

  return (
    <div className=' items-center jusify-content-center gap-2 text-center  '>
        <h2>WELCOME TO THE SHOPWORLD!</h2>
        <button className='bg-blue-500 h-7 '
         onClick={()=>navigate("/item")}>Go to the shop page
          </button>
          <form  className='flex flex-col item-center justify-center gap-2 border-1 p-2 m-4 '>
            <div>
            <label className=''> Enter Item name</label>
            <input type='text' 
            id='name'
            placeholder='Enter iteme name'
            className='bg-gray-200 rounded p-2 m-2'
            />
            </div>
              <div>
            <label className=' rounded  p-2 m-2'> Enter Item price</label>
            <input type='text' 
            id='name'
            placeholder='Enter iteme price'
            className='bg-gray-200 rounded p-2 m-2'
            />
            </div>
             <button 
             type='submit'
             className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600  flex flex-row w-50 text-center items-center justify-center  '>submit</button>
          </form>
    </div>
  )
}

export default Home
  