import './App.css';
import SearchPage from './components/SearchPage';
import Home from './components/Home';
import { useState, useEffect } from 'react';
import * as BooksAPI from './components/BooksAPI';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  const [Books, setBooks] = useState([]);
  const [text, setText] = useState('');
  const [Searched, setSearched] = useState([]);
  const [BooksIDs, setBooksIDs] = useState(new Map());

  //change shelf function
  const changeShelf = (book, NewShelf) => {
    const updatedBooks = Books.map((b) => {
      if (b.id === book.id) {
        book.shelf = NewShelf;
        return book;
      }
      return b;
    });
    BooksAPI.update(book, NewShelf);
    setBooks(updatedBooks);
  };

  const onChangeShelf = (book, NewShelf) => {
    const updatedBooks = Books.map((b) => {
      if (b.id === book.id) {
        book.shelf = NewShelf;
        return book;
      }
      return b;
    });

    if (!BooksIDs.has(book.id)) {
      book.shelf = NewShelf;
      updatedBooks.push(book);
    }
    BooksAPI.update(book, NewShelf);
    setBooks(updatedBooks);
  };

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };

  useEffect(() => {
    BooksAPI.getAll().then((d) => {
      setBooks(d);
      setBooksIDs(createMapOfBooks(d));
    });
  }, []);

  const TextUpdate = (TheTxt) => {
    setText(TheTxt);
    if (text.trim() === '') {
      setSearched([]);
    }
  };
  //do this whenever text changes
  useEffect(() => {
    let active = true;

    if (text) {
      BooksAPI.search(text).then((data) => {
        if (data.error) {
          setSearched([]);
        } else {
          if (active) {
            setSearched(data);
          }
        }
      });
      return () => {
        active = false;
        setSearched([]);
      };
    }
  }, [text]);

  return (
    <Routes>
      <Route
        path='/Search'
        element={
          <SearchPage
            onChangeShelf={onChangeShelf}
            Searched={Searched}
            TextUpdate={TextUpdate}
            text={text}
            Books={Books}
          />
        }
      />
      <Route
        path='/'
        element={<Home Books={Books} changeShelf={changeShelf} />}
      ></Route>
    </Routes>
  );
};

export default App;
