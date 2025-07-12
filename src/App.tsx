import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ChakraProvider, ToastProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
      <ToastProvider />
    </ChakraProvider>
  );
};

export default App;
