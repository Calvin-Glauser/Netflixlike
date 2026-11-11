function App() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#101010]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_36%,rgba(190,25,25,0.2),transparent_42%)]" />
      <header className="relative flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-10 lg:px-16">
        <a className="text-xl font-black tracking-[0.12em] text-red-600" href="/">
          SCREENROOM
        </a>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
          A world of stories
        </span>
      </header>

      <section className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-20 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
            Your next movie night
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Find a story worth staying in for.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/60 sm:text-lg">
            A fresh screen for the films and series you love. The opening credits
            start here.
          </p>
          <div className="mt-10 flex items-center gap-3 text-sm text-white/45">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>React and Tailwind are ready</span>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 px-6 py-5 text-xs text-white/35 sm:px-10 lg:px-16">
        SCREENROOM <span className="px-2">/</span> 2026
      </footer>
    </main>
  )
}

export default App
