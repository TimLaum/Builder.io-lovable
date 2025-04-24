
export type FatigueScoreType = "top" | "fatigued" | "low" | "hidden";

export interface CreativeData {
  id: string;
  imageUrl: string;
  ctr: string;
  avgFrequency: string;
  clicks: string;
  impressions: string;
  cpm: string;
  fatigueScore: {
    label: string;
    type: FatigueScoreType;
  };
}
