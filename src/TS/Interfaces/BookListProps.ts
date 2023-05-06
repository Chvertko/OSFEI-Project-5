import { Volume} from "./Response";

export interface BookListProps {
    data: Volume[] | [];
    isError: boolean;
    isLoading: boolean;
    isFetching: boolean
  }
  