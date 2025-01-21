import App from "@/App";
import ColorPicker from "@/pages/ColorPicker";
import Counter from "@/pages/Counter";
import ExpensesPage from "@/pages/ExpensesPage";
import Login from "@/pages/Login";
import RtkFetchPracticePage from "@/pages/RtkFetchPracticePage";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Tasks /> },
      { path: "users", element: <Users /> },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "/color-picker",
        element: <ColorPicker />,
      },
      {
        path: "/expenses",
        element: <ExpensesPage />,
      },
      {
        path: "/rtk-page",
        element: <RtkFetchPracticePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
