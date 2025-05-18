import Image from 'next/image';
import React, { useState } from 'react';
import { useAppcontext } from '..';

const MyImage = ({createImage}) => {
  // State to store the array of image URLs
  const {images, setImages,components,setComponents} = useAppcontext();

  // Handle image file changes (upload)
  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = [];
    
    // Loop through selected files and convert them to data URLs
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        newImages.push(reader.result); // Add the data URL to the array
        if (newImages.length === files.length) {
          setImages((prevImages) => [...prevImages, ...newImages]); // Update state with the new images
        }
      };
      
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  // Handle click on image to log the source
  const handleImageClick = (src) => {
    console.log("Clicked image src: ", src); // Log the image src to console
    // You can also use this src in other logic, such as setting it as a featured image or doing something else
    createImage("imge","imge",src);
    }
  

  return (
    <div>
      <div className='w-full h-[40px] flex justify-center items-center bg-purple-500 rounded-sm text-white mb-3'>
        <label>Image Upload:</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
      </div>

      <div className='h-[77vh]'>
        <div className='grid grid-cols-2 gap-2 h-full'>
          {images.map((image, i) => (
            <div 
              key={i} 
              className='w-full h-[70px] rounded-sm bg-blue-950 cursor-pointer'
              onClick={() => handleImageClick(image)} // Pass the image src to the click handler
            >
              <Image
                src={image}
                alt={`Image ${i}`}
                className='w-full h-full rounded-sm'
                layout="responsive"
                width={100}
                height={70}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyImage;
