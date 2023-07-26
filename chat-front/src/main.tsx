import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloProvider } from '@apollo/client';
import { queryClient } from './assets/utils/index';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={queryClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>

)
