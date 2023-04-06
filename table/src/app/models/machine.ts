export interface job {
  id: number;
  state: string;
  name: string;
  description: string;
  groups: string[];
  configs: string[];
}
