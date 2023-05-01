import { Response } from "./Response";

export interface BookListProps {
    data: Response['items'] | [];
    isError: boolean;
    isLoading: boolean;
  }
  