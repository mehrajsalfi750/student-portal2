function Dashboard({ student }) {
  const totalRegisteredCredits = student.registeredCourses.reduce(
    (total, course) => total + course.credit,
    0
  );

  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900 text-white shadow-xl">
        <div className="flex flex-col gap-8 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src={student.photo}
              alt={student.name}
              className="h-28 w-28 rounded-3xl border-4 border-white/20 object-cover shadow-xl"
            />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                Welcome Back
              </p>

              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                {student.name}
              </h1>

              <p className="mt-3 text-blue-100">
                Student ID: {student.id}
              </p>

              <p className="mt-1 text-sm text-blue-200">
                {student.program} · {student.session}
              </p>
            </div>
          </div>

          <div className="w-full rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur lg:max-w-sm">
            <p className="text-sm font-medium text-blue-200">
              Academic Status
            </p>

            <div className="mt-3 flex items-center justify-between gap-4">
              <div>
                <p className="text-2xl font-bold">
                  {student.academicStatus}
                </p>

                <p className="mt-1 text-sm text-blue-200">
                  Department of {student.department}
                </p>
              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/20 text-2xl">
                ✓
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Current CGPA
              </p>

              <p className="mt-3 text-4xl font-bold text-blue-950">
                {student.cgpa}
              </p>

              <p className="mt-2 text-sm text-emerald-600">
                Good academic progress
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl text-blue-900">
              ★
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Completed Credits
              </p>

              <p className="mt-3 text-4xl font-bold text-blue-950">
                {student.completedCredits}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Credits earned
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-xl text-violet-700">
              ◈
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Completed Courses
              </p>

              <p className="mt-3 text-4xl font-bold text-blue-950">
                {student.totalCourses}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Courses completed
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-xl text-amber-700">
              ▤
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Registered Credits
              </p>

              <p className="mt-3 text-4xl font-bold text-blue-950">
                {totalRegisteredCredits}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Current semester
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-xl text-emerald-700">
              +
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                Current Semester
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Registered Courses
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {student.registeredCourses.length} courses registered for{" "}
                {student.session}
              </p>
            </div>

            <span className="w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
              {totalRegisteredCredits} Credits
            </span>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                  <th className="px-3 py-4">Course</th>
                  <th className="px-3 py-4">Section</th>
                  <th className="px-3 py-4">Room</th>
                  <th className="px-3 py-4">Schedule</th>
                  <th className="px-3 py-4 text-center">Credit</th>
                </tr>
              </thead>

              <tbody>
                {student.registeredCourses.map((course) => (
                  <tr
                    key={course.code}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >
                    <td className="px-3 py-4">
                      <p className="font-bold text-blue-950">
                        {course.code}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {course.name}
                      </p>
                    </td>

                    <td className="px-3 py-4 text-sm font-medium text-slate-700">
                      {course.section}
                    </td>

                    <td className="px-3 py-4 text-sm text-slate-700">
                      {course.room}
                    </td>

                    <td className="min-w-48 px-3 py-4 text-sm text-slate-700">
                      {course.time}
                    </td>

                    <td className="px-3 py-4 text-center">
                      <span className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">
                        {course.credit}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Student Information
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Contact Details
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email
                </p>

                <p className="mt-1 break-all font-medium text-slate-700">
                  {student.email}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Mobile
                </p>

                <p className="mt-1 font-medium text-slate-700">
                  {student.mobile}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Program
                </p>

                <p className="mt-1 font-medium text-slate-700">
                  {student.program}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Session
                </p>

                <p className="mt-1 font-medium text-slate-700">
                  {student.session}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 text-white shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-100">
              Project Progress
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              {student.project.title}
            </h2>

            <p className="mt-3 text-emerald-100">
              {student.project.status}
            </p>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-sm text-emerald-100">
                  Marks Obtained
                </p>

                <p className="mt-1 text-4xl font-bold">
                  {student.project.marks}
                  <span className="text-xl text-emerald-200">
                    /{student.project.totalMarks}
                  </span>
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                ◆
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Academic Summary
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Overall Performance
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              A quick overview of the student's academic standing and
              completed course performance.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">
              Completed Course Average
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-950">
              {student.completedCourseAverage}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">
              Current Status
            </p>

            <p className="mt-2 text-2xl font-bold text-emerald-600">
              {student.status}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;