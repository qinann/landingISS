import { Link } from 'react-router-dom'
import { products } from '../data/products'
import Logo from './Logo'

const productGroups = [
  { label: 'Public Services', slugs: ['edesa', 'zx', 'sds-tds'] },
  { label: 'Smart Operations', slugs: ['tour-travel', 'vehicle-management', 'cargo-management', 'virtual-hajj'] },
  { label: 'Business', slugs: ['pos', 'akudana'] },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-slate-300">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent-500/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 py-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-20 lg:py-16">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-lg">
                <Logo className="h-9 w-9" />
              </span>
              <span>
                <strong className="block text-sm font-extrabold uppercase tracking-[0.12em] text-white">Inti Smart Solution</strong>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-gold-300">Technology for real operations</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-navy-200">
              Menghubungkan layanan publik, perjalanan, armada, logistik, pendidikan, dan bisnis melalui solusi digital yang dirancang untuk digunakan di dunia nyata.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://wa.me/6285294584791" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-navy-950 transition hover:-translate-y-0.5 hover:bg-brand-50">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-[10px] text-white">●</span>
                Bicara dengan tim kami
              </a>
              <a href="https://www.instagram.com/isssolution.id/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10">
                @isssolution.id
              </a>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy-300">Jelajahi solusi</h2>
              <Link to="/contact" className="text-xs font-semibold text-brand-300 hover:text-white">Konsultasi proyek →</Link>
            </div>
            <div className="mt-6 grid gap-8 sm:grid-cols-3">
              {productGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="text-xs font-bold text-white">{group.label}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.slugs.map((slug) => {
                      const product = products.find((item) => item.slug === slug)
                      if (!product) return null
                      return (
                        <li key={product.slug}>
                          <Link to={`/produk/${product.slug}`} className="group inline-flex items-center gap-2 text-xs text-navy-200 transition hover:text-white">
                            <span className="h-1 w-1 rounded-full bg-navy-500 transition group-hover:bg-brand-300" />
                            {product.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 border-b border-white/10 py-7 sm:grid-cols-3">
          <a href="mailto:halo@intismartsolutions.com" className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/[0.04]">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-400/10 text-xs font-bold text-brand-300">@</span>
            <span><small className="block text-[9px] font-bold uppercase tracking-widest text-navy-400">Email</small><span className="mt-1 block text-xs text-navy-100 group-hover:text-white">halo@intismartsolutions.com</span></span>
          </a>
          <a href="https://wa.me/6285294584791" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/[0.04]">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-400/10 text-xs font-bold text-accent-300">WA</span>
            <span><small className="block text-[9px] font-bold uppercase tracking-widest text-navy-400">WhatsApp</small><span className="mt-1 block text-xs text-navy-100 group-hover:text-white">0852 9458 4791</span></span>
          </a>
          <a href="https://share.google/26Dl4AS6hJHTDSB4s" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/[0.04]">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold-400/10 text-xs font-bold text-gold-300">ID</span>
            <span><small className="block text-[9px] font-bold uppercase tracking-widest text-navy-400">Kantor</small><span className="mt-1 block text-xs text-navy-100 group-hover:text-white">Bandung, Jawa Barat</span></span>
          </a>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-[11px] text-navy-400 sm:flex-row">
          <span>© {new Date().getFullYear()} PT Inti Smart Solution. Semua hak dilindungi.</span>
          <div className="flex items-center gap-5">
            <Link to="/about" className="hover:text-white">Tentang Kami</Link>
            <Link to="/kebijakan-privasi" className="hover:text-white">Kebijakan Privasi</Link>
            <Link to="/syarat-ketentuan" className="hover:text-white">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
