import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './Routers/Routes.jsx';


import {
  
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-screen-2xl px-1 mx-auto'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
