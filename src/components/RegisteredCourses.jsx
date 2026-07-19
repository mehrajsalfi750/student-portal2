function RegisteredCourses({ student }) {
  const totalCredits = student.registeredCourses.reduce(
    (total, course) => total + course.credit,
    0
  );

  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-blue-900 to-blue-950 text-white shadow-xl">
        <div className="flex flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Current Semester
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Registered Courses
            </h1>

            <p className="mt-3 text-blue-200">
              {student.session}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <p className="text-sm text-blue-200">
                Registered Courses
              </p>

              <p className="mt-2 text-3xl font-bold">
                {student.registeredCourses.length}
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <p className="text-sm text-blue-200">
                Total Credits
              </p>

              <p className="mt-2 text-3xl font-bold">
                {totalCredits}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Course Registration
            </h2>

            <p className="mt-2 text-slate-500">
              Your registered courses for this semester.
            </p>
          </div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {totalCredits} Credits
          </span>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wider text-slate-500">
                <th className="px-4 py-4">Code</th>
                <th className="px-4 py-4">Course Name</th>
                <th className="px-4 py-4">Section</th>
                <th className="px-4 py-4">Room</th>
                <th className="px-4 py-4">Schedule</th>
                <th className="px-4 py-4 text-center">Credit</th>
              </tr>
            </thead>

            <tbody>
              {student.registeredCourses.map((course) => (
                <tr
                  key={course.code}
                  className="border-b border-slate-100 transition hover:bg-slate-50"
                >
                  <td className="px-4 py-5 font-bold text-blue-950">
                    {course.code}
                  </td>

                  <td className="px-4 py-5">
                    <div className="font-semibold text-slate-800">
                      {course.name}
                    </div>
                  </td>

                  <td className="px-4 py-5">
                    <span className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-semibold">
                      {course.section}
                    </span>
                  </td>

                  <td className="px-4 py-5">
                    {course.room}
                  </td>

                  <td className="px-4 py-5">
                    {course.time}
                  </td>

                  <td className="px-4 py-5 text-center">
                    <span className="rounded-lg bg-blue-100 px-3 py-2 font-bold text-blue-800">
                      {course.credit}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-3xl bg-blue-50 p-6">
          <p className="text-sm text-slate-500">
            Registered Courses
          </p>

          <p className="mt-2 text-4xl font-bold text-blue-950">
            {student.registeredCourses.length}
          </p>
        </div>

        <div className="rounded-3xl bg-emerald-50 p-6">
          <p className="text-sm text-slate-500">
            Total Credits
          </p>

          <p className="mt-2 text-4xl font-bold text-emerald-700">
            {totalCredits}
          </p>
        </div>

        <div className="rounded-3xl bg-violet-50 p-6">
          <p className="text-sm text-slate-500">
            Session
          </p>

          <p className="mt-2 text-2xl font-bold text-violet-700">
            {student.session}
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisteredCourses;