import { createBrowserRouter, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import BookScreen from "../screens/BooksScreen/BookScreen";
import OrdersScreen from "../screens/OrdersScreen/OrdersScreen";
import ChartsScreen from "../screens/ChartsScreen/ChartsScreen";

const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export const AdminRoutes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        path: "/home",
        element: <HomeScreen />,
      },
      {
        path: "/books",
        element: <BookScreen />,
      },
      {
        path: "/orders",
        element: <OrdersScreen />,
      },
      {
        path: "/charts",
        element: <ChartsScreen />,
      },
    ],
  },
]);
