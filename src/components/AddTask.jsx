import { v4 as uuid4 } from "uuid";
import useTaskManager from "../hooks/useTaskManager";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const taskData = [
  {
    id: uuid4(),
    title: "College",
    description: "Physics notes submission",
  },
  {
    id: uuid4(),
    title: "Work",
    description: "Meeting with clients",
  },
  {
    id: uuid4(),
    title: "Personal",
    description: "Grocery shopping",
  },
  {
    id: uuid4(),
    title: "Project",
    description: "Code review",
  },
  {
    id: uuid4(),
    title: "Fitness",
    description: "Gym workout",
  },

  {
    id: uuid4(),
    title: "Study",
    description: "Read a new book",
  },
  {
    id: uuid4(),
    title: "Chores",
    description: "Clean the house",
  },
  {
    id: uuid4(),
    title: "Hobbies",
    description: "Painting",
  },
  {
    id: uuid4(),
    title: "Health",
    description: "Yoga session",
  },
  {
    id: uuid4(),
    title: "Social",
    description: "Coffee with friends",
  },
];

const AddTask = () => {
  const {
    inputValue,
    taskList,
    editingTaskId,
    toggleCompletion,
    addTaskHandler,
    removeTask,
    editTask,
    submitHandler,
  } = useTaskManager(taskData);

  return (
    <>
      <div className="mb-4">
        <TaskForm
          title={inputValue.title}
          description={inputValue.description}
          addTaskHandler={addTaskHandler}
          submitHandler={submitHandler}
          editingTaskId={editingTaskId}
        />
      </div>

      <div>
        <TaskList
          taskList={taskList}
          removeTask={removeTask}
          editTask={editTask}
          toggleCompletion={toggleCompletion}
        />
      </div>
    </>
  );
};

export default AddTask;
