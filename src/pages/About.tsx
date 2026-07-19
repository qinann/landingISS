import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'

const values = [
  { title: 'Inovasi', desc: 'Terus mengembangkan solusi yang relevan dengan kebutuhan pengguna yang berubah.' },
  { title: 'Keandalan', desc: 'Membangun sistem yang stabil dan dapat diandalkan untuk operasional sehari-hari.' },
  { title: 'Kolaborasi', desc: 'Bekerja erat dengan klien untuk memastikan solusi benar-benar sesuai kebutuhan.' },
  { title: 'Integritas', desc: 'Menjaga kepercayaan melalui transparansi dan keamanan data pengguna.' },
]

const timeline = [
  { year: '2019', text: 'Inti Smart Solutions didirikan dengan fokus pada solusi digital untuk sektor pemerintahan desa.' },
  { year: '2021', text: 'Meluncurkan POS dan memperluas fokus ke sektor retail dan F&B.' },
  { year: '2023', text: 'Menghadirkan ZX untuk mendukung digitalisasi pengelolaan zakat, infaq, dan sedekah.' },
  { year: '2025', text: 'Meluncurkan SDS & TDS untuk digitalisasi sekolah serta AKUDANA untuk kesejahteraan karyawan.' },
]

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(52,120,246,0.18),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <span className="mx-auto block h-px w-12 bg-gold-400" />
          <h1 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl">
            Membangun Teknologi yang Berdampak Nyata
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-navy-200">
            Inti Smart Solutions adalah perusahaan teknologi yang berfokus pada
            pengembangan platform digital untuk pemerintahan desa, lembaga filantropi,
            sekolah, retail, dan kesejahteraan karyawan. Kami percaya teknologi yang
            baik harus sederhana digunakan, namun kuat dalam menyelesaikan masalah nyata.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <div className="text-center">
            <span className="mx-auto block h-px w-12 bg-brand-500" />
            <h2 className="mt-4 text-3xl font-bold text-navy-900">Perjalanan Kami</h2>
          </div>
          <div className="mt-14 space-y-9 border-l-2 border-navy-200 pl-7">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 80} className="relative">
                <span className="absolute -left-[33px] grid h-4 w-4 place-items-center rounded-full bg-navy-800 ring-4 ring-slate-50" />
                <div className="text-sm font-bold text-brand-700">{t.year}</div>
                <p className="mt-1 text-slate-600">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
