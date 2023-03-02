import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { fetchBooks } from '../redux/books/bookSlice';

const Books = () => {
  const { books, isLoading } = useSelector((store) => store.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="book-wrapper">
      <div>
        {isLoading && <h1 style={{ textAlign: 'center', color: 'blue' }}>Loading...</h1>}
      </div>
      {books.length > 0 && books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;
