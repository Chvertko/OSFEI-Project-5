import { Volume } from "./Response";

export interface SearchState {
  loading: boolean;
  error: string | null;
  items: Volume[] | undefined;
  q: string
}