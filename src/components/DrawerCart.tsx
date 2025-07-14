import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Kbd,
  HStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "../app/features/globalSlice";
import type { RootState } from "../app/store";

const DrawerCart = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.global);

  return (
    <HStack wrap="wrap">
      <Drawer isOpen={isOpen} onClose={() => dispatch(closeDrawer())} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Basket</DrawerHeader>

          <DrawerBody>
            Press the <Kbd>esc</Kbd> key to close the drawer.
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => dispatch(closeDrawer())}
            >
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default DrawerCart;
