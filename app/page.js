'use client'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useState } from 'react'
import { SiXiaohongshu } from "react-icons/si";
const heroImage = '/images/frontpage/Welcome sign.jpg'
const worksPreviewImage = '/images/frontpage/clay-dessert.jpg'
const classesPreviewImage = '/images/frontpage/kids-clay-class.jpg'
const featuredClassImage = '/images/frontpage/kids-classroom.jpg'

const galleryImages = [
  '/images/frontpage/galleryImages-clay-dessert.jpg',
  '/images/frontpage/galleryImages-clay-flower-basket.jpg',
  '/images/frontpage/galleryImages-clay-house.jpg',
  '/images/frontpage/galleryImages-clay-macarons.jpg',
  '/images/frontpage/galleryImages-clayflower.jpg',
  '/images/frontpage/galleryImages-Home Decor3.jpg',
]

export default function ClayMagicHousePreview() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
return (
    <div className="min-h-screen bg-[#faf6f2] text-[#4d4d4d] overflow-hidden font-sans scroll-smooth relative">

      {/* BACKGROUND DECOR */}
      <div className="absolute top-[8%] right-[-120px] w-[420px] h-[420px] rounded-full bg-[#f3dfe5]/50 blur-3xl"></div>
      <div className="absolute top-[35%] left-[-140px] w-[360px] h-[360px] rounded-full bg-[#f6ebe6]/70 blur-3xl"></div>
      <div className="absolute bottom-[12%] right-[-100px] w-[300px] h-[300px] rounded-full bg-[#ead6dc]/60 blur-3xl"></div>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="h-20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-white/50 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/logo\clay-magic-house-logo.png"
                  alt="Clay Magic House Logo"
                  className="w-full h-full object-cover p-1"
                />
              </div>

              <div>
              <h1 className="text-3xl tracking-wide text-[#7c4a5b]" style={{ fontFamily: 'serif' }}>
                Clay Magic House
              </h1>
              <p className="text-xs tracking-[0.3em] uppercase text-[#7c4a5b]/60 mt-1">
                Art Studio
              </p>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-12 h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 flex items-center justify-center text-[#7c4a5b] shadow-lg"
            >
              <span className="text-2xl leading-none">
                {mobileMenuOpen ? '×' : '☰'}
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.18em]">
              <a className="hover:text-[#7c4a5b] transition cursor-pointer">
                Home
              </a>

              {/* ABOUT DROPDOWN */}
              <a
                href="/about/about-us"
                className="hover:text-[#7c4a5b] transition cursor-pointer"
                >
                ABOUT
               </a>

              {/* WORKS DROPDOWN */}
              <div className="relative group">
                <button className="flex items-center gap-2 hover:text-[#7c4a5b] transition cursor-pointer">
                  GALLERY
                  <span className="text-xs">▾</span>
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 min-w-[240px] overflow-hidden">

                    <a href="/works/clay-gallery" className="block px-6 py-4 hover:bg-[#faf6f2] transition cursor-pointer border-b border-[#f3e7ea]">
                      <div className="text-[#57433c] tracking-[0.12em] text-sm uppercase mb-1">
                        Instructor Gallery
                      </div>
                      <p className="text-xs text-[#57433c]/60 normal-case tracking-normal leading-relaxed">
                        Explore handcrafted clay artworks, miniature worlds and whimsical creations.
                      </p>
                    </a>

                    <a href="/works/student-creations" className="block px-6 py-4 hover:bg-[#faf6f2] transition cursor-pointer">
                      <div className="text-[#57433c] tracking-[0.12em] text-sm uppercase mb-1">
                        Student Art Corner
                      </div>
                      <p className="text-xs text-[#57433c]/60 normal-case tracking-normal leading-relaxed">
                        Handmade creations and imaginative artworks made by students.
                      </p>
                    </a>

                  </div>
                </div>
              </div>

              {/* CLASSES DROPDOWN */}
              <a
                href="/classes/kids-clay-classes"
               className="hover:text-[#7c4a5b] transition cursor-pointer"
              >
              CLASSES
              </a>

              <a
                href="#visit-studio"
                className="hover:text-[#7c4a5b] transition cursor-pointer"
              >
                CONTACT
              </a>
            </nav>
          </div>
        </div>
      {/* MOBILE MENU */}
      <div
    className={`md:hidden fixed top-0 right-0 h-full w-full max-w-[420px] bg-[#faf6f2] z-[60] shadow-[0_20px_80px_rgba(0,0,0,0.18)] transition-all duration-500 ${
    mobileMenuOpen
      ? 'translate-x-0 opacity-100'
      : 'translate-x-full opacity-0 pointer-events-none'
  }`}
>

        <div className="p-6 border-b border-[#ead6dc] flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden bg-white shadow-md">
              <img
                src="/images/logo/clay-magic-house-logo.png"
                className="w-full h-full object-cover p-1"
              />
            </div>

            <div>
              <h2
                className="text-xl text-[#7c4a5b]"
                style={{ fontFamily: 'serif' }}
              >
                Clay Magic House
              </h2>

              <p className="text-[10px] uppercase tracking-[0.28em] text-[#7c4a5b]/60 mt-1">
                Art Studio
              </p>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-2xl text-[#7c4a5b] shadow-md"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-32 px-6 pt-8">

          <div className="space-y-8">

            <a className="block text-[#57433c] text-lg uppercase tracking-[0.18em]">
              Home
            </a>

            <div>
              <a
                 href="/about/about-us"
                className="block text-[#57433c] text-lg uppercase tracking-[0.18em]"
               >
              About
             </a>
             </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7c4a5b]/50 mb-4">
                Works
              </p>

              <div className="space-y-3 pl-1 text-[#57433c]">
                <a href="/works/clay-gallery" className="block text-lg">Clay Gallery</a>
                <a href="/works/student-creations" className="block text-lg">Student Creations</a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#7c4a5b]/50 mb-4">
                Classes
              </p>

              <div className="space-y-3 pl-1 text-[#57433c]">
                <a href="/classes/kids-clay-classes" className="block text-lg">Kids Clay Classes</a>
              </div>
            </div>

            <a
              href="#visit-studio"
              className="block text-[#57433c] text-lg uppercase tracking-[0.18em]"
            >
              Contact
            </a>

          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-[#57433c]/35 z-40"
        />
      )}

      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <img
          src={heroImage}
          className="absolute inset-0 w-full h-full object-cover p-1"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#faf6f2]/95 via-[#faf6f2]/85 to-[#faf6f2]/40"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 w-full">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.4em] text-sm text-[#7c4a5b] mb-6 font-medium">
              Milpitas, California
            </p>

            <h2
              className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-[#57433c] mb-8"
              style={{ fontFamily: 'serif' }}
            >
              Turn Imagination
              <br />
              Into Tiny Magic.
            </h2>

            <p className="text-lg lg:text-xl leading-relaxed text-[#57433c]/75 max-w-xl mb-10 font-light">
              從微縮情景、可愛動物，到充滿故事感的人物創作。
              在 Clay Magic House，每一雙小手都能創造自己的夢幻世界。
            </p>

            <div className="flex flex-wrap gap-5 mb-12">
              <a
                href="#classes-section"
                className="px-8 py-4 bg-[#7c4a5b] text-white uppercase tracking-[0.15em] text-sm shadow-xl hover:opacity-90 transition inline-flex items-center justify-center rounded-full"
              >
                Explore Classes
              </a>

              <a
                href="#gallery-section"
                className="px-8 py-4 border border-[#7c4a5b] text-[#7c4a5b] uppercase tracking-[0.15em] text-sm hover:bg-white/60 transition inline-flex items-center justify-center rounded-full"
              >
                Explore The Collection
              </a>
            </div>

            <div className="backdrop-blur-xl bg-white/70 rounded-3xl p-6 border border-white/40 shadow-2xl max-w-lg">
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="uppercase tracking-[0.2em] text-[#57433c]/50 mb-1">Age</p>
                  <p className="font-medium">6 Years Old And Up Welcome</p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.2em] text-[#57433c]/50 mb-1">Class Size</p>
                  <p className="font-medium">Small Group</p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.2em] text-[#57433c]/50 mb-1">Style</p>
                  <p className="font-medium">Creative & Artistic</p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.2em] text-[#57433c]/50 mb-1">Location</p>
                  <p className="font-medium">Milpitas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-8 px-6 relative overflow-hidden max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-[#d9a5b3] mb-5">
            Our Philosophy
          </p>

          <h3
            className="text-4xl md:text-5xl text-[#57433c] mb-6 leading-tight"
            style={{ fontFamily: 'serif' }}
          >
            Shaping Tiny Worlds
            <br />
            Through Imagination.
          </h3>

          <p className="text-lg text-[#7c4a5b]/70 mb-10 tracking-[0.08em]">
            用雙手，創造屬於孩子的微型世界。
          </p>

          <p className="text-xl leading-[2.2] text-[#57433c]/70 font-light max-w-4xl mx-auto mb-6">
            At Clay Magic House, we believe art is more than technique.
            It is a way for children to express emotions, imagination and stories through their hands.
          </p>

          <p className="text-base leading-[2] text-[#57433c]/55 max-w-3xl mx-auto">
            在 Clay Magic House，我們相信藝術不只是技巧，
            更是孩子表達情感與想像力的方式。
            每一塊黏土、每一個小細節，都是故事的開始,我們希望孩子在這裡更能享受創作過程、建立自信,並在小小的黏土世界裡自由發揮想像力。
                  

          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery-section" className="py-32 bg-white px-6 lg:px-10 relative">

        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#faf6f2] to-white"></div>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#d9a5b3] mb-4">
                Portfolio
              </p>

              <h3
                className="text-4xl md:text-5xl text-[#57433c] leading-tight"
                style={{ fontFamily: 'serif' }}
              >
                The Many Faces of Clay
              </h3>
            </div>

            <p className="max-w-xl text-[#57433c]/70 leading-relaxed">
              以黏土創作出充滿想像力與故事感的角色與作品，
每一件作品都保留著手作的溫度與獨特性。
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="break-inside-avoid overflow-hidden rounded-[2rem] shadow-lg mb-6 group"
              >
                <img
                  src={img}
                  className="w-full object-cover p-1 group-hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES SECTION */}
      <section id="classes-section" className="py-32 bg-[#fcf8f5] px-6 lg:px-10 relative">

        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-[#fcf8f5]"></div>
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-[#d9a5b3] mb-4">
              Featured Class
            </p>

            <h3
              className="text-4xl md:text-5xl text-[#57433c] leading-tight mb-6"
              style={{ fontFamily: 'serif' }}
            >
              Kids Clay Classes
            </h3>

            <div className="max-w-2xl mx-auto">
              <p className="text-[#57433c]/70 leading-relaxed text-lg mb-3">
                A warm and creative clay art experience designed to inspire imagination,
                storytelling and artistic confidence.
              </p>

              <p className="text-sm text-[#57433c]/50 leading-[1.9] tracking-[0.03em]">
                透過充滿想像力與故事感的黏土創作，
                讓孩子在溫暖的藝術空間中建立創造力與自信心。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            <div className="overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <img
                src={featuredClassImage}
                className="w-full h-[420px] md:h-[620px]  p-1 hover:scale-105 transition duration-700"
              />
            </div>

            <div>

              <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-white/60">

                <span className="inline-flex px-5 py-2 rounded-full bg-[#f8f1f3] text-[#7c4a5b] text-xs uppercase tracking-[0.18em] mb-6">
                  Weekly Class
                </span>

                <h4
                  className="text-4xl text-[#57433c] leading-tight mb-6"
                  style={{ fontFamily: 'serif' }}
                >
                  Kids Clay Classes
                </h4>

                <p className="text-[#57433c]/70 leading-[2] mb-8 text-lg">
                  Through storytelling, imagination and hands-on creation,
                  students learn how to sculpt miniature worlds, animals and whimsical characters.
                </p>

                <div className="space-y-5 mb-10 text-[#57433c]/80">

                  <div className="flex items-center gap-4">
                    <span className="text-xl">🎨</span>
                    <span>Creative & Beginner Friendly</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xl">👧</span>
                    <span>6 Years Old And Up</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xl">✨</span>
                    <span>Small Group Learning</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xl">📍</span>
                    <span>Milpitas, California</span>
                  </div>

                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  

                  <a
                 href="/classes/kids-clay-classes"
                 className="px-8 py-4 border border-[#7c4a5b] text-[#7c4a5b] uppercase tracking-[0.15em] text-sm hover:bg-[#faf6f2] transition rounded-full inline-flex items-center justify-center"
>
                Explore Full Class Details
</a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-32 bg-[#6d4d57] text-white px-6 lg:px-10 relative overflow-hidden">

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.3em] text-sm text-white/70 mb-4">
              Why Families Love Us
            </p>

            <h3 className="text-4xl md:text-5xl leading-tight" style={{ fontFamily: 'serif' }}>
              More Than Just A Craft Class
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ['🎨', 'Creative Thinking', '鼓勵孩子透過創作培養觀察力與想像力。'],
              ['✨', 'Small Class Size', '小班教學，讓每位孩子都能獲得細心指導。'],
              ['🧸', 'Beginner Friendly', '適合初學者，輕鬆享受黏土創作樂趣。'],
              ['🎉', 'Enjoy The Fun', '享受黏土創作帶來的快樂與驚喜。']
            ].map(([
              icon,
              title,
              description
            ], idx) => (
              <div
                key={idx}
                className="bg-white/10 rounded-[2rem] p-8 backdrop-blur-md border border-white/10"
              >
                <div className="text-3xl mb-5">{icon}</div>
                <h4 className="text-xl font-medium mb-4">{title}</h4>
                <p className="text-white/70 leading-relaxed text-sm">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT US SECTION */}
      <section id="visit-studio" className="py-32 bg-[#f8f1f3] px-6 lg:px-10 relative">

        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#6d4d57] to-[#f8f1f3]"></div>
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT INFO */}
            <div>

              <p className="uppercase tracking-[0.35em] text-sm text-[#7c4a5b]/70 mb-5">
                Visit The Studio
              </p>

              <h3
                className="text-4xl md:text-5xl text-[#57433c] leading-tight mb-8"
                style={{ fontFamily: 'serif' }}
              >
                A Cozy Creative Space
                <br />
                In Milpitas
              </h3>

              <p className="text-lg leading-[2] text-[#57433c]/70 mb-10 max-w-xl">
                Clay Magic House is a warm and welcoming clay art studio
                designed for creativity, imagination and artistic exploration.
                
                Small group learning allows every child to enjoy a calm,
                inspiring and hands-on creative experience.
              </p>

              <div className="space-y-6 text-[#57433c]/80">

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <p className="uppercase tracking-[0.15em] text-xs text-[#7c4a5b]/60 mb-1">
                      Location
                    </p>
                    <p>322 S Abel St, Milpitas, CA 95035</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <p className="uppercase tracking-[0.15em] text-xs text-[#7c4a5b]/60 mb-1">
                      Contact
                    </p>
                    <p>Claymagichouse@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <p className="uppercase tracking-[0.15em] text-xs text-[#7c4a5b]/60 mb-1">
                      Telephone
                    </p>
                    <p>(408) 930-6246</p>
                  </div>
                </div>

              </div>

              

            </div>


            {/* MAP CARD */}
            <div>

              <div className="bg-white rounded-[2.5rem] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/60 overflow-hidden">

                <div className="rounded-[2rem] overflow-hidden h-[320px] md:h-[520px] bg-[#e9dfe2] relative">

                  <iframe
                    title="Clay Magic House Location"
                    src="https://maps.google.com/maps?q=322%20S%20Abel%20St%2C%20Milpitas%2C%20CA%2095035&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#4f3941] text-white py-14 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">

          <h4
            className="text-3xl mb-5"
            style={{ fontFamily: 'serif' }}
          >
            Clay Magic House
          </h4>

          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed mb-8">
            Where imagination becomes tiny magic.
          </p>

          <div className="flex justify-center gap-6 text-xs uppercase tracking-[0.18em] mb-10 text-white/70 flex-wrap">
            <a
              href="https://www.facebook.com/claymagichouse/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d9a5b3] transition cursor-pointer flex items-center gap-2"
            >
              <FaFacebookF className="w-5 h-5" />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/claymagichouse/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d9a5b3] transition cursor-pointer flex items-center gap-2"
            >
              <FaInstagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>

            <a 
            href="https://xhslink.com/m/3m4c87giD4t/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d9a5b3] transition cursor-pointer flex items-center gap-2">
              <SiXiaohongshu className="w-9 h-9" />
              <span>Xiaohongshu</span>
            </a>
          </div>

          <div className="border-t border-white/10 pt-6 max-w-lg mx-auto">
            <p className="text-sm text-white/40 tracking-[0.15em] uppercase">
              © 2026 Clay Magic House. All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>
    </div>
  )
}
