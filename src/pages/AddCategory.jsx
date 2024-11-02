import React, { useState } from 'react';
import Input from '../components/Input/Input';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Mock submission logic
    setTimeout(() => {
      if (categoryName.trim() === '') {
        setError('Category name is required');
        setLoading(false);
      } else {
        console.log(`Category added: ${categoryName}`);
        setCategoryName('');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-8 h-full flex items-center justify-center">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Add Category</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <Input
            label="Category Name"
            type="text"
            name="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
            error={error}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 mt-4 w-full hover:bg-blue-600 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Category'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
