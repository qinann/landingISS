import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import companyProfile from '../assets/Compro ISS.pdf'

const values = [
  { title: 'Inovasi', desc: 'Terus mengembangkan solusi yang relevan dengan kebutuhan pengguna yang berubah.' },
  { title: 'Keandalan', desc: 'Membangun sistem yang stabil dan dapat diandalkan untuk operasional sehari-hari.' },
  { title: 'Kolaborasi', desc: 'Bekerja erat dengan klien untuk memastikan solusi benar-benar sesuai kebutuhan.' },
  { title: 'Integritas', desc: 'Menjaga kepercayaan melalui transparansi dan keamanan data pengguna.' },
]

const timeline = [
  { year: '2020', text: 'Inti Smart Solution didirikan dengan menggabungkan kompetensi software development, business development, dan marketing communication.' },
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
            Inti Smart Solution adalah perusahaan teknologi yang berfokus pada
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

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="overflow-hidden rounded-2xl bg-navy-950 px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">
                  Company Profile
                </span>
                <h2 className="mt-3 text-3xl font-bold text-white">
                  Kenali Inti Smart Solution Lebih Dekat
                </h2>
                <p className="mt-4 leading-relaxed text-navy-200">
                  Pelajari profil perusahaan, layanan, solusi digital, dan pengalaman kami
                  melalui company profile resmi Inti Smart Solution.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
                <a
                  href={companyProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-500"
                >
                  Lihat Company Profile
                </a>
                <a
                  href={companyProfile}
                  download="Company Profile Inti Smart Solution.pdf"
                  className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Unduh PDF
                </a>
              </div>
            </div>
          </Reveal>
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
