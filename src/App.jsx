import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import RegisteredCourses from "./components/RegisteredCourses";
import CompletedCourses from "./components/CompletedCourses";
import Results from "./components/Results";
import NoticeBoard from "./components/NoticeBoard";

function Project({ student }) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          Student Project
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Project Details
        </h1>

        <p className="mt-2 text-slate-500">
          Current project submission and marks.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-7 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Project Title
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950">
              {student.project.title}
            </h2>

            <p className="mt-3 text-slate-600">
              Student: {student.name}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="min-w-44 rounded-2xl bg-blue-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Submission Status
              </p>

              <p className="mt-2 text-lg font-bold text-blue-950">
                {student.project.status}
              </p>
            </div>

            <div className="min-w-44 rounded-2xl bg-emerald-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Project Marks
              </p>

              <p className="mt-2 text-3xl font-bold text-emerald-600">
                {student.project.marks}/{student.project.totalMarks}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [loggedInStudent, setLoggedInStudent] = useState(null);
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "⌂",
    },
    {
      id: "profile",
      label: "Student Profile",
      icon: "◉",
    },
    {
      id: "registered-courses",
      label: "Registered Courses",
      icon: "▤",
    },
    {
      id: "completed-courses",
      label: "Completed Courses",
      icon: "✓",
    },
    {
      id: "results",
      label: "Results",
      icon: "▥",
    },
    {
      id: "notices",
      label: "Notice Board",
      icon: "●",
    },
    {
      id: "project",
      label: "Project",
      icon: "◆",
    },
  ];

  function handleLogin(student) {
    setLoggedInStudent(student);
    setActivePage("dashboard");
  }

  function handleLogout() {
    setLoggedInStudent(null);
    setActivePage("dashboard");
    setSidebarOpen(false);
  }

  function changePage(pageId) {
    setActivePage(pageId);
    setSidebarOpen(false);
  }

  function getPageTitle() {
    const currentItem = navigationItems.find(
      (item) => item.id === activePage
    );

    return currentItem ? currentItem.label : "Student Portal";
  }

  if (!loggedInStudent) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-slate-950/50 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-blue-950 text-white shadow-2xl transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="border-b border-blue-900 px-6 py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            IUB
          </p>

          <h1 className="mt-2 text-xl font-bold leading-tight">
            Independent University, Bangladesh
          </h1>

          <p className="mt-2 text-sm text-blue-200">
            Student Portal
          </p>
        </div>

        <div className="border-b border-blue-900 px-5 py-5">
          <div className="flex items-center gap-3">
            <img
              src={loggedInStudent.photo}
              alt={loggedInStudent.name}
              className="h-12 w-12 rounded-xl border-2 border-white/30 object-cover"
            />

            <div className="min-w-0">
              <p className="truncate font-semibold">
                {loggedInStudent.name}
              </p>

              <p className="mt-1 text-xs text-blue-200">
                ID: {loggedInStudent.id}
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-5">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => changePage(item.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                activePage === item.id
                  ? "bg-white text-blue-950 shadow"
                  : "text-blue-100 hover:bg-blue-900 hover:text-white"
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-current/10 text-lg">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="border-t border-blue-900 p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-600"
          >
            <span>↪</span>
            Logout
          </button>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
          <div className="flex min-h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-2xl text-slate-700 shadow-sm lg:hidden"
                aria-label="Open sidebar"
              >
                ☰
              </button>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                  Student Portal
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                  {getPageTitle()}
                </h2>
              </div>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">
                  {loggedInStudent.name}
                </p>

                <p className="text-xs text-slate-500">
                  {loggedInStudent.program}
                </p>
              </div>

              <img
                src={loggedInStudent.photo}
                alt={loggedInStudent.name}
                className="h-11 w-11 rounded-xl object-cover shadow"
              />
            </div>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {activePage === "dashboard" && (
              <Dashboard student={loggedInStudent} />
            )}

            {activePage === "profile" && (
              <Profile student={loggedInStudent} />
            )}

            {activePage === "registered-courses" && (
              <RegisteredCourses student={loggedInStudent} />
            )}

            {activePage === "completed-courses" && (
              <CompletedCourses student={loggedInStudent} />
            )}

            {activePage === "results" && (
              <Results student={loggedInStudent} />
            )}

            {activePage === "notices" && <NoticeBoard />}

            {activePage === "project" && (
              <Project student={loggedInStudent} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;