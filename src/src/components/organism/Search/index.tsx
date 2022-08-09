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
          <input id="major-input" type="text" placeholder="Jurusan" />
          <select name="semester" id="semester-input" placeholder="Semester">
            <option value="Semester 1">Semester</option>
            <option value="Semester 1">Semester 1</option>
            <option value="Semester 2">Semester 2</option>
            <option value="Semester 3">Semester 3</option>
            <option value="Semester 4">Semester 4</option>
            <option value="Semester 5">Semester 5</option>
            <option value="Semester 6">Semester 6</option>
          </select>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  )
}
