export interface job {
  id: number;
  name: string;
  status: string;
  target: string;
  time_start: string;
  time_end: string | undefined;
}
