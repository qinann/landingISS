import edesaLogo from '../assets/edesa-logo.png'
import edesaVideo from '../assets/edesa-video.mp4'
import zxLogo from '../assets/zx-logo-crop.png'
import zxVideo from '../assets/zx-video.mp4'
import sdsTdsLogo from '../assets/sds-tds-logo-crop.png'
import akudanaLogo from '../assets/akudana-logo.png'
import posIcon from '../assets/pos-icon.png'
import travelIcon from '../assets/travel-icon.png'
import vehicleIcon from '../assets/vehicle-icon.png'
import cargoIcon from '../assets/cargo-icon.png'
import virtualHajjIcon from '../assets/virtual-hajj-icon.png'

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
    logo: posIcon,
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
    name: 'Travel Management',
    tagline: 'Operasional Umrah, Corporate Travel & Tour Terintegrasi',
    category: 'Travel Management System',
    color: 'brand',
    logo: travelIcon,
    summary:
      'Platform terintegrasi yang menghubungkan peserta, agen perjalanan, tour leader, dan keluarga secara real-time dari registrasi hingga kepulangan.',
    description: [
      'Travel Management adalah sistem operasional untuk perjalanan Umrah, corporate travel, dan tour yang menyatukan registrasi, dokumen, pembayaran, paket, agen, dan manifest dalam satu dashboard.',
      'Fitur keselamatan dan pembelajaran seperti wearable GPS, panic button, notifikasi real-time, dan Virtual Manasik VR 360 membantu penyelenggara memberi pengalaman perjalanan yang lebih aman dan terkoordinasi.',
    ],
    features: [
      { title: 'Auto Manifest', desc: 'Peserta mengunggah data dan persyaratan secara mandiri untuk membentuk manifest otomatis.' },
      { title: 'Payment, CRM & Agent', desc: 'Kelola pembayaran, invoice, agen, fee, dan paket perjalanan dari satu basis data.' },
      { title: 'GPS & Panic Button', desc: 'Wearable GPS membantu melacak peserta di lapangan dengan tombol darurat untuk keselamatan tambahan.' },
      { title: 'Virtual Manasik VR 360', desc: 'Simulasi interaktif Masjidil Haram dan Masjid Nabawi membantu persiapan sebelum keberangkatan.' },
    ],
    benefits: [
      'Mempercepat administrasi peserta dan penyusunan manifest',
      'Meningkatkan keselamatan dan visibilitas peserta di lapangan',
      'Menyederhanakan koordinasi agen, tour leader, peserta, dan keluarga',
      'Memberikan pembaruan perjalanan secara real-time',
    ],
    audience: ['Penyelenggara Umrah & Haji', 'Agen Tur & Travel', 'Corporate Travel & Event Organizer'],
  },
  {
    slug: 'vehicle-management',
    name: 'Vehicle Management',
    tagline: 'Kendali Armada secara Real-Time',
    category: 'Fleet & Telematics',
    color: 'accent',
    logo: vehicleIcon,
    summary:
      'Sistem pemantauan dan pengelolaan armada yang membantu organisasi mengendalikan lokasi, bahan bakar, perawatan, dan keselamatan pengemudi secara terpusat.',
    description: [
      'Vehicle Management memberikan visibilitas real-time atas lokasi, kecepatan, status mesin, dan penggunaan kendaraan melalui GPS telematics yang aktif 24/7.',
      'Analisis konsumsi bahan bakar, pengingat servis otomatis, serta laporan perilaku pengemudi membantu menekan biaya operasional dan mengurangi risiko penyalahgunaan aset.',
    ],
    features: [
      { title: 'Live Telematics', desc: 'Pantau lokasi, kecepatan, rute, dan status mesin kendaraan secara akurat dan real-time.' },
      { title: 'Fuel Management', desc: 'Analisis konsumsi bahan bakar dan identifikasi pola tidak wajar atau potensi fraud.' },
      { title: 'Maintenance Reminder', desc: 'Pengingat otomatis untuk servis, penggantian oli, dan perpanjangan dokumen kendaraan.' },
      { title: 'Driver Analytics', desc: 'Laporan overspeeding, hard braking, dan perilaku berkendara untuk meningkatkan keselamatan.' },
    ],
    benefits: [
      'Meningkatkan utilisasi dan visibilitas seluruh armada',
      'Menekan pemborosan bahan bakar dan biaya pemeliharaan',
      'Mencegah penyalahgunaan kendaraan perusahaan',
      'Meningkatkan keselamatan dan disiplin pengemudi',
    ],
    audience: ['Perusahaan Logistik', 'Transportasi & Rental', 'Perusahaan dengan Armada Operasional'],
  },
  {
    slug: 'cargo-management',
    name: 'Cargo Management',
    tagline: 'Visibilitas Logistik dari Gudang hingga Tujuan',
    category: 'Logistics & Cargo',
    color: 'brand',
    logo: cargoIcon,
    summary:
      'Solusi end-to-end untuk memantau pergerakan kargo, persediaan gudang, dokumen pengiriman, dan biaya logistik melalui darat, laut, maupun udara.',
    description: [
      'Cargo Management menyatukan pelacakan kiriman, warehouse, dokumen, tarif, dan konfirmasi penerimaan dalam satu sistem agar setiap pihak melihat status yang sama.',
      'Dukungan API memungkinkan integrasi dengan marketplace, ERP perusahaan, sistem kepabeanan, dan pihak ketiga lain tanpa proses pencatatan berulang.',
    ],
    features: [
      { title: 'Multi-Modal Tracking', desc: 'Lacak penerimaan, kiriman, dan kontainer lintas moda darat, laut, dan udara.' },
      { title: 'Digital POD', desc: 'Konfirmasi penerimaan dengan tanda tangan digital, foto lokasi, dan jejak waktu.' },
      { title: 'Warehouse Sync', desc: 'Sinkronkan stok masuk dan keluar agar proses fulfillment lebih tepat waktu.' },
      { title: 'Smart Document & Tariff', desc: 'Buat waybill, manifest, barcode, serta kalkulasi tarif berdasarkan berat, volume, dan jarak.' },
    ],
    benefits: [
      'Transparansi status pengiriman dari awal hingga akhir',
      'Mengurangi dokumen cetak yang hilang atau rusak',
      'Mempercepat rekonsiliasi biaya dan proses klaim',
      'Siap terintegrasi dengan sistem bisnis yang sudah digunakan',
    ],
    audience: ['Perusahaan Logistik & Freight Forwarder', 'Distributor & Manufaktur', 'Operator Gudang & E-commerce'],
  },
  {
    slug: 'virtual-hajj',
    name: 'Virtual Hajj Training',
    tagline: 'Pembelajaran Manasik Interaktif dalam VR 360',
    category: 'Hajj Education Technology',
    color: 'accent',
    logo: virtualHajjIcon,
    summary:
      'Aplikasi pembelajaran multi-platform yang membantu calon jamaah memahami rangkaian Haji dan Umrah melalui panduan lengkap, video 360, audio doa, dan simulasi 3D interaktif.',
    description: [
      'Virtual Hajj Training menghadirkan pengalaman belajar visual yang mudah digunakan oleh jamaah dari berbagai usia dan tingkat pengalaman digital.',
      'Materi dapat diakses melalui smartphone, tablet, laptop, dan komputer sehingga proses pembelajaran bisa dilakukan kapan saja dan di mana saja dengan koneksi internet.',
    ],
    features: [
      { title: 'Simulasi Haji 3D 360', desc: 'Pelajari ihram, wukuf, jamarat, tawaf, sa’i, dan tahallul melalui simulasi lokasi interaktif.' },
      { title: 'Video Makkah & Madinah', desc: 'Konten video 360 memberikan gambaran realistis Masjidil Haram dan Masjid Nabawi.' },
      { title: 'Panduan & Audio Doa', desc: 'Panduan ibadah dan audio doa tersedia dalam Arab, transliterasi Latin, dan terjemahan.' },
      { title: 'Akses Multi-Platform', desc: 'Gunakan materi melalui ponsel, tablet, laptop, maupun desktop tanpa perangkat khusus.' },
    ],
    benefits: [
      'Membantu jamaah memahami alur ibadah sebelum keberangkatan',
      'Pengalaman belajar lebih menarik dan mudah diingat',
      'Dapat digunakan untuk pelatihan mandiri maupun kelompok',
      'Mudah diakses oleh jamaah dari berbagai usia',
    ],
    audience: ['KBIHU & Penyelenggara Haji/Umrah', 'Calon Jamaah Haji & Umrah', 'Lembaga Pelatihan Manasik'],
  },
]

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug)
