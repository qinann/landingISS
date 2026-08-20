import { Link } from 'react-router-dom'

export default function CTASection({
  title = 'Siap mendigitalkan operasional Anda?',
  subtitle = 'Konsultasikan kebutuhan Anda dengan tim kami dan temukan solusi Inti Smart Solution yang tepat.',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="relative overflow-hidden rounded-2xl bg-navy-900 px-8 py-16 text-center shadow-2xl shadow-navy-900/20 sm:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,120,246,0.25),transparent_55%)]" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
        <span className="relative inline-block h-px w-12 bg-gold-400" />
        <h2 className="relative mt-4 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="relative mx-auto mt-3 max-w-xl text-navy-200">{subtitle}</p>
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="cta-shine rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-sm hover:bg-slate-100"
          >
            Jadwalkan Demo
          </Link>
          <Link
            to="/about"
            className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Tentang Kami
          </Link>
        </div>
      </div>
    </section>
  )
}
