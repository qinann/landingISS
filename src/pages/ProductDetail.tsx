import { Link, Navigate, useParams } from 'react-router-dom'
import { getProductBySlug, products } from '../data/products'
import CTASection from '../components/CTASection'
import ProductCard from '../components/ProductCard'
import DashboardMockup from '../components/DashboardMockup'
import ProductVideo from '../components/ProductVideo'
import Reveal from '../components/Reveal'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = getProductBySlug(slug ?? '')

  if (!product) return <Navigate to="/" replace />

  const isAccent = product.color === 'accent'
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(52,120,246,0.18),transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pt-6 text-sm text-navy-300 sm:px-6">
          <Link to="/" className="hover:text-white">
            Beranda
          </Link>{' '}
          / <span className="text-white">{product.name}</span>
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            {product.logo && (
              <div className="mb-5 inline-block rounded-xl bg-white p-3 shadow-lg">
                <img src={product.logo} alt={product.name} className="h-14 w-auto object-contain" />
              </div>
            )}
            <span
              className={`inline-block border-l-2 pl-2.5 text-[11px] font-semibold uppercase tracking-wider ${
                isAccent ? 'border-accent-400 text-accent-300' : 'border-gold-400 text-gold-300'
              }`}
            >
              {product.category}
            </span>
            <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">{product.name}</h1>
            <p className="mt-3 text-xl font-medium text-navy-200">{product.tagline}</p>
            <p className="mt-5 text-lg leading-relaxed text-navy-200">{product.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-navy-900 shadow-sm hover:bg-slate-100"
              >
                Minta Demo {product.name}
              </Link>
              <Link
                to="/"
                className="rounded-md border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Lihat Semua Produk
              </Link>
            </div>
          </div>

          {product.video ? (
            <ProductVideo src={product.video} label={product.name} />
          ) : (
            <DashboardMockup accent={product.color as 'brand' | 'accent'} label={product.name} />
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-bold text-navy-900">Tentang {product.name}</h2>
              <div className="mt-4 space-y-4">
                {product.description.map((para, i) => (
                  <p key={i} className="leading-relaxed text-slate-600">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mt-12 text-2xl font-bold text-navy-900">Fitur Utama</h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {product.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 60}>
                  <div className="h-full rounded-xl border border-slate-200 bg-white p-5">
                    <h3 className="font-semibold text-navy-900">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Reveal>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-navy-900">Manfaat Utama</h3>
                <ul className="mt-4 space-y-3">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-slate-600">
                      <span className={isAccent ? 'text-accent-600' : 'text-brand-600'}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-navy-900">Cocok Untuk</h3>
                <ul className="mt-4 space-y-2">
                  {product.audience.map((a) => (
                    <li
                      key={a}
                      className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold text-navy-900">Produk Lainnya</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Tertarik dengan ${product.name}?`}
        subtitle="Jadwalkan demo bersama tim kami dan lihat bagaimana produk ini dapat membantu organisasi Anda."
      />
    </>
  )
}
