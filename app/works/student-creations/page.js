const studentImages = [
  '/images/studentworks/student-artworks-totrotro.jpg',
  '/images/studentworks/student-artworks-sunny.jpg',
  '/images/studentworks/student-artworks-suclltent.jpg',
  '/images/studentworks/student-artworks-smallcake.jpg',
  '/images/studentworks/student-artworks-pokemom.jpg',
  '/images/studentworks/student-artworks-oliver.jpg',
  '/images/studentworks/student-artworks-mushuro.jpg',
  '/images/studentworks/student-artworks-mirror.jpg',
  '/images/studentworks/student-artworks-hangflower.jpg',
  '/images/studentworks/student-artworks-flowerpot.jpg',
  '/images/studentworks/student-artworks-flowerframe.jpg',
  '/images/studentworks/student-artworks-duck.jpg'
]

export default function StudentCreationsPage() {
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
                Student Creations
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
            Student Artworks
          </p>

          <h2
            className="text-5xl md:text-7xl text-[#57433c] leading-tight mb-8"
            style={{ fontFamily: 'serif' }}
          >
            Creative Creations
            <br />
            Made With Imagination.
          </h2>

          <p className="text-lg leading-[2] text-[#57433c]/70 max-w-2xl mx-auto">
            Discover creative clay artworks handcrafted by students
            through storytelling, imagination and playful creativity.
            <br></br>
            透過豐富想像力與創意巧思，每件作品都展現孩子獨特的故事與藝術表達。從可愛角色到迷你場景，每一份創作都充滿童真與無限可能。
          </p>

        </div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#d9a5b3] mt-12 mb-8">
           Gallery of Student Creations
        </p>
      </section>

      <section className="pb-32 px-6 lg:px-10">

        <div className="max-w-7xl mx-auto columns-2 lg:columns-3 gap-6">

          {studentImages.map((img, idx) => (
            <div
              key={idx}
              className="break-inside-avoid overflow-hidden rounded-[2rem] shadow-lg mb-6 bg-white group"
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
          Celebrating creativity, imagination and every tiny handmade story.
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