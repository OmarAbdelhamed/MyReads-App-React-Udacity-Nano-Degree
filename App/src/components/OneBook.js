import React from 'react';
import Selector from './Selector';
const OneBook = ({ book, onChangeShelf }) => {
  const Shelf = book.shelf ? book.shelf : 'None'; // if the shelf passed as a prop assign it if not then make it none
  const Book = book;
  console.log(book);
  const auth = 'authors' in Book ? Book.authors.join('- ') : 'Author Not Found';
  const thumbnail =
    'imageLinks' in Book
      ? Book.imageLinks.thumbnail
      : 'https://i.ibb.co/grTgbyd/default-Thumbnail.png';
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 192,
            backgroundImage: `url(${thumbnail})`,
          }}
        ></div>
        <Selector Shelf={Shelf} book={Book} onChangeShelf={onChangeShelf} />
      </div>
      <div className='book-title'>{Book.title}</div>
      <div className='book-authors'>{auth}</div>
    </div>
  );
};

export default OneBook;
