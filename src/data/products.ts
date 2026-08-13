import edesaLogo from '../assets/edesa-logo.png'
import edesaVideo from '../assets/edesa-video.mp4'
import zxLogo from '../assets/zx-logo-crop.png'
import zxVideo from '../assets/zx-video.mp4'
import sdsTdsLogo from '../assets/sds-tds-logo-crop.png'
import akudanaLogo from '../assets/akudana-logo.png'

export type Product = {
  slug: string
  name: string
  tagline: string
  category: string
  color: string
  logo?: string
  video?: string
  summary: string
  description: string[]
  features: { title: string; desc: string }[]
  benefits: string[]
  audience: string[]
}

export const products: Product[] = [
  {
    slug: 'edesa',
    name: 'eDesa',
    tagline: 'Digitalisasi Administrasi & Pelayanan Desa',
    category: 'Pemerintahan Desa',
    color: 'brand',
    logo: edesaLogo,
    video: edesaVideo,
    summary:
      'Platform digital terpadu untuk membantu pemerintah desa mengelola administrasi kependudukan, keuangan, dan pelayanan publik secara transparan dan efisien.',
    description: [
      'eDesa adalah sistem informasi desa yang dirancang untuk membantu perangkat desa menjalankan administrasi sehari-hari tanpa kertas, mulai dari surat-menyurat, data kependudukan, hingga pelaporan keuangan desa.',
      'Dengan eDesa, warga dapat mengajukan permohonan surat secara online, sementara aparat desa mendapatkan dashboard terpusat untuk memantau seluruh aktivitas administratif secara real-time.',
    ],
    features: [
      { title: 'Administrasi Kependudukan', desc: 'Kelola data penduduk, kartu keluarga, dan mutasi warga dalam satu basis data terpusat.' },
      { title: 'Layanan Surat Online', desc: 'Warga mengajukan permohonan surat pengantar dari rumah, disetujui digital oleh perangkat desa.' },
      { title: 'Transparansi Keuangan Desa', desc: 'Pencatatan APBDes dan realisasi anggaran yang dapat diakses publik.' },
      { title: 'Dashboard Pemantauan', desc: 'Ringkasan data desa secara visual untuk kepala desa dan perangkatnya.' },
    ],
    benefits: [
      'Mempercepat proses pelayanan administrasi hingga lebih dari 70%',
      'Meningkatkan transparansi pengelolaan dana desa',
      'Mengurangi kesalahan pencatatan data manual',
      'Memudahkan pelaporan ke pemerintah kabupaten/kota',
    ],
    audience: ['Pemerintah Desa', 'Kecamatan & Kabupaten', 'Badan Permusyawaratan Desa (BPD)'],
  },
  {
    slug: 'zx',
    name: 'ZX',
    tagline: 'Platform Digital Pengelolaan Zakat, Infaq & Sedekah',
    category: 'Zakat & Filantropi Digital',
    color: 'brand',
    logo: zxLogo,
    video: zxVideo,
    summary:
      'ZX membantu lembaga amil zakat, masjid, dan yayasan mengelola penghimpunan dan penyaluran zakat, infaq, serta sedekah secara digital, transparan, dan akuntabel.',
    description: [
      'ZX adalah platform pengelolaan Zakat, Infaq, dan Sedekah (ZIS) yang memudahkan lembaga amil zakat maupun masjid menerima donasi secara online sekaligus mencatat penyalurannya kepada mustahik secara rapi dan terlacak.',
      'Setiap donasi yang masuk melalui ZX tercatat otomatis dalam sistem, lengkap dengan laporan penyaluran yang dapat diakses oleh donatur maupun pengurus, sehingga membangun kepercayaan publik terhadap lembaga pengelola.',
    ],
    features: [
      { title: 'Penghimpunan Donasi Online', desc: 'Donatur dapat berzakat, infaq, atau bersedekah kapan saja melalui berbagai kanal pembayaran digital.' },
      { title: 'Manajemen Muzakki & Mustahik', desc: 'Kelola data pemberi dan penerima manfaat dalam satu basis data yang terorganisir.' },
      { title: 'Laporan Penyaluran Transparan', desc: 'Setiap dana yang disalurkan tercatat dan dapat ditelusuri hingga penerima akhir.' },
      { title: 'Integrasi Pembayaran Digital', desc: 'Terhubung dengan berbagai metode pembayaran untuk mempermudah donatur berdonasi.' },
    ],
    benefits: [
      'Meningkatkan kepercayaan donatur lewat transparansi penyaluran dana',
      'Mempermudah pelaporan kepada BAZNAS dan otoritas terkait',
      'Memperluas jangkauan penghimpunan donasi secara digital',
      'Mengurangi pencatatan manual yang rawan kesalahan',
    ],
    audience: ['Lembaga Amil Zakat (LAZ/BAZNAS)', 'Masjid & Yayasan', 'Program Zakat/CSR Perusahaan'],
  },
  {
    slug: 'pos',
    name: 'POS',
    tagline: 'Sistem Kasir Modern untuk Retail & F&B',
    category: 'Point of Sale',
    color: 'accent',
    summary:
      'Sistem point of sale yang cepat, andal, dan mudah digunakan untuk mendukung transaksi harian toko, restoran, dan outlet ritel Anda.',
    description: [
      'POS dirancang untuk mempercepat transaksi di kasir sambil tetap memberikan data penjualan yang akurat dan real-time bagi pemilik usaha.',
      'Terintegrasi dengan manajemen stok dan laporan penjualan, POS membantu pelaku usaha mengambil keputusan berbasis data tanpa perlu rekap manual di akhir hari.',
    ],
    features: [
      { title: 'Transaksi Cepat', desc: 'Antarmuka kasir yang sederhana dan responsif, mendukung berbagai metode pembayaran.' },
      { title: 'Manajemen Stok Real-time', desc: 'Stok otomatis terupdate setiap kali terjadi transaksi penjualan.' },
      { title: 'Laporan Penjualan', desc: 'Rekap harian, mingguan, dan bulanan yang dapat diakses kapan saja.' },
      { title: 'Multi-Outlet', desc: 'Pantau performa beberapa toko atau cabang dari satu dashboard.' },
    ],
    benefits: [
      'Transaksi lebih cepat, antrean lebih pendek',
      'Data penjualan akurat tanpa rekap manual',
      'Mudah dipelajari oleh staf baru',
      'Mendukung operasional toko fisik maupun outlet F&B',
    ],
    audience: ['Toko Retail', 'Restoran & Kafe', 'Minimarket & UMKM'],
  },
  {
    slug: 'sds-tds',
    name: 'SDS & TDS',
    tagline: 'Digitalisasi Administrasi & Akademik Sekolah',
    category: 'Digitalisasi Sekolah',
    color: 'brand',
    logo: sdsTdsLogo,
    summary:
      'Platform digital yang membantu sekolah mengelola data siswa, akademik, keuangan, dan komunikasi dengan orang tua dalam satu sistem yang terintegrasi.',
    description: [
      'SDS & TDS adalah sistem informasi sekolah yang dirancang untuk menyederhanakan proses administrasi dan akademik, mulai dari pendataan siswa, penilaian, hingga pembayaran SPP, sehingga tenaga pendidik dapat lebih fokus pada proses belajar-mengajar.',
      'Orang tua dan wali murid juga mendapatkan akses untuk memantau perkembangan akademik, presensi, dan status pembayaran anak secara real-time melalui aplikasi.',
    ],
    features: [
      { title: 'Manajemen Data Siswa', desc: 'Kelola data induk siswa, kelas, dan riwayat akademik dalam satu sistem terpusat.' },
      { title: 'Sistem Akademik & Nilai', desc: 'Input dan rekap nilai, rapor, serta kurikulum secara digital.' },
      { title: 'Pembayaran SPP Online', desc: 'Orang tua dapat membayar SPP dan biaya sekolah lainnya secara digital.' },
      { title: 'Presensi Digital', desc: 'Pencatatan kehadiran siswa dan guru yang terekam otomatis dan real-time.' },
    ],
    benefits: [
      'Mempermudah administrasi sekolah sehari-hari',
      'Meningkatkan transparansi informasi akademik ke orang tua',
      'Mengurangi pencatatan manual dan risiko data hilang',
      'Mempercepat pelaporan ke dinas pendidikan',
    ],
    audience: ['Sekolah (SD, SMP, SMA/SMK)', 'Yayasan Pendidikan', 'Dinas Pendidikan'],
  },
  {
    slug: 'akudana',
    name: 'AKUDANA',
    tagline: 'Solusi Pinjaman Karyawan Terintegrasi',
    category: 'Employee Loan',
    color: 'accent',
    logo: akudanaLogo,
    summary:
      'AKUDANA memudahkan perusahaan menyediakan fasilitas pinjaman karyawan yang transparan, dengan proses pengajuan dan pemotongan gaji yang sepenuhnya otomatis.',
    description: [
      'AKUDANA adalah platform employee loan yang memungkinkan karyawan mengajukan pinjaman langsung melalui aplikasi, dengan alur persetujuan yang jelas dan dapat dipantau oleh divisi HR maupun keuangan.',
      'Sistem ini terintegrasi dengan payroll, sehingga cicilan pinjaman dapat dipotong otomatis dari gaji setiap bulannya tanpa proses manual yang rawan kesalahan.',
    ],
    features: [
      { title: 'Pengajuan Digital', desc: 'Karyawan mengajukan pinjaman kapan saja melalui aplikasi, tanpa formulir kertas.' },
      { title: 'Alur Persetujuan Berjenjang', desc: 'Approval oleh atasan, HR, dan keuangan sesuai kebijakan perusahaan.' },
      { title: 'Potong Gaji Otomatis', desc: 'Integrasi langsung dengan sistem payroll untuk pemotongan cicilan.' },
      { title: 'Simulasi & Riwayat Pinjaman', desc: 'Karyawan dapat melihat simulasi cicilan dan riwayat pinjaman sebelumnya.' },
    ],
    benefits: [
      'Meningkatkan kesejahteraan dan loyalitas karyawan',
      'Mengurangi beban administratif tim HR',
      'Transparansi penuh atas status dan sisa pinjaman',
      'Mengurangi risiko gagal bayar lewat potong gaji otomatis',
    ],
    audience: ['Divisi HR & Finance', 'Perusahaan dengan Program Kesejahteraan Karyawan', 'Koperasi Karyawan'],
  },
  {
    slug: 'tour-travel',
    name: 'Tour & Travel',
    tagline: 'Platform Digital untuk Agen & Biro Perjalanan Wisata',
    category: 'Pariwisata & Perjalanan',
    color: 'brand',
    summary:
      'Platform digital yang membantu agen dan biro perjalanan wisata mengelola paket tur, reservasi, pembayaran, dan itinerary pelanggan dalam satu sistem yang terintegrasi.',
    description: [
      'Tour & Travel adalah sistem manajemen perjalanan yang dirancang untuk membantu biro wisata mengelola seluruh proses bisnis, mulai dari katalog paket tur, reservasi pelanggan, hingga penjadwalan keberangkatan, secara digital dan terpusat.',
      'Dengan Tour & Travel, pelanggan dapat memesan dan membayar paket wisata secara online, sementara tim operasional mendapatkan visibilitas penuh atas jadwal keberangkatan, kapasitas peserta, dan status pembayaran setiap grup.',
    ],
    features: [
      { title: 'Katalog Paket Wisata', desc: 'Kelola daftar paket tur, destinasi, dan harga dalam satu sistem yang mudah diperbarui.' },
      { title: 'Reservasi & Pembayaran Online', desc: 'Pelanggan dapat memesan dan membayar paket wisata langsung melalui platform.' },
      { title: 'Manajemen Jadwal Keberangkatan', desc: 'Pantau kapasitas peserta, jadwal keberangkatan, dan status setiap grup perjalanan.' },
      { title: 'Itinerary Digital', desc: 'Bagikan rencana perjalanan dan dokumen perjalanan kepada peserta secara digital.' },
    ],
    benefits: [
      'Mempercepat proses reservasi dan pembayaran pelanggan',
      'Mengurangi kesalahan penjadwalan dan kapasitas peserta',
      'Meningkatkan pengalaman pelanggan dengan itinerary digital',
      'Memudahkan pelaporan penjualan paket wisata',
    ],
    audience: ['Agen Perjalanan Wisata', 'Biro Tur & Travel', 'Operator Wisata Lokal'],
  },
]

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug)
