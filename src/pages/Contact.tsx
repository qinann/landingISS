import { useState } from 'react'
import { products } from '../data/products'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="mx-auto block h-px w-12 bg-brand-500" />
        <h1 className="mt-5 text-4xl font-extrabold text-navy-900">
          Mari Diskusikan Kebutuhan Anda
        </h1>
        <p className="mt-4 text-slate-600">
          Isi formulir di bawah ini dan tim kami akan menghubungi Anda untuk
          menjadwalkan konsultasi atau demo produk.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="rounded-xl border border-brand-200 bg-brand-50 p-8 text-center">
              <h2 className="text-xl font-bold text-brand-800">Terima kasih!</h2>
              <p className="mt-2 text-brand-700">
                Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda.
              </p>
            </div>
          ) : (
            <form
              className="space-y-5 rounded-xl border border-slate-200 bg-white p-8"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Nama Lengkap</label>
                  <input
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Instansi / Perusahaan</label>
                  <input
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="Nama instansi atau perusahaan"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    required
                    type="email"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="email@perusahaan.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Nomor Telepon</label>
                  <input
                    type="tel"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Produk yang Diminati</label>
                <select className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500">
                  <option value="">Pilih produk</option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Pesan</label>
                <textarea
                  rows={4}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  placeholder="Ceritakan kebutuhan Anda..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-navy-800 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-navy-900"
              >
                Kirim Pesan
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-navy-900">Kantor Pusat</h3>
            <a
              href="https://share.google/26Dl4AS6hJHTDSB4s"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm leading-relaxed text-brand-700 hover:underline"
            >
              Jl. Cikutra Baru Raya No. 1, Neglasari, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40123
            </a>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-navy-900">Email</h3>
            <p className="mt-2 text-sm text-slate-600">halo@intismartsolutions.com</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-navy-900">Telepon</h3>
            <a
              href="https://wa.me/6285294584791"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-brand-700 hover:underline"
            >
              085294584791
            </a>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-navy-900">Jam Operasional</h3>
            <p className="mt-2 text-sm text-slate-600">Senin – Jumat, 09.00 – 17.00 WIB</p>
          </div>
        </div>
      </div>
    </section>
  )
}
