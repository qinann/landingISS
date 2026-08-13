const testimonials = [
  {
    quote:
      'Sejak menggunakan eDesa, pelayanan surat-menyurat untuk warga jadi jauh lebih cepat dan pelaporan keuangan desa lebih transparan ke masyarakat.',
    name: 'Kepala Desa',
    org: 'Wilayah Jawa Tengah',
  },
  {
    quote:
      'ZX membantu kami mencatat setiap donasi dan penyalurannya dengan rapi, sehingga donatur lebih percaya dengan laporan yang kami sampaikan.',
    name: 'Pengurus Lembaga Amil Zakat',
    org: 'Jabodetabek',
  },
  {
    quote:
      'Proses administrasi akademik dan pembayaran SPP jauh lebih tertata sejak sekolah kami memakai SDS & TDS. Orang tua juga lebih mudah memantau.',
    name: 'Kepala Sekolah',
    org: 'Jawa Barat',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-navy-950 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block h-px w-12 bg-gold-400" />
          <h2 className="mt-4 text-3xl font-bold text-white">Dipercaya Mitra Kami</h2>
          <p className="mt-3 text-navy-200">
            Sebagian pengalaman dari instansi dan organisasi yang telah menggunakan
            produk Inti Smart Solution.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-7"
            >
              <span className="text-3xl font-serif text-gold-400">“</span>
              <p className="flex-1 text-sm leading-relaxed text-navy-100">{t.quote}</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-xs text-navy-300">{t.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
