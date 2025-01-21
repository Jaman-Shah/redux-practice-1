import { useGetTaskQuery } from "@/redux/api/baseApi";

const RtkFetchPracticePage = () => {
  const { data, isLoading, isError } = useGetTaskQuery(undefined);

  console.log(data, isLoading, isError);

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
    </div>
  );
};

export default RtkFetchPracticePage;
