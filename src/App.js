import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2')
      .then(res => setData(res.data.data))
      .catch(err => console.log(err));
  }, []);

  const handlePost = () => {
    axios.post('https://reqres.in/api/users', {
      name: 'Pelix',
      job: 'Web Developer',
    })
    .then(res => console.log('POST Response:', res))
    .catch(err => console.log(err));
  };

  const handlePut = () => {
    axios.put('https://reqres.in/api/users/2', {
      name: 'Jasong',
      job: 'Engineer',
    })
    .then(res => console.log('PUT Response:', res))
    .catch(err => console.log(err));
  };

  const handleDelete = () => {
    axios.delete('https://reqres.in/api/users/2')
    .then(res => console.log('DELETE Response:', res))
    .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <h2>Axios Library in React.js</h2>

      <h3>Users List (GET):</h3>
      {data.map((user, index) => (
        <p key={index}>{user.email}</p>
      ))}

      <h3>Opsi</h3>

      {/* POST Button */}
      <button onClick={handlePost} className="action-btn">Add User (POST)</button>

      {/* PUT Button */}
      <button onClick={handlePut} className="action-btn">Update User (PUT)</button>

      {/* DELETE Button */}
      <button onClick={handleDelete} className="action-btn">Delete User (DELETE)</button>
    </div>
  );
}

export default App;
