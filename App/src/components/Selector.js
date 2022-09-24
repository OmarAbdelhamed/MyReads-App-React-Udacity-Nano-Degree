import React from 'react';

const Selector = ({ book, Shelf, onChangeShelf }) => {
  const ShelfChanger = (e) => {
    onChangeShelf(book, e.target.value);
  };
  return (
    <div className='book-shelf-changer'>
      <select defaultValue={Shelf} onChange={ShelfChanger}>
        <option value='none' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='None'>None</option>
      </select>
    </div>
  );
};

export default Selector;
