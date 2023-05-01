import { BookList } from "../components/BookList";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { useAppSelector } from '../redux/store';

function App() {
  const { error, items, loading } = useAppSelector((state) => state.getBooks);
  console.log(items)
  return(
    <>
      <SearchBar/>
      <BookList/>
    </>
  )
}

export default App;
