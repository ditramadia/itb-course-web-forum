import React, { useState } from 'react'

export default function Search() {
  return (
    <div className="search-wrapper">
      <form action="">
        <div className="form-wrapper">
          <input
            id="keyword-input"
            type="text"
            placeholder="Masukkan kata kunci"
          />
          {/* <input id="major-input" type="text" placeholder="Jurusan" /> */}
          <select name="major" id="major-input" placeholder="Jurusan">
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Sistem Teknologi Informasi">
              Sistem Teknologi Informasi
            </option>
            <option value="Teknik Elektro">Teknik Elektro</option>
            <option value="Teknik Tenaga Listrik">Teknik Tenaga Listrik</option>
            <option value="Teknik Telekomunikasi">Teknik Telekomunikasi</option>
            <option value="Teknik Biomedis">Teknik Biomedis</option>
          </select>
          <select name="category" id="category-input" placeholder="Kategori">
            <option value="Semester 1">Semua</option>
            <option value="Semester 1">Matkul Wajib</option>
            <option value="Semester 3">Matkul Pilihan</option>
          </select>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  )
}
