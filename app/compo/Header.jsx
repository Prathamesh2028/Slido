import React from 'react';

import { useAppcontext } from '..';
const Header = () => {
  const{toke,setToke}=useAppcontext();
  function on(){

window.location.href = 'http://localhost:3001';



  }
  return (
    <header className="fixed top-0 w-full flex items-center justify-between p-4 bg-white text-white border shadow h-[10%] z-10">
      {/* Logo on the left */}
      <div className="flex items-center space-x-4">
               <h1 className="text-2xl font-semibold text-purple-800">Slido</h1>
      </div>

      {/* Right side: Button and Profile Circle */}
      <div className="flex items-center space-x-6">
        {/* Button */}
        <button onClick={()=>on()} className="px-4 py-2 bg-purple-700	 hover:bg-purple-800  	 rounded-md text-white  hover:text-white text-md font-light">
         Goback to home page      
 </button>

        {/* Profile Circle */}
       
      </div>
    </header>
  );
};

export default Header;
