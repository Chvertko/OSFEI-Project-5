// import { useSearchBooksQuery } from '../entites/api/getBooks';
// import { Response, VolumesQueryArg } from '../TS';

// export const useSearchBooks = (q: VolumesQueryArg) => {
//   const shouldFetch = !!q;
//   const { data = [], isError, isLoading } = useSearchBooksQuery(q, {
//     skip: !shouldFetch, // пропустить запрос, если q пустой
//   });
  
//   return { data: data as Response, isError, isLoading };
// };

import { useEffect, useState } from "react";
import { useSearchBooksQuery } from "../entites/api/getBooks";
import { Volume} from "../TS";
import { skipToken } from "@reduxjs/toolkit/dist/query";
interface SearchBooksProps{
  query: string
}
export function useSearchBooks({query}:SearchBooksProps) {
  const [data, setData] = useState<Volume[] | undefined>(undefined);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const { data: books, error, isLoading: isFetching , } = useSearchBooksQuery(query ? {query} : skipToken);
  const { isError:error, isFetching, data:books, isLoading:loading, } = useSearchBooksQuery(query ? {query} : skipToken);
  useEffect(() => {
    setIsLoading(isFetching);
  }, [isFetching]);

  useEffect(() => {
    setIsError(!!error);
  }, [error]);

  useEffect(() => {
    if (query.trim() === "") {
      setData(undefined);
      return;
    }

    if (books) {
      setData(books?.items);
    }
  }, [books, query]);

  return { data: data as Volume[], isError, isLoading, isFetching };
}
