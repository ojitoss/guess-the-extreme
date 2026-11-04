export type LevelStatus =
  | "Pending"
  | "MainList"
  | "Legacy"
  | "Removed";

export interface Publisher {
  id: string;
  username: string;
  global_name: string;
}

export interface Verification {
  id: string;
  submitted_by: User;
  mobile: boolean;
  video_url: string;
  hide_video: boolean;
  achieved_at: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  username: string;
  global_name: string;
}

export interface Level {
  id: string;
  position: number | null;
  name: string;
  points: number;
  status: LevelStatus;
  requires_raw_footage: boolean;
  level_id: number;
  two_player: boolean;
  tags: (string | null)[];
  description: string | null;
  song: number | null;
  edel_enjoyment: number | null;
  is_edel_pending: boolean;
  gddl_tier: number | null;
  nlw_tier: string | null;
  publisher: Publisher;
  verifications: Verification[];
}