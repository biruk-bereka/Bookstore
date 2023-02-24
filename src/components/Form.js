import React from 'react';
import '../styles/Form.css';

const Form = () => (
  <div className="form-container">
    <h2 className="header-title">ADD NEW BOOK</h2>
    <form>
      <input type="text" placeholder="Book title" className="title" />
      <input type="text" placeholder="Book Author" className="author" />
      <button type="button" className="btn-add">Add Book</button>
    </form>
  </div>

);

export default Form;
