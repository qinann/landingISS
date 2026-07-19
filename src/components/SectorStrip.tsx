const sectors = [
  'Pemerintah Desa',
  'Lembaga Amil Zakat & Masjid',
  'Sekolah & Yayasan Pendidikan',
  'Retail & F&B',
  'Perusahaan & Koperasi',
]

export default function SectorStrip() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Melayani berbagai sektor di seluruh Indonesia
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {sectors.map((s) => (
            <span key={s} className="text-sm font-semibold text-navy-600">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
