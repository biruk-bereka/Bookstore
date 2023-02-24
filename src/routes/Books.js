import React from 'react';
import Book from '../components/Book';

const Books = () => {
  const books = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
    },
    {
      title: 'Cappital the Tewnty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Book key={book.title} title={book.title} author={book.author} category={book.category} />
      ))}
    </div>
  );
};

export default Books;
