import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Fetch = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFile, setShowFile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://interior-design.stg.initz.run/v1/api/getfile/');
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleTitleClick = (item) => {
    setSelectedItem(item);
    setShowFile(false);
  };

  const handleShowFileClick = () => {
    setShowFile(true);
  };

  const handleCloseClick = () => {
    setSelectedItem(null);
  };

  const handleViewFileClick = () => {
    // Assuming the fileUrl is a valid URL
    window.open(selectedItem.fileUrl, '_blank');
  };

  const isImage = (fileName) => {
    if (fileName) {
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
      const ext = fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);
      return imageExtensions.includes(`.${ext.toLowerCase()}`);
    }
    return false; // Default to false if fileName is undefined
  };
  
  

  const renderFile = (fileName) => {
    if (isImage(fileName)) {
      return <img src={selectedItem.fileUrl} alt="Preview" className="max-w-full max-h-96" />;
    } else {
      return <div>File Icon</div>; // You can replace this with an appropriate file icon
    }
  };

  return (
    <div className='px-6 bg-slate-100'>
      {data.map((item) => (
        <div key={item.fileUrl} className=''>
          <h2 className='flex justify-between bg-white my-6 py-4 items-center'>
            {isImage(item.fileName) && (
              <div className="mr-4">
                <img src={item.fileUrl} alt="Preview" className="max-w-full max-h-24" />
              </div>
            )}
            <button onClick={() => handleTitleClick(item)} className='capitalize ml-6'>
              {item.title}
            </button>
            <p>Created on: {new Date().toDateString()}</p>
          </h2>
          {selectedItem === item && (
            <div className='my-4 bg-white pl-4 w-full flex justify-between'>
              <div>
                <p>Description</p>
                <p>{item.description}</p>
              </div>
              <div>
                <button onClick={handleShowFileClick}>Show File</button>
                {showFile && (
                  <div>
                    {renderFile(item.fileName)}
                    <button onClick={handleViewFileClick}>View File</button>
                  </div>
                )}
                <button onClick={handleCloseClick} className='ml-auto mb-2'>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Fetch;
