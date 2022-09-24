import React from 'react';
import OneBook from './OneBook';

const OneShelf = ({ books, title, onChangeShelf }) => {
  return (
    <div>
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{title}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {books.length === 0 && (
              <p>
                This shelf is currently empty. You may mark some books as{' '}
                {`'${title}'`}.{' '}
              </p>
            )}
            {books.length > 0 &&
              books.map((book) => (
                <li key={book.id}>
                  <OneBook book={book} onChangeShelf={onChangeShelf} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default OneShelf;
