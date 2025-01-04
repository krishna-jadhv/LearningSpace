import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <nav class="bg-deepBlue h-20 py-5">
        <div className='relative mx-auto flex items-center justify-center'>
          <div className='text-white px-6'>hiii</div>
          <div className='text-white px-6'>bcbc</div>
          <div className='text-white px-6'>6565</div>
 
        </div>
      </nav> */}
      <div className='bg-slate-900 place-content-center h-screen'>
        <h1 className='text-center text-yellow-500 text-4xl m-6 font-bold'>Fitness First</h1>
        <div className=''>
          <div className='p-6 max-w-sm mx-auto bg-white rounded-xl'>
            <div className='cursor-pointer'>
              <img src="https://images.pexels.com/photos/1769735/pexels-photo-1769735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='rounded-lg' />
            </div>
              <div className='font-bold text-yellow-500'>
                Tailwind css 
                <p className=' font-thin'> By Krishna</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
