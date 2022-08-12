import FeedbackCard from '@/components/molecule/FeedbackCard'
import React from 'react'

export default function Feedback() {
  const feedbackData = [
    {
      dosen: 'Bu Fazat',
      materialReview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum urna et lorem sollicitudin faucibus. Cras viverra lobortis luctus. Donec suscipit blandit odiot sodales. Cras.',
      assignmentReview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum urna et lorem sollicitudin faucibus. Cras viverra lobortis luctus. Donec suscipit blandit odio, non lacinia turpis ullamcorper vitae. Sed tincidunt erat vel sapien vehicula efficitur. Duis egestas orci eu laoreet sodales. Cras lobortis vehicula consequat. Curabitur varius nibh ut dolor hendrerit, et rutrum risus condimentum. Curabitur nec lectus sit .',
      recommendationReview: 'Jangan diambil bu fazat, bintang 1 tydac ramah',
      like: 67,
      user: "Chris IF'21",
    },
    {
      dosen: 'Pak Utama',
      materialReview:
        'Dulu pas jamanku, nama matkul ini tuh Logika Informatika. Secara keseluruhan, kelasku dulu, K1, punya pengalaman buruk mengenai matkul satu ini, Hehe. Untuk pengalaman buruknya apa, sepertinya tidak baik untuk di spill. Disini kalian akan kembali belajar gitu mengenai silogisme, dan kawan kawannya. Bahasa pemrograman yang akan kalian pelajari adalah Prolog dan kalian juga akan belajar tentang paradigma pemrograman imperatif. Huhu seru sekali.',
      assignmentReview:
        'Aku gak terlalu ingat sama tugas apa aja yang dikasih.Yang jelas, tugas besarnya itu adalah membuat game dengan bahasa prolog tersebut. Waktu angkatanku, kita diminta membuat game mirip dengan PUBG. Angkatan bawahku, sudah beda lagi jenis gamenya. Tugas besar ini dikerjakan berkelompok 5 orang waktu itu, anggotanya pun memilih sendiri. Hasil game kelompok ku bisa kalian lihat disini https://github.com/adyaksaw/tubes-1-logif',
      recommendationReview: 'sangat rekomen',
      like: 40,
      user: "Ridwan IF'17",
    },
  ]

  return (
    <div className="feedback-wrapper">
      <h2>Feedback</h2>
      <div className="feedback-content">
        {feedbackData.map((feedback) => (
          <FeedbackCard
            dosen={feedback.dosen}
            materialReview={feedback.materialReview}
            assignmentReview={feedback.assignmentReview}
            recommendationReview={feedback.recommendationReview}
            like={feedback.like}
            user={feedback.user}
          />
        ))}
      </div>
    </div>
  )
}
