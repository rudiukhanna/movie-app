import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import AboutPage from './components/AboutPage';


const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={router} />

);


reportWebVitals();
