import React, { useEffect, useState } from 'react'

const BRAND = 'Saepul Transindo Perkasa'
const CONTACT = {
  whatsapp: '+62-812-1232-8402',
  email: 'saepultransindoperkasa@gmail.com',
  address: 'Jl.Warakas V Gg 1 No.128 Rt.03/08 Kel.Warakas Kec.Tj Priok, Jakarta utara',
}

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Profile', href: '#profile' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Cek Resi', href: '#resi' },
  { label: 'Contact', href: '#contact' },
]


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const handleNavClick = () => {
    // Tutup menu setelah user pilih salah satu link
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Logo + Brand */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo-stp.jpg"
              alt="Saepul Transindo Perkasa"
              className="h-9 w-9 object-contain"
            />
            <div className="leading-tight">
              <span className="block font-extrabold text-lg md:text-xl text-[#0057A0]">
                Saepul <span className="text-[#0057A0]">Transindo</span>{' '}
                <span className="text-[#2BB673]">Perkasa</span>
              </span>
              <span className="hidden sm:block text-xs text-gray-500">
                Jasa Pengiriman Seluruh Nusantara
              </span>
            </div>
          </a>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#0057A0] hover:bg-blue-50/60 transition"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA + tombol mobile */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6281212328402?text=Halo%20Saepul%20Transindo%20Perkasa%2C%20saya%20ingin%20mengirim%20barang."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex px-4 py-2 rounded-xl bg-[#2BB673] text-white font-semibold hover:bg-[#23935E] transition shadow-sm"
            >
              Kontak Sekarang
            </a>

            {/* tombol hamburger untuk HP */}
            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border bg-white/80 hover:bg-gray-50"
              aria-label="Buka menu"
            >
            ☰
            </button>
          </div>
        </div>
      </div>

      {/* Menu dropdown untuk HP */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={handleNavClick}
                className="py-2 text-sm font-medium text-gray-700 hover:text-[#0057A0] hover:bg-blue-50/60 rounded-lg px-2"
              >
                {n.label}
              </a>
            ))}
            <a
              href="https://wa.me/6281212328402?text=Halo%20Saepul%20Transindo%20Perkasa%2C%20saya%20ingin%20mengirim%20barang."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="mt-2 py-2 text-sm font-semibold text-[#2BB673] border border-[#2BB673] rounded-xl px-3 text-center hover:bg-[#2BB673] hover:text-white transition"
            >
              Chat WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}


function Hero() {
  const slides = [
    {
      img: "/13.jpg",
      title: "Jasa Pengiriman Seluruh Nusantara",
      sub: "Layanan ekspedisi cargo darat, laut, udara - cepat, aman, terpercaya.",
    },
    {
      img: "/hero-7.jpg",
      title: "Pengiriman Kendaraan",
      sub: "Mobil, motor, dan alat berat antar pulau dengan pengamanan profesional.",
    },
    {
      img: "/hero-8.jpg",
      title: "Trucking & Kontainer (LCL/FCL)",
      sub: "Jaringan armada nasional untuk kebutuhan bisnis Anda.",
    },
  ];

  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay hitam transparan */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Teks di tengah */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="mt-3 text-sm md:text-lg max-w-2xl drop-shadow-md">
              {slide.sub}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-[#2BB673] text-white font-semibold hover:bg-[#23935E] transition"
              >
                Hubungi Kami
              </a>
              <a
                href="#profile"
                className="px-5 py-3 rounded-xl border border-white/80 text-white hover:bg-white/10 transition"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Indicator bulat di bawah */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-[#2BB673]" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}


function Profile() {
  const facts = [
    { k: 'Jangkauan', v: 'Seluruh Nusantara' },
    { k: 'Moda', v: 'Darat • Laut • Udara' },
    { k: 'Layanan', v: 'Cargo • Kendaraan • LCL/FCL' },
  ]

  return (
    <section id="profile" className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Bagian kiri: profil dan layanan */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold">Profil Perusahaan</h2>
            <p className="mt-3 text-gray-600">
              <span className="font-semibold">Saepul Transindo Perkasa</span> adalah perusahaan jasa pengiriman
              yang melayani ekspedisi cargo barang (<span className="italic">darat, laut, udara</span>),
              pengiriman kendaraan, serta trucking & kontainer (<span className="italic">LCL & FCL</span>).
              Kami berkomitmen memberikan layanan yang aman, tepat waktu, dan transparan untuk kebutuhan
              personal maupun bisnis.
            </p>

            {/* Fakta singkat */}
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {facts.map((f, i) => (
                <div key={i} className="rounded-2xl border bg-white p-4">
                  <p className="text-xs uppercase tracking-widest text-gray-500">{f.k}</p>
                  <p className="mt-1 font-semibold">{f.v}</p>
                </div>
              ))}
            </div>

            {/* Highlight layanan */}
            {/* Pengiriman Kendaraan — kategori & dokumentasi */}
            <div className="mt-10 rounded-2xl border bg-white p-6">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className="text-lg font-bold">Pengiriman Kendaraan</h3>
                <p className="text-sm text-gray-500">Kategori & dokumentasi foto</p>
              </div>

              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Cargo', img: '/kendaraan-cargo.jpg' },
                  { label: 'Motor', img: '/kendaraan-motor.jpg' },
                  { label: 'Mobil', img: '/kendaraan-mobil.jpg' },
                  { label: 'Alat Berat', img: '/kendaraan-alatberat.jpg' },
                ].map((it) => (
                  <figure key={it.label} className="rounded-xl border overflow-hidden bg-white">
                    <img src={it.img} alt={it.label} className="h-32 w-full object-cover" />
                    <figcaption className="px-3 py-2 text-sm font-medium">{it.label}</figcaption>
                  </figure>
                ))}
              </div>

              {/* Rute via laut */}
              <div className="mt-6">
                <p className="text-xs uppercase tracking-widest text-gray-500">Via Laut - Tujuan Populer</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    'Jakarta-Makassar',
                    'Jakarta-Balikpapan',
                    'Jakarta-Banjarmasin',
                    'Jakarta-Pontianak',
                    'Jakarta-Medan',
                  ].map((r) => (
                    <span
                      key={r}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[rgb(var(--brand))] text-xs font-semibold border border-blue-100"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bagian kanan: visi & misi */}
          <div className="space-y-4">
            <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 text-[rgb(var(--brand))]">
                <span className="h-2 w-2 rounded-full bg-[rgb(var(--brand))]" />
                <p className="text-xs uppercase tracking-widest font-semibold">Visi</p>
              </div>

              <h3 className="text-lg font-bold mt-1">
                Menjadi perusahaan logistik nasional yang terintegrasi, inovatif, dan terpercaya dalam menghadirkan solusi pengiriman terbaik di Indonesia.
              </h3>

              <div className="mt-3 h-px bg-gradient-to-r from-[rgb(var(--brand))] via-blue-200 to-transparent" />

            </div>
            <div className="rounded-2xl border bg-gradient-to-b from-white to-blue-50/20 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 text-[rgb(var(--brand))]">
                <span className="h-2 w-2 rounded-full bg-[rgb(var(--brand))]" />
                <p className="text-xs uppercase tracking-widest font-semibold">Misi</p>
              </div>

              <div className="mt-3 border-l-4 border-[rgb(var(--brand))] pl-4">
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-[rgb(var(--brand))]">✓</span>
                    <span>Memberikan layanan terintegrasi, berkualitas, dan efisien kepada pelanggan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-[rgb(var(--brand))]">✓</span>
                    <span>Membangun jaringan logistik yang luas dan bekerja sama dengan mitra yang kompeten untuk menjamin kepuasan pelanggan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-[rgb(var(--brand))]">✓</span>
                    <span>Menyediakan solusi pengiriman yang efisien, cepat, dan andal.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-[rgb(var(--brand))]">✓</span>
                    <span>Menjaga kepercayaan pelanggan melalui kualitas dan kecepatan layanan yang handal.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-[rgb(var(--brand))]">✓</span>
                    <span>Memberikan manfaat maksimal kepada pemegang saham, kesejahteraan karyawan, dan masyarakat.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-[rgb(var(--brand))]">✓</span>
                    <span>Menjadi pilihan utama pelanggan dengan semangat untuk selalu menjadi yang terbaik.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Galeri() {
  const ALL = [
    
    { src: "/9.jpg", caption: "Loading Barang", tag: "Operasional" },
    { src: "/12.jpg", caption: "Loading Alat Berat", tag: "Operasional" },
    { src: "/11.jpg", caption: "Pengiriman Truck", tag: "Operasional" },
  
    { src: "/c1.jpg", caption: "Serah terima unit", tag: "Client" },
    { src: "/c3.jpg", caption: "Serah terima unit", tag: "Client" },
    { src: "/c2.jpg", caption: "Serah terima unit", tag: "Client" },
  ];

  const [filter, setFilter] = React.useState("Semua");
  const [lightbox, setLightbox] = React.useState(null);

  const tags = ["Semua", "Operasional", "Client"];
  const items = filter === "Semua" ? ALL : ALL.filter(i => i.tag === filter);

  return (
    <section id="galeri" className="py-14 md:py-20 bg-gray-50 border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Galeri</h2>
            <p className="mt-2 text-gray-600">Cuplikan operasional dan dokumentasi bersama client.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1.5 rounded-full text-sm border transition ${
                  filter === t
                    ? "bg-[rgb(var(--brand))] text-white border-[rgb(var(--brand))]"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-gray-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry columns: potret & lanskap tetap proporsional */}
        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {items.map((it, idx) => (
            <figure
              key={idx}
              className="break-inside-avoid mb-4 rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition"
            >
              <button onClick={() => setLightbox({ idx, list: items })} className="block w-full text-left">
                <img src={it.src} alt={it.caption} className="w-full h-auto object-cover" />
              </button>
              <figcaption className="px-4 py-3 text-sm text-gray-700 flex items-center justify-between">
                <span className="truncate">{it.caption}</span>
                <span className="ml-3 inline-flex px-2 py-0.5 rounded-full text-xs bg-blue-50 text-[rgb(var(--brand))] border border-blue-100">
                  {it.tag}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-gray-600">
          Lihat lebih banyak dokumentasi pengiriman dan aktivitas kami di Instagram:&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" className="inline w-4 h-4 mr-1 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.316.975.975 1.253 2.242 1.316 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.063 1.366-.341 2.633-1.316 3.608-.975.975-2.242 1.253-3.608 1.316-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.063-2.633-.341-3.608-1.316-.975-.975-1.253-2.242-1.316-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.316-3.608C4.524 2.572 5.791 2.294 7.157 2.231 8.423 2.173 8.803 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.127 4.692.392 3.757 1.328 2.822 2.263 2.557 3.342 2.5 4.623 2.442 5.903 2.43 6.312 2.43 9.57v4.86c0 3.259.012 3.668.07 4.948.057 1.281.322 2.36 1.257 3.295.935.935 2.014 1.2 3.295 1.257 1.281.058 1.69.07 4.948.07s3.668-.012 4.948-.07c1.281-.057 2.36-.322 3.295-1.257.935-.935 1.2-2.014 1.257-3.295.058-1.28.07-1.689.07-4.948V9.57c0-3.258-.012-3.667-.07-4.947-.057-1.281-.322-2.36-1.257-3.295-.935-.935-2.014-1.2-3.295-1.257C15.668.012 15.259 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/><circle cx="18.406" cy="5.595" r="1.44"/></svg>
          <a
            href="https://www.instagram.com/saepultransindoperkasa/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(var(--brand))] font-semibold hover:underline"
          >
            @saepultransindoperkasa
          </a>
        </p>
      </div>


      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4">
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/90 text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
          <div className="max-w-6xl w-full">
            <img
              src={lightbox.list[lightbox.idx].src}
              alt={lightbox.list[lightbox.idx].caption}
              className="w-full h-auto object-contain rounded-xl shadow-xl"
            />
            <div className="mt-3 text-white/90 text-sm flex items-center justify-between">
              <span>{lightbox.list[lightbox.idx].caption}</span>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/20"
                  onClick={() =>
                    setLightbox(({ idx, list }) => ({ idx: (idx - 1 + list.length) % list.length, list }))
                  }
                >
                  ‹ Prev
                </button>
                <button
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/20"
                  onClick={() =>
                    setLightbox(({ idx, list }) => ({ idx: (idx + 1) % list.length, list }))
                  }
                >
                  Next ›
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


function CekResi() {
  const [resi, setResi] = React.useState("");
  const [result, setResult] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resi.trim()) {
      setResult({ error: "Masukkan nomor resi terlebih dahulu." });
      return;
    }
    setResult(null);
    setLoading(true);

    setTimeout(() => {
      setResult({
        status: "Data resi tidak ditemukan. Mohon periksa kembali nomor resi Anda atau hubungi layanan pelanggan kami untuk bantuan lebih lanjut.",
        lokasi: "-",
        tanggal: new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" }),
        step: -1, 
      });
      setLoading(false);
    }, 1200);
  };


  const TruckIcon = ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 7h9v7H3z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M12 9h5l3 3v2h-8V9z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7" cy="16.5" r="1.75" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="16.5" r="1.75" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2 16.5h3M19 16.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );


  const Spinner = () => (
    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
      <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"/>
    </svg>
  );


  const Steps = ({ step = 0 }) => {
    const labels = ["Pickup", "Transit", "Delivery"];
    return (
      <div className="mt-4">
        <ol className="flex items-center justify-between text-xs sm:text-sm">
          {labels.map((l, i) => (
            <li key={l} className="flex-1 flex items-center">
              <div className={`flex items-center gap-2 ${i <= step ? "text-[rgb(var(--brand))]" : "text-gray-400"}`}>
                <span className={`grid place-items-center w-6 h-6 rounded-full border ${i <= step ? "bg-blue-50 border-[rgb(var(--brand))]" : "border-gray-300"}`}>
                  {i < step ? "✓" : i === step ? "•" : ""}
                </span>
                <span className="hidden sm:inline">{l}</span>
              </div>
              {i < labels.length - 1 && <div className={`mx-2 h-[2px] flex-1 ${i < step ? "bg-[rgb(var(--brand))]" : "bg-gray-200"}`} />}
            </li>
          ))}
        </ol>
      </div>
    );
  };

  return (
    <section id="resi" className="py-14 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header dengan ikon */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[rgb(var(--brand))] border border-blue-100">
          <TruckIcon className="w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-widest">Tracking</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mt-3">Cek Resi Pengiriman</h2>
        <p className="text-gray-600 mt-2">
          Masukkan nomor resi Anda untuk melacak status pengiriman barang.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="text"
            value={resi}
            onChange={(e) => setResi(e.target.value)}
            placeholder="Masukkan nomor resi..."
            className="flex-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[rgb(var(--brand))] outline-none"
            aria-label="Nomor resi"
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 rounded-xl text-white font-semibold transition inline-flex items-center justify-center gap-2
              ${loading ? "bg-[#23935E] cursor-not-allowed opacity-90" : "bg-[#2BB673] hover:bg-[#23935E]"}`}
            aria-busy={loading ? "true" : "false"}
          >
            {loading ? (<><Spinner/> Memeriksa…</>) : "Cek Resi"}
          </button>
        </form>

        {/* Hasil */}
        <div className="mt-8 text-left sm:text-center">
          {loading && (
            <div className="mx-auto max-w-xl rounded-xl border bg-gray-50 p-5 text-gray-600">
              <p className="flex items-center gap-2 justify-center"><Spinner/> Mengambil data resi…</p>
            </div>
          )}

          {result && !loading && (
            <div className="mx-auto max-w-xl rounded-xl border bg-white p-5 shadow-sm">
              {result.error ? (
                <p className="text-red-600 font-semibold">{result.error}</p>
              ) : (
                <>
                  <p className="text-xs text-gray-500">Nomor Resi: <strong className="text-gray-800">{resi}</strong></p>
                  <p className="mt-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                      Status: {result.status}
                    </span>
                  </p>
                  <p className="text-sm mt-2">Lokasi terakhir: <span className="font-medium">{result.lokasi}</span></p>
                  <p className="text-sm text-gray-500">Tanggal update: {result.tanggal}</p>

                  {/* Progress langkah */}
                  <Steps step={result.step} />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}



function ContactCTA() {
  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-brand font-semibold">Hubungi Kami</p>
            <h3 className="text-xl md:text-2xl font-bold mt-1">Diskusikan kebutuhan pengiriman Anda</h3>
            <p className="text-gray-600 mt-2">Kami siap memberikan solusi terbaik - cepat, aman, dan transparan.</p>
          </div>
          <a href={"https://wa.me/6281212328402?text=Halo%20Saepul%20Transindo%20Perkasa%2C%20saya%20ingin%20mengirim%20barang."} className="px-5 py-3 rounded-xl bg-[rgb(var(--brand))] text-white font-semibold hover:opacity-90">Chat WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="font-semibold text-lg">{BRAND}</p>
            <p className="mt-2 text-sm text-gray-600">{CONTACT.address}</p>
          </div>
          <div>
            <p className="font-semibold">Navigasi</p>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li><a href="#home" className="hover:text-brand">Home</a></li>
              <li><a href="#profile" className="hover:text-brand">Profile</a></li>
              <li><a href="#galeri" className="hover:text-brand">Galeri</a></li>
              <li><a href="#resi" className="hover:text-brand">Cek Resi</a></li>
              <li><a href="#contact" className="hover:text-brand">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Ikuti Kami</p>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li><a href="https://www.instagram.com/saepultransindoperkasa/" className="hover:text-brand">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© 2025 {BRAND}. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Profile />
      <Galeri />
      <CekResi />
      <ContactCTA />
      <Footer />
    </div>
  )
}
