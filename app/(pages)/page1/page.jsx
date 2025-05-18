// app/page1.js
'use client';  // Mark as a Client Component

import { useRouter } from 'next/navigation';

const Page1 = () => {
  const router = useRouter();

  const handleNavigate = () => {
    const data = { name: 'John Doe', age: 30,h:400,w:500 };
    sessionStorage.setItem('userData', JSON.stringify(data)); // Store data in sessionStorage

    // Use the `router.push()` from `next/navigation` to navigate programmatically
    router.push('./Main');
  };

  return (
    <div className='absolute left-52 top-56'>
      <div className='w-[100px] h-[100px] mt-20 cursor-pointer rounded-md' >
    <label className='h-[100px] w-[100px] cursor-pointer bg-red-900' htmlFor='color'></label>
    <input type="color" className='invisible' id='color'/>
      </div>
      <div onClick={()=>handleNavigate()}>
        
      </div>
    </div>
  );
};

export default Page1;
