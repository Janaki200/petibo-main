import React from 'react'

import WorldMap from "../../assets/World-map.png"





const WhereToBook = () => {

return (

<>

 <div id="location" className='container my-36'>

 <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>

{/* text-content section  */}

 <div className='space-y-8'>

<h1 className='text-4xl font-bold text-purple-950'>Where to Book ?</h1>

<div className='flex items-center gap-4'>

<input type="text" placeholder='City' className='input-style w-full lg:w-[120px]'/>

 <input type="text" placeholder='pincode' className='input-style w-full'/>

 <button className='primary-btn bg-purple-900 text-white hover:bg-primary hover:text-black'>Search</button>

</div>

</div>

{/* Map section  */}

<div className='col-span-2'>

 <img src={WorldMap} alt=""

 className='w-full sm:w-[500px] mx-auto'/>

</div>

 </div>

 </div>

 </>

)

}



export default WhereToBook