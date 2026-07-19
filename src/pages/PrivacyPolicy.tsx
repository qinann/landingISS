const sections = [
  {
    title: '1. Pendahuluan',
    body: 'Inti Smart Solutions ("kami") menghargai privasi pengguna produk kami (eDesa, ZX, POS, SDS & TDS, dan AKUDANA). Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi yang Anda berikan saat menggunakan layanan kami.',
  },
  {
    title: '2. Informasi yang Kami Kumpulkan',
    body: 'Kami dapat mengumpulkan informasi identitas (nama, alamat email, nomor telepon, nama instansi/perusahaan), data operasional yang diinput ke dalam sistem (misalnya data kependudukan, transaksi, data akademik, atau data pengajuan pinjaman karyawan), serta data teknis seperti alamat IP dan log aktivitas untuk keperluan keamanan.',
  },
  {
    title: '3. Penggunaan Informasi',
    body: 'Informasi yang dikumpulkan digunakan untuk menyediakan dan meningkatkan layanan, memproses permintaan demo atau konsultasi, memberikan dukungan teknis, serta memenuhi kewajiban hukum dan pelaporan kepada pihak berwenang bila diperlukan.',
  },
  {
    title: '4. Pembagian Informasi',
    body: 'Kami tidak menjual data pribadi Anda kepada pihak ketiga. Informasi hanya dibagikan kepada penyedia layanan pendukung (misalnya penyedia hosting atau pembayaran) sejauh diperlukan untuk operasional layanan, atau apabila diwajibkan oleh peraturan perundang-undangan yang berlaku.',
  },
  {
    title: '5. Keamanan Data',
    body: 'Kami menerapkan langkah-langkah teknis dan organisasi yang wajar untuk melindungi data dari akses tidak sah, kehilangan, atau penyalahgunaan, termasuk enkripsi data, kontrol akses berbasis peran, dan pemantauan sistem secara berkala.',
  },
  {
    title: '6. Hak Pengguna',
    body: 'Anda berhak mengakses, memperbarui, atau meminta penghapusan data pribadi Anda yang kami kelola, sepanjang tidak bertentangan dengan kewajiban penyimpanan data sesuai peraturan yang berlaku. Permintaan dapat diajukan melalui kontak yang tercantum di bawah.',
  },
  {
    title: '7. Perubahan Kebijakan',
    body: 'Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu untuk menyesuaikan dengan perubahan layanan atau regulasi. Perubahan material akan diinformasikan melalui situs ini.',
  },
  {
    title: '8. Kontak',
    body: 'Untuk pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi kami melalui halo@intismartsolutions.com.',
  },
]

export default function PrivacyPolicy() {
  return (
    <section className="bg-white">
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <span className="mx-auto block h-px w-12 bg-brand-500" />
          <h1 className="mt-4 text-4xl font-extrabold text-navy-900">Kebijakan Privasi</h1>
          <p className="mt-3 text-sm text-slate-500">Terakhir diperbarui: 19 Juli 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-navy-900">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
