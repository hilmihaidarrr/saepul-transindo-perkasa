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
  { label: 'Buku Tamu', href: '#buku-tamu' },
  { label: 'Contact', href: '#contact' },
]

const HERO_SLIDES = [
  { src: '/pengiriman.jpg', title: 'Jasa Pengiriman Seluruh Nusantara', sub: 'Ekspedisi cargo darat, laut, udara - Cepat, Aman, Terpercaya.' },
  { src: '/kirimmobil.jpg', title: 'Pengiriman Kendaraan', sub: 'Mobil & Motor antar pulau dengan pengamanan profesional.' },
  { src: '/trucking.jpg', title: 'Trucking & Kontainer (LCL / FCL)', sub: 'Jaringan armada nasional untuk kebutuhan bisnis Anda.' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Logo + Brand */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo-stp.jpg"
              alt="Saepul Transindo Perkasa"
              className="h-9 w-9 rounded-lg shadow-sm object-contain"
            />
            <div className="leading-tight">
              <span className="block font-extrabold text-lg md:text-xl">
                Saepul <span className="text-brand">Transindo</span> <span className="text-brand-accent">Perkasa</span>
              </span>
              <span className="hidden sm:block text-xs text-gray-500">
                Jasa Pengiriman Seluruh Nusantara
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[rgb(var(--brand))] hover:bg-blue-50/60 transition"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex px-5 py-2.5 rounded-xl text-white font-semibold
                        bg-[#1E88E5] hover:bg-[#23935E] transition shadow-sm hover:shadow-md"
            >
              Kontak Sekarang
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border bg-white/70 hover:bg-gray-50"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const slides = [
    {
      img: "/hero-6.jpg",
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
    
    { src: "/9.jpg", caption: "Loading gudang", tag: "Operasional" },
    { src: "/12.jpg", caption: "Trucking kontainer", tag: "Operasional" },
    { src: "/11.jpg", caption: "Dermaga pelabuhan", tag: "Operasional" },
  
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


function BukuTamu() {
  return (
    <section id="buku-tamu" className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border bg-white p-8 md:p-12 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-brand font-semibold">Buku Tamu</p>
            <h3 className="text-2xl md:text-3xl font-bold mt-2">Tinggalkan Pesan & Kebutuhan Anda</h3>
            <p className="mt-3 text-gray-600">Tim kami akan menghubungi Anda untuk estimasi harga dan waktu pengiriman.</p>
            <ul className="mt-4 text-gray-700 space-y-2">
              <li><span className="font-semibold">WhatsApp:</span> {CONTACT.whatsapp}</li>
              <li><span className="font-semibold">Email:</span> {CONTACT.email}</li>
              <li><span className="font-semibold">Alamat:</span> {CONTACT.address}</li>
            </ul>
          </div>
          <form className="space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Terima kasih! (Demo form)')}}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl border px-4 py-3" placeholder="Nama Lengkap" required />
              <input className="w-full rounded-xl border px-4 py-3" placeholder="Perusahaan (opsional)" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl border px-4 py-3" placeholder="Email" type="email" required />
              <input className="w-full rounded-xl border px-4 py-3" placeholder="No. WhatsApp" required />
            </div>
            <select className="w-full rounded-xl border px-4 py-3" required>
              <option value="">Pilih Layanan</option>
              <option>Ekspedisi Cargo (Darat)</option>
              <option>Ekspedisi Cargo (Laut)</option>
              <option>Ekspedisi Cargo (Udara)</option>
              <option>Pengiriman Kendaraan</option>
              <option>Trucking & Kontainer (LCL/FCL)</option>
            </select>
            <textarea className="w-full rounded-xl border px-4 py-3" rows={4} placeholder="Detail kebutuhan: asal, tujuan, jenis barang, estimasi berat/volume" />
            <button type="submit" className="w-full rounded-xl bg-[rgb(var(--brand))] text-white font-semibold py-3 hover:opacity-90">
              Kirim Pesan
            </button>
            <p className="text-xs text-gray-500">*Form ini untuk demo. Integrasi bisa ditambahkan nanti.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-brand font-semibold">Hubungi Kami</p>
            <h3 className="text-xl md:text-2xl font-bold mt-1">Diskusikan kebutuhan pengiriman Anda</h3>
            <p className="text-gray-600 mt-2">Kami siap memberikan solusi terbaik—cepat, aman, dan transparan.</p>
          </div>
          <a href={"https://wa.me/"} className="px-5 py-3 rounded-xl bg-[rgb(var(--brand))] text-white font-semibold hover:opacity-90">Chat WhatsApp</a>
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
              <li><a href="#buku-tamu" className="hover:text-brand">Buku Tamu</a></li>
              <li><a href="#contact" className="hover:text-brand">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Ikuti Kami</p>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li><a href="#" className="hover:text-brand">Instagram</a></li>
              <li><a href="#" className="hover:text-brand">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand">YouTube</a></li>
              <li><a href="#" className="hover:text-brand">Facebook</a></li>
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
      <BukuTamu />
      <ContactCTA />
      <Footer />
    </div>
  )
}
