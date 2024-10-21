import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Mengimpor axios hanya sekali
import './App.css';

function App() {
  const [data, setData] = useState([]); // State untuk menyimpan data dari API

  useEffect(() => {
    // Mengambil data dari API
    axios.get('https://reqres.in/api/users?page=2')
      .then(res => setData(res.data.data)) // Menyimpan data ke state
      .catch(err => console.log(err)); // Menangani error
  }, []); // [] untuk memastikan hanya dipanggil sekali saat komponen di-mount

  return (
    <div>
      <h2>Data Pengguna dari API</h2>
      {/* Map untuk menampilkan data */}
      {data.map((d) => (
        <p key={d.id}>{d.email}</p> // Menggunakan id sebagai key
      ))}
    </div>
  );
}

export default App;
