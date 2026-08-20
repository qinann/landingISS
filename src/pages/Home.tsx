import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import CTASection from '../components/CTASection'
import SectorStrip from '../components/SectorStrip'
import Testimonials from '../components/Testimonials'
import Reveal from '../components/Reveal'
import PartnersClients from '../components/PartnersClients'

const categories = [
  { id: 'public', label: 'Layanan Publik', slugs: ['edesa', 'zx', 'sds-tds'] },
  { id: 'operations', label: 'Mobilitas & Logistik', slugs: ['tour-travel', 'vehicle-management', 'cargo-management', 'virtual-hajj'] },
  { id: 'business', label: 'Operasional Bisnis', slugs: ['pos', 'akudana'] },
]

const ecosystem = [
  { number: '01', title: 'Travel', desc: 'Peserta, agen, manifest, pembayaran, GPS, dan perjalanan.', slug: 'tour-travel' },
  { number: '02', title: 'Vehicle', desc: 'Armada, bahan bakar, perawatan, rute, dan keselamatan.', slug: 'vehicle-management' },
  { number: '03', title: 'Cargo', desc: 'Kiriman, warehouse, digital POD, dokumen, dan tarif.', slug: 'cargo-management' },
]

const aiCapabilities = [
  { title: 'Predict', desc: 'Memprediksi permintaan, utilisasi, dan keterlambatan.' },
  { title: 'Optimize', desc: 'Merekomendasikan rute, jadwal, kendaraan, dan kapasitas.' },
  { title: 'Protect', desc: 'Mendeteksi anomali pada transaksi, bahan bakar, dan pengiriman.' },
  { title: 'Assist', desc: 'Mencari data, merangkum operasi, dan menyiapkan laporan.' },
]

const productThemes: Record<string, { wash: string; glow: string; badge: string }> = {
  edesa: { wash: 'from-lime-50 via-white to-amber-50', glow: 'bg-lime-300/25', badge: 'text-lime-800' },
  zx: { wash: 'from-emerald-50 via-white to-yellow-50', glow: 'bg-emerald-300/25', badge: 'text-emerald-800' },
  'sds-tds': { wash: 'from-orange-50 via-white to-amber-50', glow: 'bg-orange-300/25', badge: 'text-orange-800' },
  pos: { wash: 'from-blue-50 via-white to-amber-50', glow: 'bg-amber-300/25', badge: 'text-blue-800' },
  akudana: { wash: 'from-sky-50 via-white to-blue-50', glow: 'bg-sky-300/25', badge: 'text-sky-800' },
  'tour-travel': { wash: 'from-blue-50 via-white to-cyan-50', glow: 'bg-cyan-300/25', badge: 'text-cyan-800' },
  'vehicle-management': { wash: 'from-teal-50 via-white to-blue-50', glow: 'bg-teal-300/25', badge: 'text-teal-800' },
  'cargo-management': { wash: 'from-blue-50 via-white to-orange-50', glow: 'bg-orange-300/25', badge: 'text-orange-800' },
  'virtual-hajj': { wash: 'from-slate-50 via-white to-amber-50', glow: 'bg-gold-300/25', badge: 'text-gold-700' },
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const active = categories.find((category) => category.id === activeCategory) ?? categories[0]
  const visibleProducts = active.slugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product) => product !== undefined)

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,rgba(52,120,246,0.24),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(45,212,191,0.13),transparent_30%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-24">
          <div className="hero-copy-enter relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-300 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shadow-[0_0_14px_rgba(238,194,99,.8)]" />
              Technology that moves real operations
            </div>
            <h1 className="mt-7 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Satu ekosistem digital untuk operasi yang <span className="text-brand-300">lebih cerdas.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-navy-200 sm:text-lg">
              Kami merancang, membangun, dan mengimplementasikan sistem yang menghubungkan layanan publik, perjalanan, armada, logistik, pendidikan, dan bisnis.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="cta-shine rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-navy-950 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-brand-50">Diskusikan kebutuhan</Link>
              <a href="#solusi" className="rounded-lg border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Jelajahi ekosistem <span aria-hidden>↓</span></a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-xs text-navy-300">
              <span>Software Development</span><span>Business Development</span><span>Marketing Communication</span>
            </div>
          </div>

          <div className="hero-dashboard-enter relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute -inset-10 rounded-full bg-brand-500/10 blur-3xl" />
            <div className="dashboard-float relative overflow-hidden rounded-[28px] border border-white/10 bg-navy-900/80 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="rounded-[20px] border border-white/10 bg-navy-950/80 p-5 sm:p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-navy-300">ISS Command Center</p><p className="mt-1 text-sm font-semibold text-white">Operational overview</p></div>
                  <div className="flex items-center gap-2 rounded-full bg-accent-400/10 px-3 py-1.5 text-[10px] font-semibold text-accent-300"><span className="h-1.5 w-1.5 rounded-full bg-accent-400" /> Live</div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[['Travel', '128'], ['Vehicles', '84'], ['Shipments', '312']].map(([label, value], index) => (
                    <div key={label} className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-3.5"><p className="text-[10px] text-navy-300">{label}</p><p className="mt-2 text-xl font-bold text-white">{value}</p><div className={`mt-3 h-1 rounded-full ${index === 1 ? 'bg-accent-400/60' : 'bg-brand-400/60'}`} /></div>
                  ))}
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-[1.35fr_.65fr]">
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between"><span className="text-[10px] font-medium text-navy-300">Activity by system</span><span className="text-[10px] text-accent-300">+18.4%</span></div>
                    <div className="mt-7 flex h-28 items-end gap-2">{[44, 70, 54, 86, 62, 95, 77, 88].map((height, index) => <div key={index} className="relative h-full flex-1 overflow-hidden rounded-sm bg-white/[0.05]"><div className="absolute inset-x-0 bottom-0 rounded-sm bg-gradient-to-t from-brand-600 to-brand-300" style={{ height: `${height}%`, opacity: .55 + index * .04 }} /></div>)}</div>
                  </div>
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-4">
                    <p className="text-[10px] text-navy-300">AI insights</p><div className="mt-5 grid h-20 place-items-center rounded-full border-[10px] border-brand-400/20 text-center"><div><strong className="block text-xl text-white">92%</strong><span className="text-[9px] text-navy-300">optimized</span></div></div><p className="mt-5 text-[10px] leading-relaxed text-navy-300">3 rekomendasi siap ditinjau</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-navy-800/95 px-4 py-3 shadow-xl backdrop-blur sm:block"><p className="text-[10px] text-navy-300">System status</p><p className="mt-1 text-xs font-semibold text-white">All operations connected</p></div>
          </div>
        </div>
      </section>

      <SectorStrip />

      <section id="solusi" className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-14 lg:px-8">
        <Reveal><div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Solusi berdasarkan kebutuhan</p><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">Mulai dari masalah yang ingin Anda selesaikan.</h2></div><p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">Sembilan produk kami dikelompokkan ke dalam tiga area agar Anda lebih mudah menemukan sistem yang paling relevan.</p></div></Reveal>
        <div className="mt-10 flex gap-2 overflow-x-auto border-b border-slate-200 pb-px" role="tablist" aria-label="Kategori solusi">
          {categories.map((category) => <button key={category.id} type="button" role="tab" aria-selected={activeCategory === category.id} onClick={() => setActiveCategory(category.id)} className={`shrink-0 border-b-2 px-4 py-3 text-sm font-semibold transition ${activeCategory === category.id ? 'border-brand-600 text-brand-700' : 'border-transparent text-slate-500 hover:text-navy-900'}`}>{category.label}</button>)}
        </div>
        <div id="produk" className="mt-8 grid gap-4 md:grid-cols-2">
          {visibleProducts.map((product, index) => (
            <Link key={`${activeCategory}-${product.slug}`} to={`/produk/${product.slug}`} style={{ animationDelay: `${index * 75}ms` }} className={`product-card-enter group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br ${productThemes[product.slug].wash} p-6 transition duration-300 hover:-translate-y-1 hover:border-white hover:shadow-2xl hover:shadow-navy-900/[0.10] sm:p-7 ${index === 0 && visibleProducts.length % 2 !== 0 ? 'md:col-span-2' : ''}`}>
              <div className={`absolute -right-16 -top-16 h-52 w-52 rounded-full blur-2xl transition duration-500 group-hover:scale-125 ${productThemes[product.slug].glow}`} />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="relative grid gap-6 sm:grid-cols-[1fr_150px] sm:items-center">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.16em] ${productThemes[product.slug].badge}`}>{product.category}</span>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-navy-950">{product.name}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">{product.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{product.features.slice(0, 3).map((feature) => <span key={feature.title} className="rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-[11px] font-medium text-slate-600 shadow-sm backdrop-blur">{feature.title}</span>)}</div>
                </div>
                <div className="relative order-first mx-auto grid h-32 w-32 place-items-center rounded-[28px] border border-white/80 bg-white/70 p-4 shadow-xl shadow-navy-900/[0.08] backdrop-blur sm:order-none sm:ml-auto">
                  {product.logo ? <img src={product.logo} alt="" className="max-h-full max-w-full object-contain drop-shadow-sm" /> : <span className="text-3xl font-extrabold text-brand-700">{product.name.charAt(0)}</span>}
                  <span className="absolute -bottom-3 -right-3 grid h-10 w-10 place-items-center rounded-full bg-navy-950 text-sm text-white shadow-lg transition group-hover:bg-brand-600">↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <PartnersClients />

      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">Connected operations</p><h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Tiga sistem. Satu sumber data.</h2><p className="mt-4 leading-7 text-navy-200">Travel, Vehicle, dan Cargo berbagi arsitektur cloud terpusat sehingga koordinasi tidak lagi terhambat data yang terpisah.</p></div></Reveal>
          <div className="relative mt-16 grid gap-5 lg:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-16 hidden h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent lg:block" />
            {ecosystem.map((item, index) => <Reveal key={item.title} delay={index * 90}><Link to={`/produk/${item.slug}`} className="group relative block h-full rounded-2xl border border-white/10 bg-white/[0.045] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.07]"><div className="flex items-center justify-between"><span className="text-xs font-bold text-gold-300">{item.number}</span><span className="text-navy-300 transition group-hover:text-white">↗</span></div><div className="mt-8 grid h-12 w-12 place-items-center rounded-xl bg-brand-400/10 text-lg font-bold text-brand-200">{item.title.charAt(0)}</div><h3 className="mt-6 text-2xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-navy-200">{item.desc}</p></Link></Reveal>)}
          </div>
          <Reveal delay={150}><div className="relative mx-auto mt-8 max-w-5xl rounded-2xl border border-brand-300/20 bg-gradient-to-r from-brand-500/15 via-accent-400/10 to-brand-500/15 p-6 sm:p-8"><div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">AI intelligence layer</p><h3 className="mt-3 text-2xl font-bold">Dari data menjadi keputusan.</h3></div><div className="grid gap-3 sm:grid-cols-2">{aiCapabilities.map((item) => <div key={item.title} className="rounded-xl bg-black/10 p-4"><strong className="text-sm text-white">{item.title}</strong><p className="mt-1 text-xs leading-5 text-navy-200">{item.desc}</p></div>)}</div></div></div></Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Bukti implementasi</p><h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">Dibangun untuk digunakan di lapangan.</h2></div><Link to="/contact" className="text-sm font-semibold text-brand-700">Diskusikan proyek Anda →</Link></div></Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <Reveal><article className="group relative min-h-[390px] overflow-hidden rounded-3xl bg-navy-950 p-8 text-white sm:p-10"><div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" /><div className="absolute bottom-0 right-0 h-64 w-2/3 opacity-40 [background-image:linear-gradient(rgba(52,120,246,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(52,120,246,.5)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_top,black,transparent)]" /><div className="relative flex h-full flex-col"><span className="w-fit rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gold-300">Event & Travel Platform</span><h3 className="mt-7 text-3xl font-extrabold">Merdeka Ride 2026</h3><p className="mt-4 max-w-xl leading-7 text-navy-200">Registrasi peserta, paket touring, hotel, add-on, pembayaran, inventory, dan rekonsiliasi dalam satu platform untuk program HDCI Indonesia bersama Ranata Journey.</p><div className="mt-auto flex flex-wrap gap-2 pt-10 text-[11px] text-navy-200"><span className="rounded-full bg-white/[0.07] px-3 py-1.5">Registration</span><span className="rounded-full bg-white/[0.07] px-3 py-1.5">Inventory</span><span className="rounded-full bg-white/[0.07] px-3 py-1.5">Reconciliation</span></div><a href="https://merdekaride.ranatatour.co.id/" target="_blank" rel="noopener noreferrer" className="mt-6 text-sm font-semibold text-white">Lihat implementasi ↗</a></div></article></Reveal>
            <Reveal delay={100}><article className="flex min-h-[390px] flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10"><span className="w-fit rounded-full bg-brand-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-800">Digital Village</span><div className="mt-8 grid h-16 w-16 place-items-center rounded-2xl bg-white text-2xl font-extrabold text-brand-700 shadow-sm">eD</div><h3 className="mt-7 text-3xl font-extrabold text-navy-950">eDesa di Indramayu</h3><p className="mt-4 leading-7 text-slate-600">Sosialisasi, pelatihan, dan implementasi layanan digital, termasuk dukungan untuk Desa Haurgeulis yang menjadi runner-up Lomba Desa Kabupaten Indramayu 2022.</p><Link to="/produk/edesa" className="mt-auto pt-8 text-sm font-semibold text-brand-700">Pelajari eDesa →</Link></article></Reveal>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection title="Mari ubah proses yang rumit menjadi sistem yang bekerja." subtitle="Ceritakan kebutuhan operasional Anda. Tim kami akan membantu memetakan solusi dan langkah implementasinya." />
    </>
  )
}
