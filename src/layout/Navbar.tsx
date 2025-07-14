import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  Link,
  Image,
} from "@chakra-ui/react";
import { Sun, Moon } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/remix-logo.svg";
import CookieServices from "../services/CookieServices";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "../app/features/globalSlice";

interface Props {
  children: React.ReactNode;
}
const Links = ["Home", "products"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Link
      as={RouterLink}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      to={`/${
        typeof children === "string" ? children.trim().toLowerCase() : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  // state or hooks
  const { colorMode, toggleColorMode } = useColorMode();
  const isAuthenticated = CookieServices.get("userData");
  const dispatch = useDispatch();

  // handler
  const handleLogOut = () => {
    CookieServices.remove("userData");
    window.location.reload();
  };
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <RouterLink to={"/"}>
            <Image src={logo} />
          </RouterLink>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <Sun /> : <Moon />}
              </Button>
              <Button onClick={() => dispatch(toggleDrawer())}>
                cart <span>(0)</span>
              </Button>

              {isAuthenticated ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <NavLink>Login</NavLink>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
