export interface SearchState {
    query: string;
    status: "idle" | "loading" | "succeeded" | "failed";
  }