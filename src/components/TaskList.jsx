import React from "react";

const TaskList = ({ taskList, removeTask, editTask, toggleCompletion }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {taskList.map((task) => (
      <div
        key={task.id}
        className={`bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 w-full md:w-auto h-auto p-4 rounded-sm shadow-md hover:shadow-xl hover:scale-105 duration-300 md:p-6 lg:p-8 xl:p-10 overflow-hidden max-h-72`}
      >
        <div
          className={`text-lg font-bold capitalize rounded-md ${
            task.completed ? "line-through" : ""
          }`}
        >
          {task.title}
        </div>
        <div
          className={`rounded-md overflow-y-auto ${
            task.completed ? "line-through" : ""
          }`}
        >
          {task.description}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button
            className="w-auto px-3 py-1 cursor-pointer rounded-sm shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706] hover:shadow-xl hover:shadow-yellow-500 hover:scale-105 duration-300 hover:from-[#d97706] hover:to-[#fbbf24]"
            onClick={() => editTask(task.id)}
          >
            Edit
          </button>
          <button
            className="w-auto px-2 py-1 cursor-pointer rounded-sm shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
            onClick={() => removeTask(task.id)}
          >
            <svg viewBox="0 0 15 15" className="w-5 fill-white">
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
              Button
            </svg>
          </button>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(task.id)}
              className="sr-only peer"
            />
            <div className="peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-500 w-8 h-8 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0"></div>
          </label>
        </div>
      </div>
    ))}
  </div>
);

export default TaskList;
