// FileUploadForm.jsx
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './file.css';

const FileUploadForm = ({ onUpload, onClose }) => {
  const [fileDetails, setFileDetails] = useState({
    title: '',
    description: '',
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFileDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileDetails((prevDetails) => ({
      ...prevDetails,
      file,
    }));
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('title', fileDetails.title);
      formData.append('description', fileDetails.description);
      formData.append('file', fileDetails.file);

      // Make a POST request to the API endpoint with FormData
      const response = await axios.post('https://interior-design.stg.initz.run/v1/api/fileupload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
     

      
    

      
      onUpload(response.data);

      
      console.log('API response:', response.data);

      
     
    } catch (error) {
      console.error('Error uploading file:', error);
     
    }
  };

  return (
    <div className='fixed top-0 left-0 w-[100%] h-[100vh] flex bg-[rgba(0,0,0,0.2)] justify-center items-center'>
      <div className='relative p-[32px] w-[100%] max-w-[640px] bg-white'>
        <div className="modal-content">
          <div>
            <h2>New Upload</h2>
            <form>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={fileDetails.title}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Description:
                <textarea
                  name="description"
                  value={fileDetails.description}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                File:
                <input type="file" onChange={handleFileChange} />
              </label>
              <br />
              <button
                type="button"
                onClick={handleUpload}
                className="bg-blue-500 text-white p-2 rounded mt-4"
              >
                Upload
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-red-500 text-white p-2 rounded mt-4 ml-2"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadForm;
