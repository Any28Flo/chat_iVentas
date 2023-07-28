import React from 'react'

import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import './index.css'

import { ApolloProvider } from '@apollo/client';
import { queryClient } from './assets/utils/index.ts';
import router from './assets/routes/root.tsx';
import { AppContext, AppProvider } from './assets/context/appContext.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={queryClient}>
      <ChakraProvider>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>

)
