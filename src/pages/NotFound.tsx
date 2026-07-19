import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-32 text-center sm:px-6">
      <span className="text-6xl font-extrabold text-brand-600">404</span>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">Halaman Tidak Ditemukan</h1>
      <p className="mt-2 text-slate-600">
        Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Kembali ke Beranda
      </Link>
    </section>
  )
}
