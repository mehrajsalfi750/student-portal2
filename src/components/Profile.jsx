function InfoItem({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-2 font-semibold text-slate-800">
        {value || "Not available"}
      </p>
    </div>
  );
}

function Profile({ student }) {
  const details = student.personalDetails || {};

  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900 text-white shadow-xl">
        <div className="flex flex-col gap-8 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src={student.photo}
              alt={student.name}
              className="h-36 w-36 rounded-3xl border-4 border-white/20 object-cover shadow-xl"
            />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                Student Profile
              </p>

              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                {student.name}
              </h1>

              <p className="mt-3 text-blue-100">
                Student ID: {student.id}
              </p>

              <p className="mt-1 text-sm text-blue-200">
                {student.program}
              </p>

              <p className="mt-1 text-sm text-blue-200">
                {student.department}
              </p>
            </div>
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-2 lg:max-w-md">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm text-blue-200">
                Academic Status
              </p>

              <p className="mt-2 text-xl font-bold">
                {student.academicStatus}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm text-blue-200">
                Current CGPA
              </p>

              <p className="mt-2 text-3xl font-bold">
                {student.cgpa}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Academic Information
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Student Details
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <InfoItem
              label="Student ID"
              value={student.id}
            />

            <InfoItem
              label="Session"
              value={student.session}
            />

            <InfoItem
              label="Program"
              value={student.program}
            />

            <InfoItem
              label="Department"
              value={student.department}
            />

            <InfoItem
              label="Completed Credits"
              value={student.completedCredits}
            />

            <InfoItem
              label="Total Completed Courses"
              value={student.totalCourses}
            />

            <InfoItem
              label="Current CGPA"
              value={student.cgpa}
            />

            <InfoItem
              label="Academic Status"
              value={student.academicStatus}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Contact Information
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Contact Details
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Email Address
              </p>

              <p className="mt-2 break-all font-semibold text-slate-800">
                {student.email}
              </p>
            </div>

            <div className="border-t border-slate-200 pt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Mobile Number
              </p>

              <p className="mt-2 font-semibold text-slate-800">
                {student.mobile}
              </p>
            </div>

            <div className="border-t border-slate-200 pt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Present Address
              </p>

              <p className="mt-2 font-semibold text-slate-800">
                {details.address || "Not available"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Personal Information
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Personal Details
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <InfoItem
              label="Date of Birth"
              value={details.dateOfBirth}
            />

            <InfoItem
              label="Gender"
              value={details.gender}
            />

            <InfoItem
              label="Blood Group"
              value={details.bloodGroup}
            />

            <InfoItem
              label="Nationality"
              value={details.nationality}
            />

            <InfoItem
              label="Religion"
              value={details.religion}
            />

            <InfoItem
              label="Status"
              value={student.status}
            />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Guardian Information
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Family Details
          </h2>

          <div className="mt-6 grid gap-4">
            <InfoItem
              label="Father's Name"
              value={details.fatherName}
            />

            <InfoItem
              label="Mother's Name"
              value={details.motherName}
            />
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Academic Standing
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Current Academic Summary
            </h2>
          </div>

          <span className="w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            {student.academicStatus}
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-blue-50 p-5">
            <p className="text-sm font-medium text-slate-500">
              CGPA
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-950">
              {student.cgpa}
            </p>
          </div>

          <div className="rounded-2xl bg-violet-50 p-5">
            <p className="text-sm font-medium text-slate-500">
              Credits Completed
            </p>

            <p className="mt-2 text-3xl font-bold text-violet-800">
              {student.completedCredits}
            </p>
          </div>

          <div className="rounded-2xl bg-amber-50 p-5">
            <p className="text-sm font-medium text-slate-500">
              Courses Completed
            </p>

            <p className="mt-2 text-3xl font-bold text-amber-700">
              {student.totalCourses}
            </p>
          </div>

          <div className="rounded-2xl bg-emerald-50 p-5">
            <p className="text-sm font-medium text-slate-500">
              Overall Average
            </p>

            <p className="mt-2 text-3xl font-bold text-emerald-700">
              {student.completedCourseAverage}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;