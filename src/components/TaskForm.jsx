import React from "react";

const TaskForm = ({
  title,
  description,
  addTaskHandler,
  submitHandler,
  editingTaskId,
}) => (
  <form onSubmit={submitHandler}>
    <div className="mb-4">
      <input
        type="text"
        className="relative bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-md rounded-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500 hover:border-violet-700 transition-all duration-300"
        placeholder="Title"
        name="title"
        value={title}
        onChange={addTaskHandler}
        required
      />
    </div>
    <div className="mb-4">
      <input
        type="text"
        className="relative bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-md rounded-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500 hover:border-violet-700 transition-all duration-300"
        placeholder="Description"
        name="description"
        value={description}
        onChange={addTaskHandler}
        required
      />
    </div>
    <button
      type="submit"
      className="flex justify-center items-center gap-2 w-auto h-auto p-2 cursor-pointer rounded-sm shadow-2xl text-white font-semibold bg-violet-600 hover:shadow-xl hover:shadow-violet-500 hover:scale-105 duration-300"
    >
      {editingTaskId !== null ? "Update Task" : "Add Task"}
    </button>
  </form>
);

export default TaskForm;
