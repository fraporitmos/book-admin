import { createBrowserRouter, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import BookScreen from "../screens/BooksScreen/BookScreen";

const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export const AdminRoutes = createBrowserRouter([
  {
    element: <AppLayout />,
    children:[
        {
            path: '/',
            element: <HomeScreen />
        },
        {
            path: '/home',
            element: <HomeScreen />
        },
        {
            path: '/books',
            element: <BookScreen />
        }

    ]
  },
]);
