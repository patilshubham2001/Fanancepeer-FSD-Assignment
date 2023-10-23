
import React, { useState } from 'react'
import axios from 'axios';
import Header from './Header';

const UploadData = () => {

    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) =>{
        setFile(e.target.files[0]);
     }
     
     const handleSubmit = async(e) =>{
       e.preventDefault();
     
       if(!file){
         setMessage('Please select file');
         return;
       }
     
       const formData = new FormData();
       formData.append('file',file);
       
      
       try {
         
         const responce = await axios.post('http://localhost:3001/upload', formData, {
          headers : {
            "Content-Type" : "multipart/form-data"
          },
         });
     
         if(responce.status === 201 || 200){
           setMessage('File uploaded successfully.');
         }else{
           setMessage('File uploaded failed.');
         }
       } catch (error) {
         setMessage('An error occurred while uploading the file.');
       }
     }
  return (
    <div>
      <Header/>
    <div className="btn-container">
         <form onSubmit={handleSubmit}>
             <input type="file" accept=".json" onChange={handleFileChange} required />
             <button type='submit' className='btn'>Upload File</button>
         </form>
         <p>{message}</p>
    </div>
 </div>
  )
}

export default UploadData

