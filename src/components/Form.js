import React, { useCallback, useRef } from 'react';
import '../styles/Form.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();
  const titleInput = useRef();
  const authorInput = useRef();
  const formHandler = useCallback(() => (event) => {
    event.preventDefault();
    const book = {
      item_id: uuidv4(),
      title: titleInput.current?.value,
      author: authorInput.current?.value,
      category: 'Action',
    };
    dispatch(addBook(book));
  }, []);
  return (
    <div className="form-container">
      <h2 className="header-title">ADD NEW BOOK</h2>
      <form onSubmit={formHandler()}>
        <input ref={titleInput} type="text" placeholder="Book title" className="title" />
        <input ref={authorInput} type="text" placeholder="Book Author" className="author" />
        <button type="submit" className="btn-add">Add Book</button>
      </form>
    </div>

  );
};

export default Form;
