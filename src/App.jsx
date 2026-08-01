import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import { NotFound as PageNotFound } from "./components/NotFound";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "*", element: <PageNotFound /> },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
