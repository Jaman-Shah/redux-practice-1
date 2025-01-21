import { useCreateTaskMutation, useGetTasksQuery } from "@/redux/api/baseApi";

const RtkFetchPracticePage = () => {
  const { data, isLoading, isError } = useGetTasksQuery(undefined, {
    //  pollingInterval: 1000,
    // refetchOnFocus: true,
    // refetchOnMountOrArgChange: true,
    // refetchOnReconnect: true;
  });
  console.log(data, isLoading, isError);

  const [createTask, { data: cData, isLoading: cLoading, isError: cError }] =
    useCreateTaskMutation();

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Access the form values using FormData or e.target
    const formData = new FormData(e.target);

    // Log the values
    const taskData = {
      title: formData.get("title"),
      description: formData.get("description"),
      priority: formData.get("priority"),
      dueDate: formData.get("dueDate"),
      isCompleted: e.target.isCompleted.checked, // Checkbox needs special handling
    };
    try {
      const response = await createTask(taskData).unwrap();
      console.log("inside submit function", response);
    } catch (error: Error) {
      console.log(error.message);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {!isLoading &&
        data.tasks.map((task: any) => {
          return (
            <div
              key={task._id}
              className="border rounded-lg p-4 shadow-md bg-white"
            >
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-xl font-semibold text-gray-800">
                  {task.title}
                </h1>
                <span
                  className={`px-2 py-1 text-sm font-medium rounded ${
                    task.priority === "low"
                      ? "bg-green-100 text-green-800"
                      : task.priority === "medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {task.priority}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{task.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>
                  Due:{" "}
                  <span className="font-medium text-gray-700">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                </span>
                <span
                  className={`font-medium ${
                    task.isCompleted ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {task.isCompleted ? "Completed" : "Pending"}
                </span>
              </div>
            </div>
          );
        })}

      {/* ------->   from <---------- */}
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md border"
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Add or Update Task
        </h2>

        {/* Title Input */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title" // Add name attribute
            className="mt-1 w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter task title"
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description" // Add name attribute
            rows="4"
            className="mt-1 w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter task description"
          ></textarea>
        </div>

        {/* Priority Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700"
          >
            Priority
          </label>
          <select
            id="priority"
            name="priority" // Add name attribute
            className="mt-1 w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Due Date Input */}
        <div className="mb-4">
          <label
            htmlFor="dueDate"
            className="block text-sm font-medium text-gray-700"
          >
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate" // Add name attribute
            className="mt-1 w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Completion Status Checkbox */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="isCompleted"
            name="isCompleted" // Add name attribute
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="isCompleted" className="ml-2 text-sm text-gray-700">
            Mark as Completed
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default RtkFetchPracticePage;
