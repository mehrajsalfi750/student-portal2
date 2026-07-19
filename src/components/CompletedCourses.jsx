function CompletedCourses({ student }) {
  const completedCredits = student.completedCourses.reduce(
    (total, course) => total + course.credit,
    0
  );

  const averageGradePoint =
    student.completedCourses.length > 0
      ? student.completedCourses.reduce(
          (total, course) => total + course.gradePoint,
          0
        ) / student.completedCourses.length
      : 0;

  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-900 text-white shadow-xl">
        <div className="flex flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Academic Record
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Completed Courses
            </h1>

            <p className="mt-3 text-blue-200">
              Official academic course summary
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <p className="text-sm text-blue-200">
                Courses
              </p>

              <p className="mt-2 text-3xl font-bold">
                {student.completedCourses.length}
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <p className="text-sm text-blue-200">
                Credits
              </p>

              <p className="mt-2 text-3xl font-bold">
                {completedCredits}
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <p className="text-sm text-blue-200">
                CGPA
              </p>

              <p className="mt-2 text-3xl font-bold">
                {student.cgpa}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Completed Courses
          </p>

          <p className="mt-3 text-4xl font-bold text-blue-950">
            {student.completedCourses.length}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Completed Credits
          </p>

          <p className="mt-3 text-4xl font-bold text-violet-700">
            {completedCredits}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Course Average
          </p>

          <p className="mt-3 text-4xl font-bold text-amber-700">
            {averageGradePoint.toFixed(2)}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Academic Status
          </p>

          <p className="mt-3 text-xl font-bold text-emerald-600">
            {student.academicStatus}
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Transcript
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Completed Course Results
            </h2>

            <p className="mt-2 text-slate-500">
              Academic record for {student.name}
            </p>
          </div>

          <span className="w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            {student.status}
          </span>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wider text-slate-500">
                <th className="px-4 py-4">Course Code</th>
                <th className="px-4 py-4">Course Name</th>
                <th className="px-4 py-4 text-center">Credit</th>
                <th className="px-4 py-4 text-center">Grade Point</th>
                <th className="px-4 py-4 text-center">Result</th>
              </tr>
            </thead>

            <tbody>
              {student.completedCourses.map((course) => (
                <tr
                  key={course.code}
                  className="border-b border-slate-100 transition hover:bg-slate-50"
                >
                  <td className="px-4 py-5 font-bold text-blue-950">
                    {course.code}
                  </td>

                  <td className="px-4 py-5 font-medium text-slate-800">
                    {course.name}
                  </td>

                  <td className="px-4 py-5 text-center">
                    <span className="rounded-lg bg-slate-100 px-3 py-2 font-semibold text-slate-700">
                      {course.credit}
                    </span>
                  </td>

                  <td className="px-4 py-5 text-center">
                    <span className="rounded-lg bg-blue-100 px-3 py-2 font-bold text-blue-800">
                      {course.gradePoint.toFixed(2)}
                    </span>
                  </td>

                  <td className="px-4 py-5 text-center">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Passed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Academic Summary
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Performance Overview
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Current CGPA
              </p>

              <p className="mt-2 text-3xl font-bold text-blue-950">
                {student.cgpa}
              </p>
            </div>

            <div className="rounded-2xl bg-violet-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Overall Average
              </p>

              <p className="mt-2 text-3xl font-bold text-violet-700">
                {student.completedCourseAverage}
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Academic Standing
              </p>

              <p className="mt-2 text-xl font-bold text-emerald-700">
                {student.academicStatus}
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Record Status
              </p>

              <p className="mt-2 text-xl font-bold text-amber-700">
                {student.status}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-blue-950 p-6 text-white shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
            Student Record
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            {student.name}
          </h2>

          <div className="mt-6 space-y-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-blue-300">
                Student ID
              </p>

              <p className="mt-1 font-semibold">
                {student.id}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-blue-300">
                Program
              </p>

              <p className="mt-1 font-semibold">
                {student.program}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-blue-300">
                Session
              </p>

              <p className="mt-1 font-semibold">
                {student.session}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-blue-300">
                Department
              </p>

              <p className="mt-1 font-semibold">
                {student.department}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompletedCourses;