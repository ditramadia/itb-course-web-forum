import React from 'react'

export default function FaqContent() {
  return (
    <div className="accordion">
      <div className="accordion-item" id="question1">
        <a className="accordion-link" href="#question1">
          Saya tidak menemukan mata kuliah yang dicari
        </a>
        <div className="answer">
          <p>
            Periksa kembali. Apabila tetap tidak ada, kontak kami dan akan kami
            beri solusinya
          </p>
        </div>
      </div>
      <div className="accordion-item" id="question2">
        <a className="accordion-link" href="#question2">
          Bagaimana cara menambah feedback?
        </a>
        <div className="answer">
          <p>
            Klik icon tambah pada kolom feedback lalu isi seluruh masukannya
          </p>
        </div>
      </div>
      <div className="accordion-item" id="question3">
        <a className="accordion-link" href="#question3">
          Tidak ada feedback pada mata kuliah yang saya cari
        </a>
        <div className="answer">
          <p>Belum ada yang memberikan feedback pada mata kuliah tersebut</p>
        </div>
      </div>
    </div>
  )
}
