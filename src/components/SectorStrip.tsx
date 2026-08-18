const sectors = [
  { short: 'PD', label: 'Pemerintah Desa', tone: 'bg-brand-100 text-brand-700' },
  { short: 'ZF', label: 'Zakat & Filantropi', tone: 'bg-emerald-100 text-emerald-700' },
  { short: 'ED', label: 'Sekolah & Pendidikan', tone: 'bg-violet-100 text-violet-700' },
  { short: 'RT', label: 'Retail & F&B', tone: 'bg-amber-100 text-amber-700' },
  { short: 'HR', label: 'Perusahaan & Koperasi', tone: 'bg-sky-100 text-sky-700' },
  { short: 'TR', label: 'Travel & Umrah', tone: 'bg-rose-100 text-rose-700' },
  { short: 'LG', label: 'Transportasi & Logistik', tone: 'bg-cyan-100 text-cyan-700' },
]

const proofPoints = [
  { value: '9', label: 'Solusi digital' },
  { value: '7', label: 'Sektor industri' },
  { value: '3', label: 'Kompetensi utama' },
  { value: '1', label: 'Ekosistem terintegrasi' },
]

export default function SectorStrip() {
  return (
    <section className="relative z-10 bg-slate-50 px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl -translate-y-8 overflow-hidden rounded-3xl border border-white/70 bg-white shadow-2xl shadow-navy-950/10">
        <div className="grid gap-5 px-6 py-7 sm:px-8 lg:grid-cols-[260px_1fr] lg:items-center lg:px-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-700">Beragam kebutuhan, satu partner</p>
            <h2 className="mt-2 text-lg font-bold leading-snug text-navy-950">Solusi untuk operasi di dunia nyata.</h2>
          </div>

          <div className="flex gap-2.5 overflow-x-auto pb-2 lg:flex-wrap lg:justify-end lg:overflow-visible lg:pb-0">
            {sectors.map((sector) => (
              <span key={sector.label} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-navy-800 transition hover:border-brand-200 hover:bg-brand-50">
                <span className={`grid h-6 w-6 place-items-center rounded-full text-[8px] font-extrabold ${sector.tone}`}>{sector.short}</span>
                {sector.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden bg-navy-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(52,120,246,.28),transparent_30%),radial-gradient(circle_at_90%_100%,rgba(45,212,191,.16),transparent_28%)]" />
          <div className="relative grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">
            {proofPoints.map((item) => (
              <div key={item.label} className="group px-5 py-6 text-center sm:py-7">
                <div className="text-3xl font-extrabold tracking-tight text-white transition group-hover:text-brand-300">{item.value}</div>
                <div className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-navy-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
