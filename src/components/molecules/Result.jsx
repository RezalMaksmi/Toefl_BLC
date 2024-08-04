import React from 'react';

function Result({ score }) {
  return (
    <div className="result">
      <h2>Quiz Selesai!</h2>
      <p>Skor Anda: {score}</p>
      {/* Tambahkan elemen lain sesuai kebutuhan, seperti tombol untuk memulai ulang */}
    </div>
  );
}

export default Result;
