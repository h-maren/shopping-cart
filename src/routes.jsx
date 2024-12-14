import App from "./App";
import Home from './components/Home';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  export default routes