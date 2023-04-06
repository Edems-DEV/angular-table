export interface Config {
  id: number;
  name: string;
  isZip: boolean;
  type: string;
  retention: number;
  size: number;
  interval: string; //?number
  destination: string[];
  source: string[];
  computers: string[];
  groups: string[];
}
