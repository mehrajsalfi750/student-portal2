function ClassRoutine({ student }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-slate-900">
        Class Routine
      </h1>

      <p className="mt-2 text-slate-500">
        Your current semester class schedule.
      </p>

      <div className="mt-6 space-y-4">
        {student.registeredCourses.map((course) => (
          <div
            key={course.code}
            className="rounded-2xl border border-slate-200 p-5"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  {course.code} — {course.name}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Section {course.section} · Room {course.room}
                </p>
              </div>

              <p className="font-semibold text-blue-900">
                {course.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassRoutine;