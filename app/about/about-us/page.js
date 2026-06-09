export default function AboutusPage() {
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
                About Us
              </p>
            </div>
          </a>

         <a
         href="/"
         className="px-6 py-3 border border-[#7c4a5b] text-[#7c4a5b] rounded-full text-sm uppercase tracking-[0.15em]"
         >
          Back Home
        </a>
        </div>
      </header>

      <section className="relative min-h-[78vh] flex items-center overflow-hidden">

        <img
          src="/images/aboutus/our-story-hero.png"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#faf6f2]/95 via-[#faf6f2]/88 to-[#faf6f2]/35"></div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-32 w-full">

          <p className="uppercase tracking-[0.35em] text-sm text-[#7c4a5b] mb-6">
            About Clay Magic House
          </p>

          <h2
            className="text-5xl md:text-7xl leading-[0.95] text-[#57433c] mb-8 max-w-4xl"
            style={{ fontFamily: 'serif' }}
          >
            Every Tiny Creation
            <br />
            Begins With A Story.
          </h2>

          <p className="text-lg md:text-xl leading-[2] text-[#57433c]/75 max-w-2xl mb-6">
            A creative journey that began with a love for clay and grew into a warm, inspiring space where children can explore imagination, creativity and self-expression.
          </p>

        </div>
      </section>

      <section className="py-32 px-6 lg:px-10 bg-white">

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

    <div>

      <p className="uppercase tracking-[0.3em] text-sm text-[#d9a5b3] mb-5">
        Our Story
      </p>

      <h3
        className="text-4xl md:text-5xl text-[#57433c] leading-tight mb-10"
        style={{ fontFamily: 'serif' }}
      >
        Turning Imagination
        <br />
        Into Something Real.
      </h3>

      <div className="space-y-8 text-[#57433c]/72 leading-[2.1] text-lg">

        <p>
          Before discovering clay art, Ms. Manieng never imagined that a simple creative hobby would one day shape the direction of her life.
        </p>

        <p>
          What began as a personal exploration gradually grew into a lifelong passion. Through handcrafted creations, charming characters and story-inspired designs, she discovered a meaningful way to transform imagination into something tangible — warm, playful and full of personality.
        </p>

        <p>
          As her love for clay art continued to grow, so did the desire to share that joy with others.
        </p>

      </div>

    </div>

    <div>
      <div className="overflow-hidden rounded-[2.8rem] shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
        <img
          src="/images/aboutus/our-story.jpg"
          className="w-full h-[420px] md:h-[700px] object-cover"
        />
      </div>
    </div>

  </div>

</section>

<section className="py-28 bg-[#fcf8f5] px-6 lg:px-10 border-y border-[#f1e4e7]">

  <div className="max-w-5xl mx-auto text-center">

    <p className="uppercase tracking-[0.3em] text-sm text-[#d9a5b3] mb-5">
      The Story Behind Clay Magic House
    </p>

    <h3
      className="text-4xl md:text-5xl text-[#57433c] leading-tight mb-12"
      style={{ fontFamily: 'serif' }}
    >
      A Studio Built
      <br />
      For Creativity & Confidence.
    </h3>

    <div className="space-y-8 text-[#57433c]/72 leading-[2.1] text-lg max-w-4xl mx-auto">

      <p>
        Clay Magic House was created as more than just an art studio. It was built as a welcoming creative space where children can explore ideas, express themselves freely and gain confidence through hands-on artistic experiences.
      </p>

      <p>
        Here, every project begins with imagination. Students are encouraged to experiment, tell stories through their creations and discover the satisfaction of bringing their ideas to life.
      </p>

      <p>
        Over the years, Clay Magic House has become a place where creativity, patience and self-expression grow together — one tiny masterpiece at a time.
      </p>

    </div>

  </div>

</section>

<section className="py-32 bg-white px-6 lg:px-10">

  <div className="max-w-5xl mx-auto text-center">

    <p className="uppercase tracking-[0.3em] text-sm text-[#d9a5b3] mb-5">
      Meet The Artist
    </p>

    <h3
      className="text-4xl md:text-5xl text-[#57433c] leading-tight mb-12"
      style={{ fontFamily: 'serif' }}
    >
      The Creative Heart
      <br />
      Behind Clay Magic House
    </h3>

    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

  <div>
    <div className="overflow-hidden rounded-[2.8rem] shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
      <img
        src="/images/manieng\manieng2.png"
        className="w-full h-[450px] md:h-[600px] object-cover"
      />
    </div>
  </div>

  <div className="space-y-8 text-[#57433c]/72 leading-[2.1] text-lg text-left">

    <p>
      Ms. Manieng is the founder and creative heart behind Clay Magic House.
    </p>

    <p>
      Certified by the Taiwan Pan & Paper Clay Art Development Association and trained through the Deco Clay Academy, she has spent years sharing the joy of clay art with children and families.
    </p>

    <p>
      Her evolving artistic style combines creativity, storytelling and handcrafted detail, inspiring students to create with confidence while developing their own unique artistic voices.
    </p>

    <p>
      Today, she continues to explore new ideas and techniques while encouraging every student to discover the magic of making something entirely their own.
    </p>

  </div>

</div>

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