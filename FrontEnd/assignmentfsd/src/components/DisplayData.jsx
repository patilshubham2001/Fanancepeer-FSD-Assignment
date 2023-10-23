import React, { useEffect, useState } from 'react'
import Header from './Header'
import './CSS/common.css'
import axios from 'axios';

const DisplayData = () => {

  const [data, setData] = useState([]);
  const [message, setMessage] = useState('No Data available, Upload First...'); // Initialize with an empty string

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/display', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.status === 200) {
        console.log(response.data);
        setData(response.data[0].jsonData);
        setMessage('');
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="display-container">
        <h1>Display uploaded Data</h1>
        <p style={{fontSize:'20px',fontWeight:'bold',color:'gray',marginTop:'50px'}}>{message}</p>
        {
          data.length > 0 &&
          data.map((item, index) => (
            <div className="card-container" key={index}>
              <div className="list-container">
                <ul>
                  <li>UserId: <span>{item.userId}</span></li>
                  <li>Id: <span>{item.id}</span></li>
                  <li>Title: <span>{item.title}</span></li>
                  <li>Body: <span>{item.body}</span></li>
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DisplayData
