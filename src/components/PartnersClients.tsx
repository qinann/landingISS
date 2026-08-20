import Reveal from './Reveal'
import bprAku from '../assets/partners/bpr-artha-karya-usaha.png'
import danamonSyariah from '../assets/partners/danamon-syariah.jpg'
import midtrans from '../assets/partners/midtrans.png'
import xendit from '../assets/partners/xendit.png'
import ussi from '../assets/partners/ussi.png'
import kabupatenIndramayu from '../assets/partners/kabupaten-indramayu.png'
import baznasJawaBarat from '../assets/partners/baznas-jawa-barat.png'
import kabupatenBandungBarat from '../assets/partners/kabupaten-bandung-barat.png'
import sekolahDaarutTauhiid from '../assets/partners/sekolah-daarut-tauhiid.jpg'
import alqoyyim from '../assets/partners/alqoyyim.png'
import yayasanSerbaBakti from '../assets/partners/yayasan-serba-bakti.jpeg'
import akezHoldings from '../assets/partners/akez-holdings.png'
import doku from '../assets/partners/doku.png'
import ranataAirNetwork from '../assets/partners/ranata-air-network.jpeg'
import hdci from '../assets/partners/hdci.jpg'

const partners = [
  { name: 'BPR Artha Karya Usaha', logo: bprAku },
  { name: 'Danamon Syariah', logo: danamonSyariah },
  { name: 'Midtrans', logo: midtrans },
  { name: 'Xendit', logo: xendit },
  { name: 'USSI', logo: ussi },
  { name: 'Kabupaten Indramayu', logo: kabupatenIndramayu },
  { name: 'BAZNAS Provinsi Jawa Barat', logo: baznasJawaBarat },
  { name: 'Kabupaten Bandung Barat', logo: kabupatenBandungBarat },
  { name: 'Sekolah Daarut Tauhiid Indonesia', logo: sekolahDaarutTauhiid },
  { name: 'Alqoyyim', logo: alqoyyim },
  { name: 'Yayasan Serba Bakti Pondok Pesantren Suryalaya', logo: yayasanSerbaBakti },
  { name: 'AKEZ Holdings', logo: akezHoldings },
  { name: 'DOKU', logo: doku },
  { name: 'Ranata Air Network', logo: ranataAirNetwork },
  { name: 'Harley-Davidson Club Indonesia', logo: hdci },
]

export default function PartnersClients() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">Our Partners & Clients</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">Dipercaya lintas sektor.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
              Berkolaborasi dengan institusi pemerintah, keuangan, pendidikan, filantropi, teknologi, travel, dan komunitas untuk menghadirkan solusi yang relevan.
            </p>
          </div>
        </Reveal>

        <div className="partner-grid mt-12 grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-navy-900/[0.05] sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={(index % 5) * 45} className="h-full">
              <div className="partner-logo-tile group relative grid h-32 place-items-center border-b border-r border-slate-100 p-5 sm:h-36">
                <div className="absolute inset-3 rounded-2xl bg-gradient-to-br from-brand-50/0 to-brand-50/0 transition duration-300 group-hover:from-brand-50 group-hover:to-white" />
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="relative max-h-20 max-w-[85%] object-contain grayscale-[.85] opacity-70 transition duration-300 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <span className="sr-only">{partner.name}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">15 partner dan client yang menjadi bagian dari perjalanan Inti Smart Solution.</p>
      </div>
    </section>
  )
}
