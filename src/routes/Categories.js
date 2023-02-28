import React, { useState } from 'react';
import '../styles/Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const { status } = useSelector((store) => store.categories);
  const [showStatus, setShowStatus] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <button
        type="button"
        className="status"
        onClick={() => {
          dispatch(checkStatus());
          setShowStatus(!showStatus);
        }}
      >
        Check Status
      </button>
      <br />
      { showStatus && <h1>{status}</h1>}
    </div>
  );
}

export default Categories;
