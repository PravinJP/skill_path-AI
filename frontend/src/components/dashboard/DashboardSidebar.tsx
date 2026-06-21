import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <aside className="w-72 bg-[#0B1022] min-h-screen border-r border-white/10 p-6">

      <h1 className="text-3xl font-bold text-white">
        SkillPath AI
      </h1>

      <div className="mt-10 flex flex-col gap-6">

        {/* Dashboard */}
        <Link
          to="/dashboard"
          className="text-gray-300 hover:text-white"
        >
          Dashboard
        </Link>

        {/* Resume Intelligence */}
        <div>
          <p className="text-xs uppercase text-gray-500 mb-3">
            Resume Intelligence
          </p>

          <div className="flex flex-col gap-3 pl-3">

            <Link
              to="/upload-resume"
              className="text-gray-300 hover:text-white"
            >
              Upload Resume
            </Link>

            <Link
              to="/resume-analysis"
              className="text-gray-300 hover:text-white"
            >
              Resume Analysis
            </Link>

            <Link
              to="/resume-chat"
              className="text-gray-300 hover:text-white"
            >
              Resume Chat
            </Link>

          </div>
        </div>

        {/* Job Match */}
        <Link
          to="/job-match"
          className="text-gray-300 hover:text-white"
        >
          Job Match Analyzer
        </Link>

        {/* Interviews */}
        <Link
          to="/mock-interviews"
          className="text-gray-300 hover:text-white"
        >
          Mock Interviews
        </Link>

        {/* Roadmap */}
        <Link
          to="/learning-roadmap"
          className="text-gray-300 hover:text-white"
        >
          Learning Roadmap
        </Link>

        {/* Reports */}
        <Link
          to="/reports"
          className="text-gray-300 hover:text-white"
        >
          Reports
        </Link>

      </div>

    </aside>
  );
};

export default DashboardSidebar;