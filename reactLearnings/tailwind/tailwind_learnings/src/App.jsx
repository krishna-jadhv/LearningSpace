import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-white h-screen w-screen m-0 p-0">
        <nav className="m-0 p-0">
          <ul className="m-0 p-5 bg-gradient-to-b from-blue-500 to-white flex py-8">
            <li className="mx-4 text-black text-3xl">Home</li>
            <li className="mx-4 text-black text-3xl">Projects</li>
            <li className="mx-4 text-black text-3xl">Contact us</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
