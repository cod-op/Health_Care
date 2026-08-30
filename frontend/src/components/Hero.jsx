function Hero() {

  const goToForm = () => {
    document
      .getElementById("support")
      ?.scrollIntoView({
        behavior: "smooth"
      });
  };

  return (
    <section
      id="home"
      className="mx-auto grid min-h-[600px] max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.2fr_.8fr] md:gap-20"
    >

      {/* Left */}

      <div>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-2 text-xs font-semibold text-teal-700">

          <span className="h-2 w-2 rounded-full bg-teal-500"></span>

          Community healthcare support

        </div>

        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-slate-800 md:text-6xl">

          Healthcare support,

          <br />

          <span className="text-teal-700">
            when you need it.
          </span>

        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 md:text-lg">

          CareConnect helps people connect with healthcare
          assistance and NGO volunteers through a simple
          support request.

        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <button
            onClick={goToForm}
            className="flex items-center justify-center gap-4 rounded-lg bg-teal-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Request healthcare support
            <span>→</span>
          </button>

          <a
            href="#how-it-works"
            className="rounded-lg border border-slate-200 bg-white px-5 py-3.5 text-center text-sm font-medium text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
          >
            Learn how it works
          </a>

        </div>

        <p className="mt-6 text-xs text-slate-400">
          <span className="font-bold text-teal-600">✓</span>
          {" "}Simple • Confidential • Community focused
        </p>

      </div>

      {/* Right card */}

      <div className="relative overflow-hidden rounded-3xl bg-teal-50 p-9 md:min-h-[360px]">

        <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-teal-100"></div>

        <div className="relative">

          <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl text-teal-700 shadow-sm">
            ♡
          </div>

          <h2 className="font-serif text-3xl font-bold text-slate-800">
            Here to help
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
            Tell us what kind of support you need.
            Your request can then be reviewed by
            the NGO support team.
          </p>

          <div className="mt-8 flex gap-12 border-t border-teal-100 pt-6">

            <div>
              <strong className="block text-lg text-teal-700">
                24/7
              </strong>

              <span className="text-[11px] text-slate-500">
                Request access
              </span>
            </div>

            <div>
              <strong className="block text-lg text-teal-700">
                NGO
              </strong>

              <span className="text-[11px] text-slate-500">
                Community support
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;