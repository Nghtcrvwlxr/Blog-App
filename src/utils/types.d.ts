export interface BlogState extends Record<string, any> {
  data: BlogItem[];
  createWindowVisible: boolean;
  confirmWindowVisible: boolean;
}

export interface BlogItem {
  id: number;
  title: string;
  content: string;
}
