import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import router from './routes';
import { axiosInterceptor } from '@/services/axios';
import { store } from '@/store';
import { Provider } from 'react-redux';
axiosInterceptor();

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
        <h1>hola </h1>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
