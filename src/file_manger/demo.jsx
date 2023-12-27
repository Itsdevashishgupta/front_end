import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://interior-design.stg.initz.run/v1/api/getfile/'); // Replace 'API_URL' with the actual API URL
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs once after the component mounts

  return (
    <div>
      <h1>File Data</h1>
      {data.map(item => (
        <div key={item.fileUrl}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          {/* Assuming fileUrl points to an image, you can use an img tag */}
          <img src={item.fileUrl} alt={item.title} style={{ maxWidth: '100%' }} />
          {/* If fileUrl points to a PDF, you might want to render a link to it */}
          {/* <a href={item.fileUrl} target="_blank" rel="noopener noreferrer">View PDF</a> */}
        </div>
      ))}
    </div>
  );
};

export default App;
