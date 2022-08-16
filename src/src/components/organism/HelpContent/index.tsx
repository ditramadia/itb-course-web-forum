import React from 'react'

export default function HelpContent() {
  const steps = [
    '1. Cari mata kuliah yang ingin Anda lihat melalui fitur search pada halaman home',
    '2. Terdapat filter keyword, jurusan, dan kategori untuk memudahkan pencarian',
    '3. Pilih mata kuliah yang ingin Anda lihat',
    '4. Anda dapat menambahkan feedback pada kolom feedback mata kuliah tersebut',
  ]

  return (
    <div className="help-container">
      <ul>
        {steps.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
    </div>
  )
}
