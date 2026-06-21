import { useEffect, useState } from "react";
import { getDashboardData } from "../services/dashboardService";

export const useDashboard = () => {
  const [dashboard, setDashboard] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await getDashboardData();

        console.log(data);

        setDashboard(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  return {
    dashboard,
    loading
  };
};