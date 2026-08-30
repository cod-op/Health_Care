function HowItWorks() {

  const steps = [
    {
      number: "01",
      title: "Tell us what you need",
      text: "Fill out a short support request with your basic details and requirements."
    },
    {
      number: "02",
      title: "Request is reviewed",
      text: "The system creates a short summary to help the support team understand the request."
    },
    {
      number: "03",
      title: "Get connected",
      text: "The NGO team can contact you and guide you toward suitable support."
    }
  ];

  return (
    <section
      id="how-it-works"
      className="bg-white px-5 py-20 md:py-24"
    >

      <div className="mx-auto max-w-2xl text-center">

        <span className="text-[11px] font-bold tracking-[2px] text-teal-700">
          HOW IT WORKS
        </span>

        <h2 className="mt-3 font-serif text-4xl font-bold text-slate-800">
          Getting support is simple.
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-500">
          We keep the process straightforward so people
          can focus on getting the help they need.
        </p>

      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">

        {steps.map((step) => (

          <div
            key={step.number}
            className="rounded-xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >

            <span className="text-xs font-bold text-teal-600">
              {step.number}
            </span>

            <h3 className="mt-6 text-lg font-bold text-slate-800">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {step.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default HowItWorks;