import { Volume } from "../TS";
import { useGetBooksIdQuery } from "../entites/api/getBooks";

export function useBookId(id:string){
    const {data,isError,isLoading} = useGetBooksIdQuery(id)
    return {data,isError, isLoading}
}