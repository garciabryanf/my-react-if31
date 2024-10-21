import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Mengimpor axios

function App() {
  const [responseData, setResponseData] = useState(null); // State untuk menyimpan respons dari POST

  useEffect(() => {
    // Melakukan POST request
    axios.post('https://reqres.in/api/users', {
      name: "Pelix",
      job: "Web Developer"
    })
    .then(res => {
      console.log(res.data); // Log respons ke console (opsional)
      setResponseData(res.data); // Menyimpan data respons ke state
    })
    .catch(err => console.log(err)); // Menangani error
  }, []); // [] untuk memastikan hanya dipanggil sekali saat komponen di-mount

  return (
    <div>
      <h2>Data yang Dikirim Melalui POST</h2>
      {/* Menampilkan data yang dikembalikan oleh API */}
      {responseData && (
        <div>
          <p>Nama: {responseData.name}</p>
          <p>Pekerjaan: {responseData.job}</p>
          <p>ID: {responseData.id}</p>
          <p>Dibuat pada: {responseData.createdAt}</p>
        </div>
      )}
    </div>
  );
}

export default App;
