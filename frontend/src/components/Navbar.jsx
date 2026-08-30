function Navbar() {

  const scrollToSupport = () => {
    document
      .getElementById("support")
      ?.scrollIntoView({
        behavior: "smooth"
      });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">

      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5">

     
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-2xl font-semibold text-white">
            +
          </div>

          <div>
            <h2 className="text-[18px] font-bold leading-5 text-slate-800">
              CareConnect
            </h2>

            <p className="text-[10px] text-slate-400">
              Healthcare Support
            </p>
          </div>

        </div>

   

        <div className="hidden items-center gap-8 text-sm text-slate-500 md:flex">

          <a
            href="#home"
            className="transition hover:text-teal-700"
          >
            Home
          </a>

          <a
            href="#how-it-works"
            className="transition hover:text-teal-700"
          >
            How it works
          </a>

          <a
            href="#support"
            className="transition hover:text-teal-700"
          >
            Get support
          </a>

        </div>

        <button
          onClick={scrollToSupport}
          className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-700"
        >
          Request Help
        </button>

      </div>

    </nav>
  );
}

export default Navbar;