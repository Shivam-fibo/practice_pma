import React from 'react'
import { useState } from "react";
const NavBarElement = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phoneno: '',
        error: ''
    });
    const handleChange = (e) => {
        e.preventDefault()
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value
		});
	};
    
  return (
    
 
  <div class="flex flex-col items-start justify-start top-0 px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8" style={{backgroundColor:'var(--container-color)'}}>
          <h2 class="mb-1 ml-2 pl-6 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl" style={{color:'var(--dark-font)'}}>
              User Profile
          </h2>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-90" style={{color:'var(--dark-font)'}}>Name</label>
                  <input type="text" 
                  name="name" 
                  id="name" 
                  value={data.name}
				  onChange={handleChange}
                  placeholder="XYZ" 
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled/>
              </div>
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900" style={{color:'var(--dark-font)'}}>Email</label>
                  <input type="text" 
                  name="email" 
                  id="email" 
                  value={data.email}
				  onChange={handleChange}
                  placeholder="name@company.com" 
                  class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled/>
              </div>
              <div>
                  <label for="phoneno" class="block mb-2 text-sm font-medium text-gray-900 " style={{color:'var(--dark-font)'}}>Phone Number</label>
                  <input type="text" 
                    name="phoneno" 
                    id="phoneno" 
                    value={data.phoneno}
					onChange={handleChange}
                    placeholder="91+" 
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-black dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled/>
              </div>
             <div class="ml-2">
              <button type="submit" class="w-1/3 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2.5  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" style={{backgroundColor:'var(--button-color_new)',color:'var(--button-font)'}}>Logout</button>
              <button type="submit" class="w-1/3 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm ml-2 px-2 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" style={{backgroundColor:'var(--button-color_new)',color:'var(--button-font)'}}>Edit</button>
             </div>
          </form>
      </div>
  </div>

  
  )
}

export default NavBarElement
