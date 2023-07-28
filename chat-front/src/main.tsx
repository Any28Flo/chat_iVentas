import React from 'react'

import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

import './index.css'

import { ApolloProvider } from '@apollo/client';
import { queryClient } from './assets/utils/index.ts';
import router from './assets/routes/root.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={queryClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>

)
