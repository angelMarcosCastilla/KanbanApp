import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import router from './routes';

const App = () => {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
      <h1>hola </h1>
    </ChakraProvider>
  );
};

export default App;
