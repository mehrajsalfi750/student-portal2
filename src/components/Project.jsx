function Project({ student }) {
  const progress =
    (student.project.marks / student.project.totalMarks) * 100;

  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-950 via-blue-900 to-cyan-800 text-white shadow-xl">
        <div className="flex flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Final Year Project
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Project Details
            </h1>

            <p className="mt-3 text-blue-200">
              {student.project.title}
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <p className="text-sm text-blue-200">
              Current Marks
            </p>

            <p className="mt-2 text-4xl font-bold">
              {student.project.marks}/{student.project.totalMarks}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Project Information
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {student.project.title}
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Student
              </p>

              <p className="mt-2 font-bold text-slate-900">
                {student.name}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Student ID
              </p>

              <p className="mt-2 font-bold text-slate-900">
                {student.id}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Program
              </p>

              <p className="mt-2 font-bold text-slate-900">
                {student.program}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Department
              </p>

              <p className="mt-2 font-bold text-slate-900">
                {student.department}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between">
              <span className="font-semibold text-slate-700">
                Project Progress
              </span>

              <span className="font-bold text-blue-900">
                {progress.toFixed(0)}%
              </span>
            </div>

            <div className="mt-3 h-4 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-blue-700"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl bg-emerald-50 p-6">
            <p className="text-sm text-slate-500">
              Status
            </p>

            <p className="mt-3 text-2xl font-bold text-emerald-700">
              {student.project.status}
            </p>
          </div>

          <div className="rounded-3xl bg-blue-50 p-6">
            <p className="text-sm text-slate-500">
              Marks Obtained
            </p>

            <p className="mt-3 text-4xl font-bold text-blue-900">
              {student.project.marks}
            </p>
          </div>

          <div className="rounded-3xl bg-violet-50 p-6">
            <p className="text-sm text-slate-500">
              Total Marks
            </p>

            <p className="mt-3 text-4xl font-bold text-violet-700">
              {student.project.totalMarks}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;