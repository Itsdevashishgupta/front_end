import React from 'react'
import sofa from './sofa.png'
import Prices from './prices';
const Onsite = () => {
  const items = [
    {imge:{sofa}, name: 'Item 1', quantity: 5 ,amount:5000},
    {imge:{sofa}, name: 'Item 2', quantity: 10,amount:8000 },
    {imge:{sofa}, name: 'Item 3', quantity: 3,amount:7000 },
    // Add more items as needed
  ];
  return (
    <>
      <div className='flex'>
      <div className=' border-r-2 w-[80%]'>
      <table className="w-full bg-[#f3f5f0] pt-10">
      <thead className=' pt-5'>
        <tr className=' pt-5'>
          <th className="w-[70%]">Item</th>
          <th>Quantity</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index} className=''>
            <td className="w-70 flex pl-10 py-5">
              <img src={sofa} alt="" className=' w-16 h-16'/>
              <span className='pl-5'>
                <h1 className=' font-bold'>Wooden false celling</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </p>
              </span>
            </td>
            <td className=' text-center'>{item.quantity}</td>
            <td className=' text-center'>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div className='flex-1'>
<Prices/>
    </div>
      </div>
    </>
  )
}

export default Onsite