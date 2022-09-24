import React from 'react';
import { Link } from 'react-router-dom';
import OneShelf from './OneShelf';

const Home = ({ Books, changeShelf }) => {
  return (
    <div>
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads . . .</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <OneShelf
              books={Books.filter((book) => book.shelf === 'currentlyReading')}
              onChangeShelf={changeShelf}
              title='Currently Reading'
            />
            <OneShelf
              books={Books.filter((book) => book.shelf === 'wantToRead')}
              onChangeShelf={changeShelf}
              title='Want To Read'
            />
            <OneShelf
              books={Books.filter((book) => book.shelf === 'read')}
              onChangeShelf={changeShelf}
              title='Read'
            />
            <div className='open-search'>
              <Link to='/search'>Add a Book</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
