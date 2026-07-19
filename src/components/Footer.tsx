import { Link } from 'react-router-dom'
import { products } from '../data/products'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="h-9 w-9" />
            <span className="text-sm font-bold uppercase tracking-wide text-white">
              Inti Smart Solutions
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Menghadirkan solusi digital terintegrasi untuk pemerintah desa, lembaga
            filantropi, sekolah, retail, dan dunia usaha di seluruh Indonesia.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Produk</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link to={`/produk/${p.slug}`} className="text-slate-300 hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Perusahaan</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/about" className="text-slate-300 hover:text-white">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-slate-300 hover:text-white">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Kontak</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>halo@intismartsolutions.com</li>
            <li>+62 21 0000 0000</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Inti Smart Solutions. Semua hak dilindungi.
      </div>
    </footer>
  )
}
