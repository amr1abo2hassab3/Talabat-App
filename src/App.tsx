import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ChakraProvider, ToastProvider } from "@chakra-ui/react";
import DrawerCart from "./components/DrawerCart";

const App = () => {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
      <ToastProvider />
      <DrawerCart />
    </ChakraProvider>
  );
};

export default App;
