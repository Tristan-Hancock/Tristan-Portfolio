import React, { useState } from 'react';

function MyComponent() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Assuming single file selection
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      await uploadFile(selectedFile);
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await fetch('http://localhost:3001/api/upload',{
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Uploaded file ID:', data.fileId); // Adjusted based on expected server response
    } catch (error) {
      console.error('Uploading file failed:', error);
    }
  };
  
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
}

export default MyComponent;
