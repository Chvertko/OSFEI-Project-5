import { VolumesQueryArg } from "../TS";
import { useSearchBooksQuery } from "../entites/api/getBooks";

export const useSearchBooks = (arg: VolumesQueryArg) => useSearchBooksQuery(arg);