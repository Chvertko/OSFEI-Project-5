import { Routes, Route, useLocation } from 'react-router-dom';
import { SearchBar } from "../components/SearchBar/SearchBar";
import { BookDetailPage } from '../pages/BookDetailPage/BookDetailPage';
import { BookListPage } from '../pages/BookListPage';
import { FavoriteBooksPage } from '../pages/FavoriteBooksPage';
function App() {
  const location = useLocation();
  return(
    <>
    <SearchBar disabled={location.pathname.includes('/bookDetail/')}/>
    <Routes>
      <Route path='/' element={<BookListPage/>}/>
      <Route path='/bookDetail/:id' element={<BookDetailPage/>}/>
      <Route path='/favoritePage' element={<FavoriteBooksPage/>} />
    </Routes>

    </>
  )
}

export default App;
