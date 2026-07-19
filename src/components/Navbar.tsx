import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { products } from '../data/products'
import Logo from './Logo'

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/about', label: 'Tentang Kami' },
  { to: '/contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? 'border-slate-200 shadow-sm' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo className="h-9 w-9" />
          <span className="text-[15px] font-bold uppercase tracking-wide text-navy-800">
            Inti Smart <span className="text-brand-600">Solutions</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="group relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="text-sm font-semibold text-navy-700 hover:text-brand-600">
              Produk
            </button>
            {productsOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-navy-900/10">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/produk/${p.slug}`}
                      className="block rounded-lg px-3 py-2.5 text-sm text-navy-700 hover:bg-brand-50 hover:text-brand-700"
                    >
                      <span className="font-semibold">{p.name}</span>
                      <span className="block text-xs text-slate-500">{p.category}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {navLinks.slice(1).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-semibold ${isActive ? 'text-brand-600' : 'text-navy-700 hover:text-brand-600'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-md bg-navy-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-navy-900"
          >
            Hubungi Kami
          </Link>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-navy-700" />
            <span className="block h-0.5 w-5 bg-navy-700" />
            <span className="block h-0.5 w-5 bg-navy-700" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <p className="px-2 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Produk
          </p>
          {products.map((p) => (
            <Link
              key={p.slug}
              to={`/produk/${p.slug}`}
              className="block rounded-lg px-2 py-2 text-sm text-navy-700 hover:bg-brand-50"
              onClick={() => setOpen(false)}
            >
              {p.name}
            </Link>
          ))}
          <div className="my-2 border-t border-slate-100" />
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block rounded-lg px-2 py-2 text-sm font-semibold text-navy-700 hover:bg-brand-50"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
