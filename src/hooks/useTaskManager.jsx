import { useState } from "react";
import { v4 as uuid4 } from "uuid";

const useTaskManager = (initialTaskData) => {
  const [inputValue, setInputValue] = useState({ title: "", description: "" });
  const [taskList, setTaskList] = useState(initialTaskData);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const toggleCompletion = (taskId) => {
    setTaskList((prevData) =>
      prevData.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTaskHandler = (event) => {
    const { name, value } = event.target;
    setInputValue((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const removeTask = (taskId) => {
    setTaskList((prevData) => prevData.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId) => {
    const taskToEdit = taskList.find((task) => task.id === taskId);
    if (taskToEdit) {
      setEditingTaskId(taskId);
      setInputValue({
        title: taskToEdit.title,
        description: taskToEdit.description,
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (editingTaskId !== null) {
      setTaskList((prevData) =>
        prevData.map((task) =>
          task.id === editingTaskId
            ? {
                ...task,
                title: inputValue.title,
                description: inputValue.description,
              }
            : task
        )
      );
      setEditingTaskId(null);
    } else {
      const newTask = {
        id: uuid4(),
        title: inputValue.title,
        description: inputValue.description,
      };
      setTaskList((prevData) => [...prevData, newTask]);
    }

    setInputValue({ title: "", description: "" });
  };

  return {
    inputValue,
    taskList,
    editingTaskId,
    toggleCompletion,
    addTaskHandler,
    removeTask,
    editTask,
    submitHandler,
  };
};

export default useTaskManager;
