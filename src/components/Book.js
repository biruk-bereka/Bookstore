import '../styles/Book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const Book = ({ title, author, category }) => (
  <div className="book-container">
    <div className="content">
      <p className="category">{category}</p>
      <h2 className="title">{title}</h2>
      <p className="author">{author}</p>
      <div className="buttons">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="status-container">
      <div className="progress">
        <div className="circle-progress" style={{ width: 65, height: 65 }}>
          <CircularProgressbar value={64} />
        </div>
        <div className="status">
          <span className="percentage">64%</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div>
        <h3 className="chapter-header">CURRENT CHAPTER</h3>
        <h4 className="chapter">Chapter 17</h4>
        <button type="button" className="btn-update">UPDATE PROGRESS</button>
      </div>
    </div>

  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
