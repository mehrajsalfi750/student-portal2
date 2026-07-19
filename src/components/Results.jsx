function getGradeLetter(gradePoint) {
  if (gradePoint >= 4) return "A+";
  if (gradePoint >= 3.75) return "A";
  if (gradePoint >= 3.5) return "A-";
  if (gradePoint >= 3.25) return "B+";
  if (gradePoint >= 3) return "B";
  if (gradePoint >= 2.75) return "B-";
  if (gradePoint >= 2.5) return "C+";
  if (gradePoint >= 2.25) return "C";
  if (gradePoint >= 2) return "D";
  return "F";
}

function Results({ student }) {
  const totalCompletedCredits = student.completedCourses.reduce(
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

  const highestGradePoint =
    student.completedCourses.length > 0
      ? Math.max(
          ...student.completedCourses.map((course) => course.gradePoint)
        )
      : 0;

  const progressPercentage = Math.min((student.cgpa / 4) * 100, 100);

  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-violet-950 via-indigo-900 to-blue-900 text-white shadow-xl">
        <div className="flex flex-col gap-8 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
              Academic Performance
            </p>

            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
              Semester Results
            </h1>

            <p className="mt-3 text-indigo-200">
              Academic result summary for {student.name}
            </p>

            <p className="mt-1 text-sm text-indigo-300">
              Student ID: {student.id} · {student.session}
            </p>
          </div>

          <div className="w-full rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur lg:max-w-sm">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-indigo-200">
                  Current CGPA
                </p>

                <p className="mt-2 text-5xl font-bold">
                  {student.cgpa}
                </p>

                <p className="mt-2 text-sm text-indigo-200">
                  Out of 4.00
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                ★
              </div>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-emerald-400"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Current CGPA
          </p>

          <p className="mt-3 text-4xl font-bold text-blue-950">
            {student.cgpa}
          </p>

          <p className="mt-2 text-sm text-emerald-600">
            {student.academicStatus}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Completed Credits
          </p>

          <p className="mt-3 text-4xl font-bold text-violet-700">
            {totalCompletedCredits}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Credits earned
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Course Average
          </p>

          <p className="mt-3 text-4xl font-bold text-amber-700">
            {averageGradePoint.toFixed(2)}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Average grade point
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Highest Grade Point
          </p>

          <p className="mt-3 text-4xl font-bold text-emerald-700">
            {highestGradePoint.toFixed(2)}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Best completed result
          </p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                Result Sheet
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Course Performance
              </h2>

              <p className="mt-2 text-slate-500">
                Results from all completed courses.
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
                  <th className="px-4 py-4">Course</th>
                  <th className="px-4 py-4 text-center">Credit</th>
                  <th className="px-4 py-4 text-center">
                    Grade Point
                  </th>
                  <th className="px-4 py-4 text-center">Grade</th>
                  <th className="px-4 py-4 text-center">Status</th>
                </tr>
              </thead>

              <tbody>
                {student.completedCourses.map((course) => (
                  <tr
                    key={course.code}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >
                    <td className="px-4 py-5">
                      <p className="font-bold text-blue-950">
                        {course.code}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {course.name}
                      </p>
                    </td>

                    <td className="px-4 py-5 text-center font-semibold text-slate-700">
                      {course.credit}
                    </td>

                    <td className="px-4 py-5 text-center">
                      <span className="rounded-lg bg-blue-100 px-3 py-2 font-bold text-blue-800">
                        {course.gradePoint.toFixed(2)}
                      </span>
                    </td>

                    <td className="px-4 py-5 text-center">
                      <span className="rounded-lg bg-violet-100 px-3 py-2 font-bold text-violet-800">
                        {getGradeLetter(course.gradePoint)}
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

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Academic Standing
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Performance Status
            </h2>

            <div className="mt-6 rounded-2xl bg-emerald-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Current Status
              </p>

              <p className="mt-2 text-2xl font-bold text-emerald-700">
                {student.academicStatus}
              </p>
            </div>

            <div className="mt-4 rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Overall Average
              </p>

              <p className="mt-2 text-3xl font-bold text-blue-950">
                {student.completedCourseAverage}
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-100">
              Best Performance
            </p>

            <p className="mt-3 text-4xl font-bold">
              {highestGradePoint.toFixed(2)}
            </p>

            <p className="mt-2 text-amber-100">
              Highest course grade point
            </p>

            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
              ★
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Academic Summary
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Overall Record
            </h2>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">
              Courses Completed
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-950">
              {student.completedCourses.length}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">
              Credits Completed
            </p>

            <p className="mt-2 text-3xl font-bold text-violet-700">
              {totalCompletedCredits}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">
              Record Status
            </p>

            <p className="mt-2 text-xl font-bold text-emerald-700">
              {student.status}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;