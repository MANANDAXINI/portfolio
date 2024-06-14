import React from 'react';
import ReactDOM from 'react-dom';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root.jsx'; // Import Layout component
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Route />
    </RouterProvider>
  </React.StrictMode>
);
