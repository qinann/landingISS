import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import SectorStrip from '../components/SectorStrip'
import Testimonials from '../components/Testimonials'
import DashboardMockup from '../components/DashboardMockup'
import Reveal from '../components/Reveal'

const stats = [
  { value: '5', label: 'Produk Solusi Digital' },
  { value: '100+', label: 'Instansi & Bisnis Terlayani' },
  { value: '99.9%', label: 'Uptime Layanan' },
  { value: '24/7', label: 'Dukungan Teknis' },
]

const whyUs = [
  {
    title: 'Solusi End-to-End',
    desc: 'Dari administrasi desa, filantropi, sekolah, hingga retail dan kesejahteraan karyawan — semua dalam satu ekosistem produk yang saling terintegrasi.',
  },
  {
    title: 'Dibangun untuk Skala',
    desc: 'Arsitektur modern yang dapat menyesuaikan kebutuhan, baik untuk skala desa, UMKM, maupun perusahaan besar.',
  },
  {
    title: 'Implementasi Cepat',
    desc: 'Tim kami mendampingi proses onboarding hingga pelatihan pengguna agar adopsi berjalan lancar.',
  },
  {
    title: 'Keamanan Data',
    desc: 'Standar keamanan data yang ketat untuk melindungi informasi sensitif organisasi dan pengguna Anda.',
  },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(52,120,246,0.18),transparent_45%)]" />
        <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                Inti Smart Solution
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Solusi Digital Terpadu untuk Pemerintahan, Filantropi, dan Bisnis
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-200">
              Lima produk unggulan — eDesa, ZX, POS, SDS & TDS, dan AKUDANA — dirancang
              untuk menyederhanakan operasional dan mempercepat pertumbuhan organisasi
              Anda secara berkelanjutan.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-navy-900 shadow-sm hover:bg-slate-100"
              >
                Konsultasi Gratis
              </Link>
              <a
                href="#produk"
                className="rounded-md border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Lihat Produk
              </a>
            </div>
          </div>

          <DashboardMockup label="portal.intismartsolutions.com" />
        </div>
      </section>

      <SectorStrip />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-navy-800">{s.value}</div>
              <div className="mt-1.5 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="produk" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto block h-px w-12 bg-brand-500" />
            <h2 className="mt-4 text-3xl font-bold text-navy-900">Produk Kami</h2>
            <p className="mt-3 text-slate-600">
              Lima solusi digital yang dirancang untuk kebutuhan spesifik pemerintahan,
              filantropi, pendidikan, retail, dan pengelolaan karyawan.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto block h-px w-12 bg-brand-500" />
              <h2 className="mt-4 text-3xl font-bold text-navy-900">
                Kenapa Inti Smart Solution?
              </h2>
              <p className="mt-3 text-slate-600">
                Kami membangun setiap produk dengan fokus pada kemudahan penggunaan dan
                dampak nyata bagi organisasi Anda.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-900 text-sm font-bold text-gold-400">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <CTASection />
    </>
  )
}
