import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import WelcomeCard from "../../components/dashboard/WelcomeCard";

import MetricCard from "../../components/dashboard/MetricCard";
import StrengthsSection from "../../components/dashboard/StrengthsSection";
import GrowthAreasSection from "../../components/dashboard/GrowthAreasSection";

import { useDashboard } from "../../hooks/useDashboard";



const Dashboard = () => {

    console.log("Dashboard Rendered");
  const { dashboard, loading } = useDashboard();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#060B18] flex items-center justify-center text-white">
        Loading Dashboard...
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="min-h-screen bg-[#060B18] flex items-center justify-center text-white">
        No Dashboard Data
      </div>
    );
  }

  const analysis = dashboard.analysis;

  return (
    <div className="flex min-h-screen bg-[#060B18]">

      <DashboardSidebar />

      <main className="flex-1 p-8">

        <DashboardHeader />

        <WelcomeCard
          readiness={analysis.job_readiness}
          summary={analysis.career_summary}
        />

        <div className="grid grid-cols-4 gap-5 mt-8">

          <MetricCard
            title="Resume Score"
            value={`${analysis.resume_score}/100`}
          />

          <MetricCard
            title="Career Level"
            value={analysis.career_level}
          />

          <MetricCard
            title="Market"
            value={analysis.market_competitiveness}
          />

          <MetricCard
            title="Readiness"
            value={analysis.job_readiness}
          />

        </div>

        <div className="grid grid-cols-2 gap-6 mt-8">

          <StrengthsSection
            strengths={analysis.top_strengths}
          />

          <GrowthAreasSection
            areas={analysis.growth_areas}
          />

        </div>

      </main>

    </div>
  );
};

export default Dashboard;