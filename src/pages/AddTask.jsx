import React, { useEffect, useState } from 'react';
import { getcategories } from '../api/category';
import { addtask } from '../api/task';

const AddTask = ({ categories = [] }) => {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    lastDate: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [category,setCategory]=useState([]);
  useEffect(()=>{
    getcategories().then((res)=>{
      console.log(res);
      setCategory(res);
    }).catch((err)=>{
      console.log(err);
      
    })
  },[]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.category) newErrors.category = 'Please select a category';
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.lastDate) newErrors.lastDate = 'Please select a date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    // setLoading(true);
    console.log(formData);
    addtask(formData).then((res)=>{
    console.log(res);
    
    }).catch((err)=>{

    })
    
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-8 h-full flex items-center justify-center">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Add Task</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`border rounded p-2 w-full ${errors.category ? 'border-red-500' : ''}`}
            >
              <option value="">Select Category</option>
              {category.map((cat, idx) => (
                <option key={idx} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`border rounded p-2 w-full ${errors.title ? 'border-red-500' : ''}`}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border rounded p-2 w-full"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Last Date</label>
            <input
              type="date"
              name="lastDate"
              value={formData.lastDate}
              onChange={handleChange}
              className={`border rounded p-2 w-full ${errors.lastDate ? 'border-red-500' : ''}`}
            />
            {errors.lastDate && <p className="text-red-500 text-xs mt-1">{errors.lastDate}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 mt-4 w-full hover:bg-blue-600 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Task'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
