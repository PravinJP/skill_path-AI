import api from "./api";

export const getDashboardData = async () => {
  const response = await api.get("/resume/me");

  return response.data;
};