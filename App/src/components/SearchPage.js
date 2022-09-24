import { Link } from 'react-router-dom';
import OneBook from './OneBook';

const SearchPage = ({ Books, onChangeShelf, text, TextUpdate, Searched }) => {
  return (
    <div className='app'>
      {console.log(text)}
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title, author, or ISBN'
              value={text}
              onChange={(event) => TextUpdate(event.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {Searched.map((book) => {
              const FoundedShelf = Books.filter(
                (Searched) => Searched.id === book.id
              );
              if (FoundedShelf[0]) {
                book.shelf = FoundedShelf[0].shelf;
              } else {
                book.shelf = 'None';
              }
              return (
                <li key={book.id}>
                  <OneBook
                    book={book}
                    key={book.id}
                    onChangeShelf={onChangeShelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
