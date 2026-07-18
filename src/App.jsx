import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <h2>home Page</h2> },
  { path: "/about", element: <h2>about page</h2> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
