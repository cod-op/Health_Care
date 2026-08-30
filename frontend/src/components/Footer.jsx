function Footer() {

  return (
    <footer className="bg-[#173b3a] px-5 py-12 text-white">

      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 md:flex-row">

        <div>

          <div className="flex items-center gap-2 text-lg font-bold">

            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-600">
              +
            </span>

            CareConnect

          </div>

          <p className="mt-3 max-w-sm text-xs leading-6 text-slate-300">
            A concept-level healthcare support platform
            designed for community and NGO assistance.
          </p>

        </div>

        <div className="max-w-xs">

          <strong className="text-xs">
            Important
          </strong>

          <p className="mt-3 text-xs leading-6 text-slate-300">
            This is an educational prototype. It does not
            provide medical diagnosis or emergency medical
            services.
          </p>

        </div>

      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-slate-600 pt-5 text-[10px] text-slate-400">
        © 2026 CareConnect. Healthcare support prototype.
      </div>


    </footer>
  );
}

export default Footer;