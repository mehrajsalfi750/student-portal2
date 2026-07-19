import { useMemo, useState } from "react";

function NoticeBoard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const notices = [
    {
      id: 1,
      title: "Course Registration Verification",
      description:
        "All students must review their registered courses, sections, rooms, and class schedules before the registration deadline.",
      date: "January 12, 2026",
      category: "Academic",
      priority: "High",
      pinned: true,
    },
    {
      id: 2,
      title: "Spring 2026 Classes Begin",
      description:
        "Regular classes for the Spring 2026 semester will begin according to the published academic calendar.",
      date: "January 15, 2026",
      category: "General",
      priority: "Medium",
      pinned: true,
    },
    {
      id: 3,
      title: "Student ID Card Collection",
      description:
        "Students who have not collected their updated ID cards should visit the registrar office during working hours.",
      date: "January 18, 2026",
      category: "Administration",
      priority: "Medium",
      pinned: false,
    },
    {
      id: 4,
      title: "Project Proposal Submission",
      description:
        "Final-year students must submit their project proposals to their assigned supervisors before the deadline.",
      date: "January 22, 2026",
      category: "Project",
      priority: "High",
      pinned: false,
    },
    {
      id: 5,
      title: "Library Membership Update",
      description:
        "Students are requested to update their library membership information for the new semester.",
      date: "January 25, 2026",
      category: "Library",
      priority: "Low",
      pinned: false,
    },
  ];

  const categories = [
    "All",
    ...new Set(notices.map((notice) => notice.category)),
  ];

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const matchesSearch =
        notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notice.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        notice.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  function getPriorityClasses(priority) {
    if (priority === "High") {
      return "bg-red-100 text-red-700";
    }

    if (priority === "Medium") {
      return "bg-amber-100 text-amber-700";
    }

    return "bg-emerald-100 text-emerald-700";
  }

  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-indigo-900 to-violet-900 text-white shadow-xl">
        <div className="flex flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              University Updates
            </p>

            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
              Notice Board
            </h1>

            <p className="mt-3 max-w-2xl text-blue-200">
              Stay updated with important academic, administrative, and
              university announcements.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <p className="text-sm text-blue-200">
                Total Notices
              </p>

              <p className="mt-2 text-3xl font-bold">
                {notices.length}
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <p className="text-sm text-blue-200">
                Pinned Notices
              </p>

              <p className="mt-2 text-3xl font-bold">
                {notices.filter((notice) => notice.pinned).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <div>
            <label
              htmlFor="notice-search"
              className="text-sm font-semibold text-slate-700"
            >
              Search notices
            </label>

            <div className="relative mt-2">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                ⌕
              </span>

              <input
                id="notice-search"
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by title or description"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700">
              Category
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    selectedCategory === category
                      ? "bg-blue-950 text-white shadow"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {filteredNotices.length > 0 ? (
        <div className="grid gap-5">
          {filteredNotices.map((notice) => (
            <article
              key={notice.id}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl ${
                      notice.pinned
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {notice.pinned ? "★" : "●"}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      {notice.pinned && (
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                          Pinned
                        </span>
                      )}

                      <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
                        {notice.category}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${getPriorityClasses(
                          notice.priority
                        )}`}
                      >
                        {notice.priority} Priority
                      </span>
                    </div>

                    <h2 className="mt-3 text-xl font-bold text-slate-900 transition group-hover:text-blue-800">
                      {notice.title}
                    </h2>

                    <p className="mt-3 max-w-4xl leading-7 text-slate-600">
                      {notice.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 rounded-2xl bg-slate-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Published
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-700">
                    {notice.date}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
            ⌕
          </div>

          <h2 className="mt-4 text-xl font-bold text-slate-900">
            No notices found
          </h2>

          <p className="mt-2 text-slate-500">
            Try another search term or category.
          </p>
        </div>
      )}
    </section>
  );
}

export default NoticeBoard;