import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      category: "Work",
      title: "Complete Project Report",
      description:
        "Finalize and submit the project report by the end of the week.",
      date: "2023-10-15",
    },
    {
      id: 2,
      category: "Personal",
      title: "Grocery Shopping",
      description:
        "Buy groceries for the week including fruits and vegetables.",
      date: "2023-10-14",
    },
    {
      id: 3,
      category: "Fitness",
      title: "Gym Workout",
      description: "Attend the gym for a full-body workout session.",
      date: "2023-10-13",
    },
    {
      id: 4,
      category: "Study",
      title: "Read a Book",
      description: "Finish reading the current book on JavaScript.",
      date: "2023-10-12",
    },
    {
      id: 5,
      category: "Work",
      title: "Team Meeting",
      description: "Attend the weekly team meeting to discuss project updates.",
      date: "2023-10-11",
    },
    {
      id: 6,
      category: "Personal",
      title: "Clean the House",
      description: "Do a thorough cleaning of the house this weekend.",
      date: "2023-10-10",
    },
    {
      id: 7,
      category: "Fitness",
      title: "Yoga Session",
      description: "Join the online yoga class for relaxation and flexibility.",
      date: "2023-10-09",
    },
    {
      id: 8,
      category: "Personal",
      title: "Plan a Trip",
      description: "Start planning the trip for the upcoming holidays.",
      date: "2023-10-08",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setCurrentTask(taskToEdit);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map((task) =>
      task.id === currentTask.id ? currentTask : task
    );
    setTasks(updatedTasks);
    setIsEditing(false);
    setCurrentTask(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-8 h-full flex items-center justify-center">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Task List
        </h2>
        <div className="max-h-80 overflow-y-auto">
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 rounded-lg"></div>
                <div className="relative z-10 flex justify-between">
                  <div>
                    <span className="font-semibold text-xl text-gray-800">
                      {task.title}
                    </span>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-sm text-gray-500">
                      {task.category}
                    </span>
                    <span className="block text-sm text-gray-500">
                      {task.date}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end space-x-3">
                  <button
                    onClick={() => handleEdit(task.id)}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition duration-200 cursor-pointer"
                  >
                    <FaEdit className="mr-1" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="flex items-center text-red-600 hover:text-red-800 transition duration-200 cursor-pointer"
                  >
                    <FaTrash className="mr-1" /> Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Edit Task</h3>
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={currentTask .title}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 text-sm text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={currentTask.description}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 text-sm text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={currentTask.category}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 text-sm text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={currentTask.date}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 text-sm text-gray-700"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default TaskList;