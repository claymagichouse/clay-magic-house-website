const featuredClassImage = '/images/kidsclass/kids-clay-class.jpg'

export default function KidsClayClassesPage() {
  return (
    <div className="min-h-screen bg-[#faf6f2] text-[#4d4d4d] font-sans">

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

          <a href="/" className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl overflow-hidden bg-white shadow-md">
              <img src="/images/logo/clay-magic-house-logo.png" className="w-full h-full object-cover" />
            </div>

            <div>
              <h1 className="text-2xl text-[#7c4a5b]" style={{ fontFamily: 'serif' }}>
                Clay Magic House
              </h1>

              <p className="text-[10px] uppercase tracking-[0.28em] text-[#7c4a5b]/60 mt-1">
                Kids Clay Classes
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

      {/* HERO */}
      <section className="relative min-h-[78vh] flex items-center overflow-hidden">

        <img
          src={featuredClassImage}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#faf6f2]/95 via-[#faf6f2]/88 to-[#faf6f2]/40"></div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-32 w-full">

          <p className="uppercase tracking-[0.35em] text-sm text-[#7c4a5b] mb-6">
            Weekly Creative Class
          </p>

          <h2
            className="text-5xl md:text-7xl leading-[0.95] text-[#57433c] mb-8 max-w-4xl"
            style={{ fontFamily: 'serif' }}
          >
            Kids Clay Classes
            
          </h2>

          <p className="text-lg md:text-xl leading-[2] text-[#57433c]/75 max-w-2xl mb-6">
            A warm and creative clay art experience designed for children to explore imagination, storytelling and hands-on creativity.
          </p>

          <p className="text-sm md:text-base tracking-[0.04em] leading-[2] text-[#57433c]/55 max-w-xl">
            透過充滿想像力與故事感的黏土創作，
            讓孩子感受及表達創意盡情享受手作樂趣。
          </p>

        </div>
      </section>

      {/* CLASS EXPERIENCE */}
      <section className="py-28 px-6 lg:px-10 bg-white">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-sm text-[#d9a5b3] mb-5">
            Class Experience
          </p>

          <h3
            className="text-4xl md:text-5xl text-[#57433c] leading-tight mb-10"
            style={{ fontFamily: 'serif' }}
          >
            Learn Through
            <br />
            Creativity & Imagination.
          </h3>

          <p className="text-xl leading-[2.1] text-[#57433c]/72 max-w-3xl mx-auto mb-6">
            We offer kids clay art classes at both the studio and schools, designed to inspire creativity, storytelling and hands-on artistic exploration.
          </p>

          <p className="text-base leading-[2] text-[#57433c]/55 max-w-2xl mx-auto mb-16">
            透過充滿想像力與故事感的黏土創作，
            孩子們在老師耐心引導下，享受手作樂趣與藝術探索的過程。。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

            {[
              ['✨', 'Develop patience and concentration'],
              ['🖐️', 'Improve eye-hand coordination'],
              ['🎨', 'Enhance creativity and imagination'],
              ['🎉', 'Have lots of FUN']
            ].map(([icon, text], idx) => (
              <div
                key={idx}
                className="bg-[#faf6f2] rounded-[2rem] p-7 flex items-center gap-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="text-3xl">{icon}</div>

                <p className="text-[#57433c]/75 text-lg leading-relaxed">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* STUDIO CLASS SCHEDULE */}
      <section className="py-28 bg-[#f8f1f3] px-6 lg:px-10 border-y border-[#f1e4e7]">

        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
        <div>
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.3em] text-sm text-[#d9a5b3] mb-5">
              Class Schedule
            </p>
           </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

            <div className="grid grid-cols-2 bg-[#6d4d57] text-white uppercase tracking-[0.15em] text-sm">
              <div className="px-6 py-5">Day</div>
              <div className="px-6 py-5">Time</div>
              
              
               </div>

            {[
              ['Tuesday', '4:30 PM – 6:00 PM'],
              ['Wednesday', '5:00 PM – 6:30 PM'],
              ['Friday', '4:30 PM – 6:00 PM'],
              ['', '7:30 PM – 9:00 PM'],
              ['Saturday', '10:00 AM – 11:30 AM'],
              ['', '1:00 PM – 2:30 PM'],
              ['', '3:00 PM – 4:30 PM'],
              ['', '5:00 PM – 6:30 PM']
            ].map(([day, time], idx) => (
              <div
                key={idx}
                className="grid grid-cols-2 border-t border-[#f3e7ea] text-[#57433c]"
              >
                <div className="px-6 py-6 font-medium">{day}</div>
                <div className="px-6 py-6">{time}</div>
                
            </div>
            ))}

          </div>

          <div className="text-center mt-8 mb-20">
          </div>
            
          </div>

          {/* SCHOOL SCHEDULE */}
          <div>
          <div className="text-center mb-12">

            <p className="uppercase tracking-[0.3em] text-sm text-[#d9a5b3] mb-5">
              School Programs
            </p>
           </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

            <div className="grid grid-cols-3 bg-[#6d4d57] text-white uppercase tracking-[0.15em] text-sm">
              <div className="px-6 py-5">School</div>
              <div className="px-6 py-5">Day</div>
              <div className="px-6 py-5">Time</div>
            </div>

            {[
              ['360 Academy Education', 'Tuesday', '3:00 PM – 4:00 PM'],
              ['Enlighten Chinese School', 'Wednesday', '2:00 PM – 3:00 PM'],
              ['Sunshine Pre-School (Sierra Rd)', 'Wednesday', '3:45 PM – 4:30 PM'],
              ['Sunshine After School (Turlock Ln)', 'Thursday', '2:30 PM – 3:30 PM'],
              ['Sunshine After School (Turlock Ln)', 'Thursday', '3:30 PM – 4:30 PM'],
              ['Loving Tree Academy (Milpitas)', 'Thursday', '5:30 PM – 6:30 PM']
            ].map(([school, day, time], idx) => (
              <div
                key={idx}
                className="grid grid-cols-3 border-t border-[#f3e7ea] text-[#57433c]"
              >
                <div className="px-6 py-6 font-medium leading-relaxed">
                  {school}
                </div>

                <div className="px-6 py-6">
                  {day}
                </div>

                <div className="px-6 py-6">
                  {time}
                </div>

              </div>
            ))}

          </div>

        </div>
        </div>
      </section>

      <footer className="bg-[#4f3941] text-white py-14 px-6 text-center">

        <h4 className="text-3xl mb-4" style={{ fontFamily: 'serif' }}>
          Clay Magic House
        </h4>

        <p className="text-white/60 max-w-xl mx-auto leading-relaxed mb-8">
          Where imagination becomes tiny magic.
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