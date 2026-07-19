import { Link } from 'react-router-dom'
import type { Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  const isAccent = product.color === 'accent'

  return (
    <Link
      to={`/produk/${product.slug}`}
      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-navy-900/10"
    >
      {product.logo && (
        <img src={product.logo} alt={product.name} className="mb-4 h-12 w-auto object-contain" />
      )}
      <span
        className={`w-fit border-l-2 pl-2.5 text-[11px] font-semibold uppercase tracking-wider ${
          isAccent ? 'border-accent-500 text-accent-700' : 'border-brand-500 text-brand-700'
        }`}
      >
        {product.category}
      </span>
      <h3 className="mt-5 text-xl font-bold text-navy-900">{product.name}</h3>
      <p className="mt-1 text-sm font-medium text-slate-500">{product.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{product.summary}</p>
      <span
        className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold ${
          isAccent ? 'text-accent-700' : 'text-brand-700'
        } group-hover:gap-2`}
      >
        Pelajari lebih lanjut
        <span aria-hidden>→</span>
      </span>
    </Link>
  )
}
