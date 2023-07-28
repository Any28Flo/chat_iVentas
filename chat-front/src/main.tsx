import React from 'react'

import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import './index.css'

import { ApolloProvider } from '@apollo/client';
import { queryClient } from './assets/utils/index.ts';
import router from './assets/routes/root.tsx';
import { AppProvider } from './assets/context/appContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={queryClient}>
      <ChakraProvider>
        <AppProvider>
          <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />

        </AppProvider>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>

)
