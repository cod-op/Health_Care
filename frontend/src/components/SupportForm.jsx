import { useState } from "react";
import axios from "axios";

function SupportForm({ onAnalysis }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    supportType: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {

    setForm({
      ...form,
      [event.target.name]: event.target.value
    });

  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      const response = await axios.post(
        "https://health-care-evnw.onrender.com/api/support/analyze",
        form
      );

      console.log("API Response:", response.data);

    
      const resultData = response.data;

      onAnalysis({
        ...resultData,
        name: form.name,
        supportType: form.supportType
      });

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        supportType: "",
        message: ""
      });

      setTimeout(() => {
        document
          .getElementById("summary")
          ?.scrollIntoView({
            behavior: "smooth"
          });
      }, 200);

    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.error ||
        "Unable to process your request. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="support"
      className="bg-[#f7faf9] px-5 py-20 md:py-24"
    >

      <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[.7fr_1.3fr] md:gap-16">

   

        <div className="pt-3">

          <span className="text-[11px] font-bold tracking-[2px] text-teal-700">
            REQUEST SUPPORT
          </span>

          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-slate-800">
            Tell us how we can help.
          </h2>

          <p className="mt-5 text-sm leading-8 text-slate-500">
            Complete the form below. Your information
            helps the NGO team understand what kind
            of support may be needed.
          </p>

          <div className="mt-8 flex gap-3 rounded-xl border border-slate-200 bg-white p-5">

            <span className="text-xl">
              🔒
            </span>

            <div>

              <strong className="text-sm text-slate-700">
                Your information matters
              </strong>

              <p className="mt-1 text-[11px] leading-5 text-slate-400">
                This educational prototype does not
                permanently store your information.
              </p>

            </div>

          </div>

        </div>

        {/* Form */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 md:p-9">

          {submitted && (
            <div className="mb-5 rounded-lg border border-green-200 bg-green-50 p-3 text-xs font-medium text-green-700">
              ✓ Request submitted and reviewed successfully.
            </div>
          )}

          {error && (
            <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-3 text-xs font-medium text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Full name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Email address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-50"
                />
              </div>

            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Phone number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Support needed
                </label>

                <select
                  name="supportType"
                  value={form.supportType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-50"
                >

                  <option value="">
                    Select support type
                  </option>

                  <option>
                    Medical Assistance
                  </option>

                  <option>
                    Medicine Support
                  </option>

                  <option>
                    Transport Assistance
                  </option>

                  <option>
                    Elderly Care
                  </option>

                  <option>
                    General Help
                  </option>

                </select>
              </div>

            </div>

            <div className="mt-5">

              <label className="mb-2 block text-xs font-semibold text-slate-600">
                Tell us about your requirement
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Briefly describe the support you need..."
                rows="6"
                required
                className="w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-50"
              />

            </div>

            <div className="mt-2 flex flex-col gap-5 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">

              <p className="max-w-xs text-[10px] leading-5 text-slate-400">
                Please don't share passwords, payment details,
                or highly sensitive information.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Reviewing request..."
                  : "Submit support request →"
                }
              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
}

export default SupportForm;

