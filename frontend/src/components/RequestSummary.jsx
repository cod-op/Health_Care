function RequestSummary({ data }) {
  const actualData = data?.data || data;

  const {
    name = "Unknown",
    supportType = "General Help",
    summary = "No summary provided.",
    priority = "Medium",
    suggestedAction = "No action specified."
  } = actualData || {};

  const normalizedPriority = priority?.toLowerCase() || "medium";

  const priorityStyles = {
    high: "bg-red-50 text-red-700 border-red-100",
    medium: "bg-amber-50 text-amber-700 border-amber-100",
    low: "bg-green-50 text-green-700 border-green-100"
  };

  return (
    <section id="summary" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-3xl">

        <div className="mb-8">
          <span className="text-[11px] font-bold tracking-[2px] text-teal-700">
            REQUEST REVIEW
          </span>

          <h2 className="mt-3 font-serif text-4xl font-bold text-slate-800">
            Your request has been reviewed.
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            An AI-assisted summary has been created to help the support team
            understand the request.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 md:p-8">

          <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
            <div>
              <span className="text-[10px] font-semibold tracking-widest text-slate-400">
                REQUEST FOR
              </span>

              <h3 className="mt-1 text-xl font-bold text-slate-800">
                {name}
              </h3>
            </div>

            <span
              className={`w-fit rounded-full border px-3 py-1.5 text-xs font-semibold ${
                priorityStyles[normalizedPriority] ||
                priorityStyles.medium
              }`}
            >
              {priority} Priority
            </span>
          </div>

          <div className="grid gap-6 border-b border-slate-100 py-6 sm:grid-cols-2">

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Support type
              </span>

              <p className="mt-2 text-sm font-semibold text-slate-700">
                {supportType}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Suggested action
              </span>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {suggestedAction}
              </p>
            </div>

          </div>

          <div className="pt-6">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Request summary
            </span>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              {summary}
            </p>
          </div>

          <div className="mt-6 border-t border-slate-100 pt-5 text-[10px] text-slate-400">
            <span className="mr-2 text-teal-600">✦</span>
            AI-assisted support request summary
          </div>

        </div>
      </div>
    </section>
  );
}

export default RequestSummary;