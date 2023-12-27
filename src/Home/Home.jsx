import { useState } from 'react'
import React from 'react'
import { useSelector } from 'react-redux';
import Sidebar, { SidebarItem } from './Sidebar'
import Side from './side'

const Home = () => {
  const expanded = useSelector(state => state.expanded);
  
    const date=new Date()
    const [selectedLanguage, setSelectedLanguage] = useState('Financial');

    const languages = ['Financial', 'Client', 'Task Manager','File manager', 'Quotation', 'MOM',  'Purchase Order'];
  
    const handleLanguageClick = (index) => {
      setSelectedLanguage(index);
    };

  return (
    <>
    <div className=' flex '>
    <div className='fixed'>
  <Side/></div>
       <div className=' flex-1 ml-[300px] '>
       <div>
      
        <h1 className=" text-2xl font-bold mt-20">Project Level Dashboard</h1>       
        <h1 className=" text-xl font-bold mt-2">Timeline: {date.toLocaleDateString()}</h1>        
        <h1 className=" text-md font-light mt-4">Project Admin: Interior designer</h1>     
        </div>
        <div className=' border-t-2 mt-4'>
        <div className='flex justify-between'>
        <h1 className='text-xl font-bold mt-2'>Quick View</h1>
        <span className='flex  justify-between mt-4'>
        <p className=' bg-slate-100 shadow-sm rounded-md text-sm mr-2 p-1'>Logs</p>
        <p className=' bg-slate-50 shadow-sm rounded-md text-md p-1'>Quick View</p>
        </span>
        </div>
        <div>
      <h2 className="text-center text-2xl font-bold mb-4">Select a Language:</h2>
      <div className="flex justify-center">
        {languages.map((language, index) => (
          <button
            key={index}
            onClick={() => handleLanguageClick(index)}
            className={`mx-2 p-2 rounded ${
              selectedLanguage === index ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'
            }`}
          >
            {language}
          </button>
        ))}
      </div>
      {selectedLanguage !== null && (
        <p className="text-center mt-4">
          You have selected: {languages[selectedLanguage]}
        </p>
      )}
    </div>
        </div>   
       </div>

       </div>
    </>
  )
}
export default Home