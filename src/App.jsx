import logo from "./logo.svg";
import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import { NotFound as PageNotFound } from "./components/NotFound";

const router = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
