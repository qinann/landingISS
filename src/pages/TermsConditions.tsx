const sections = [
  {
    title: '1. Penerimaan Ketentuan',
    body: 'Dengan mengakses atau menggunakan produk Inti Smart Solution (eDesa, ZX, POS, SDS & TDS, dan AKUDANA), Anda dianggap telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini beserta Kebijakan Privasi kami.',
  },
  {
    title: '2. Penggunaan Layanan',
    body: 'Layanan kami disediakan untuk digunakan oleh instansi, organisasi, atau perorangan yang telah melalui proses kerja sama atau langganan resmi dengan Inti Smart Solution. Anda setuju untuk menggunakan layanan sesuai tujuan yang sah dan tidak melanggar hukum yang berlaku.',
  },
  {
    title: '3. Akun Pengguna',
    body: 'Anda bertanggung jawab menjaga kerahasiaan kredensial akun (termasuk kata sandi) dan atas seluruh aktivitas yang terjadi melalui akun Anda. Segera laporkan kepada kami apabila terjadi dugaan penyalahgunaan akun.',
  },
  {
    title: '4. Hak Kekayaan Intelektual',
    body: 'Seluruh perangkat lunak, tampilan antarmuka, logo, dan materi terkait produk Inti Smart Solution merupakan hak kekayaan intelektual kami atau pemberi lisensi kami, dan tidak boleh digandakan, dimodifikasi, atau didistribusikan tanpa izin tertulis.',
  },
  {
    title: '5. Data dan Kerahasiaan',
    body: 'Data yang diinput oleh pengguna ke dalam sistem tetap menjadi milik instansi/organisasi terkait. Kami memperlakukan data tersebut secara rahasia dan hanya memprosesnya untuk keperluan penyediaan layanan, sebagaimana diatur dalam Kebijakan Privasi kami.',
  },
  {
    title: '6. Pembatasan Tanggung Jawab',
    body: 'Kami berupaya menjaga ketersediaan dan keandalan layanan, namun tidak menjamin layanan akan bebas dari gangguan atau kesalahan sepenuhnya. Sejauh diizinkan oleh hukum, kami tidak bertanggung jawab atas kerugian tidak langsung akibat penggunaan layanan.',
  },
  {
    title: '7. Pemutusan Layanan',
    body: 'Kami berhak menangguhkan atau menghentikan akses terhadap layanan apabila terjadi pelanggaran terhadap Syarat dan Ketentuan ini, sesuai dengan ketentuan yang diatur dalam perjanjian kerja sama masing-masing pelanggan.',
  },
  {
    title: '8. Perubahan Ketentuan',
    body: 'Kami dapat memperbarui Syarat dan Ketentuan ini sewaktu-waktu. Perubahan akan berlaku sejak dipublikasikan di situs ini, dan penggunaan layanan secara berkelanjutan dianggap sebagai persetujuan atas perubahan tersebut.',
  },
  {
    title: '9. Hukum yang Berlaku',
    body: 'Syarat dan Ketentuan ini diatur dan ditafsirkan berdasarkan hukum yang berlaku di Republik Indonesia.',
  },
  {
    title: '10. Kontak',
    body: 'Untuk pertanyaan mengenai Syarat dan Ketentuan ini, silakan hubungi kami melalui halo@intismartsolutions.com.',
  },
]

export default function TermsConditions() {
  return (
    <section className="bg-white">
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <span className="mx-auto block h-px w-12 bg-brand-500" />
          <h1 className="mt-4 text-4xl font-extrabold text-navy-900">Syarat dan Ketentuan</h1>
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
