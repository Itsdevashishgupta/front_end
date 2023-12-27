import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import FileUploadForm from './FileUploadForm';
import Side from '../Home/side';
import axios from 'axios';
import Fetch from './Fetchdata';

import { useSelector } from 'react-redux';

const Files = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]); const [isSticky, setIsSticky] = useState(false);
  const expanded = useSelector(state => state.expanded);

  

  useEffect(() => {
    axios.get('https://interior-design.stg.initz.run/v1/api/getfile/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // You can adjust the offset value based on your design
      setIsSticky(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpload = (fileDetails) => {
    
    closeModal();
  };

  return (
    <div className='flex'>
    <div className=' fixed '>
      <Side />
      </div>
      <div className={`flex-1 mt-20 ${expanded?' ml-[280px]':' ml-[100px]'}`}>
        <div>
          <div className='flex justify-between'>
            <h2 className="text-center text-2xl font-bold mb-4 ml-4">Files</h2>
            <span className=' mr-5'>
              <Link to="new-upload" className="bg-blue-500 text-white p-2 rounded mb-4" onClick={openModal}>
                New Upload
              </Link>
              <button className="bg-green-500 text-white p-2 rounded mb-4 ml-2">
                New Approval
              </button>
            </span>
          </div>

          {/* Display uploaded files */}
     <Fetch/>
        </div>
      </div>

      {/* Display FileUploadForm as a modal when isModalOpen is true */}
      {isModalOpen && (
        <div className="modal-overlay">
          <FileUploadForm onUpload={handleUpload} onClose={closeModal} trigger={false} />
        </div>
      )}

      <Routes>
        {/* Update Route path to match the nested structure */}
        <Route path="new-upload" element={<div />} />
      </Routes>
    </div>
  );
};

export default Files;
