import React from 'react'

const Prices = () => {
  return (
    <div className=' pl-6 pr-2 '>
    <div className=' border-y-2 border-r-2  p-7 mb-2'>
        <h1>
            Total Running Bill Value
        </h1>
        <h1 className=' font-extrabold text-[30px]'>
            15,000
        </h1>
        </div>
        <div className='border-y-2 border-r-2  p-7 '>
        <h1>
            Total WO Value
        </h1>
        <h1 className=' font-extrabold text-[30px]'>
            15,000
        </h1>
</div>
<div className=' flex items-center justify-center pt-5'>
        <button className=' bg-blue-900 py-2 px-7 rounded-md'>Update & Submit</button>
        </div>
    </div>
  )
}

export default Prices