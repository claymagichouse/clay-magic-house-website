const galleryImages = [
  '/images/gallery/clay-gallery-cake-2.jpg',
  '/images/gallery/clay-gallery-cake.jpg',
  '/images/gallery/clay-gallery-dessert-tower.jpg',
  '/images/gallery/clay-gallery-flower.jpg',
  '/images/gallery/clay-gallery-flowerpot.jpg',
  '/images/gallery/clay-gallery-handmake.jpg',
  '/images/gallery/clay-gallery-Tomato-Plants.jpg',
  '/images/gallery/clay-gallery-victorian style clock 2.jpg',
  '/images/gallery/clay-gallery-fish.jpg',
  '/images/gallery/clay-gallery-doll.jpg',
  '/images/gallery/clay-gallery-lilypot.jpg',
  '/images/gallery/clay-gallery-flowerbouest-2.jpg'
  
  
]

export default function ClayGalleryPage() {
  return (
    <div className="min-h-screen bg-[#faf6f2] text-[#4d4d4d] font-sans">

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

          <a href="/" className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl overflow-hidden bg-white shadow-md">
              <img
                src="/images/logo/clay-magic-house-logo.png"
                className="w-full h-full object-contain p-1"
              />
            </div>

            <div>
              <h1
                className="text-2xl text-[#7c4a5b]"
                style={{ fontFamily: 'serif' }}
              >
                Clay Magic House
              </h1>

              <p className="text-[10px] uppercase tracking-[0.28em] text-[#7c4a5b]/60 mt-1">
                Clay Gallery
              </p>
            </div>
          </a>

          <a
            href="/"
            className="px-6 py-3 border border-[#7c4a5b] text-[#7c4a5b] rounded-full text-sm uppercase tracking-[0.15em] hover:bg-white transition"
          >
            Back Home
          </a>

        </div>
      </header>

      <section className="py-28 px-6 lg:px-10 text-center">

        <div className="max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-sm text-[#d9a5b3] mb-6">
            Clay Art Portfolio
          </p>

          <h2
            className="text-5xl md:text-7xl text-[#57433c] leading-tight mb-8"
            style={{ fontFamily: 'serif' }}
          >
            Clay Handmade Worlds
          </h2>

          <p className="text-lg leading-[2] text-[#57433c]/70 max-w-2xl mx-auto">
            Explore handcrafted clay artworks filled with creativity, storytelling and artistic expression.
          </p>

        </div>

      </section>

      <section className="pb-32 px-6 lg:px-10">

        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="break-inside-avoid overflow-hidden rounded-[2rem] shadow-lg mb-6 group bg-white"
            >
              <img
                src={img}
                className="w-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
          ))}

        </div>

      </section>

      <footer className="bg-[#4f3941] text-white py-14 px-6 text-center">

        <h4
          className="text-3xl mb-4"
          style={{ fontFamily: 'serif' }}
        >
          Clay Magic House
        </h4>

        <p className="text-white/60 max-w-xl mx-auto leading-relaxed mb-8">
          Every handmade creation begins with imagination and warmth.
        </p>

        <a
          href="/"
          className="inline-flex px-8 py-4 bg-white text-[#7c4a5b] rounded-full uppercase tracking-[0.15em] text-sm hover:opacity-90 transition"
        >
          Return Home
        </a>

      </footer>

    </div>
  )
}