export interface SearchState {
  loading: boolean;
  error: string | null;
  items: {
    id: string;
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    thumbnail?: string;
  }[];
}