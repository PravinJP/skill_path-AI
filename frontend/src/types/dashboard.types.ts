export interface ProjectEvaluation {
  project_name: string;
  score: number;
  feedback: string;
}

export interface DashboardAnalysis {
  resume_score: number;
  job_readiness: string;
  career_level: string;
  market_competitiveness: string;
  career_summary: string;

  top_strengths: string[];
  growth_areas: string[];
  recommended_skills: string[];
  best_fit_roles: string[];

  skill_scores: Record<string, number>;

  project_evaluation: ProjectEvaluation[];

  interview_focus_areas: string[];

  next_actions: string[];

  recruiter_verdict: string;
}

export interface DashboardResponse {
  resume_id: number;
  file_name: string;
  resume_text: string;
  analysis: DashboardAnalysis;
}