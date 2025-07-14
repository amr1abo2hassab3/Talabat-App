import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";

import { useState } from "react";
import type { IApiError, ILoginForm } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import { userLogin } from "../app/features/LoginSlice";

export default function LoginPage() {
  // state or hooks
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [user, setUser] = useState<ILoginForm>({
    email: "",
    password: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const toast = useToast();
  const { loading } = useSelector((state: RootState) => state.login);

  // handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasError = false;

    if (!user.email.trim()) {
      setIsEmail(true);
      hasError = true;
    } else {
      setIsEmail(false);
    }

    if (!user.password.trim()) {
      setIsPassword(true);
      hasError = true;
    } else {
      setIsPassword(false);
    }

    if (!hasError) {
      dispatch(userLogin(user))
        .unwrap()
        .then((res) => {
          toast({
            title: "Login Successful 🎉",
            description: `Welcome back! ${res?.displayName}`,
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        })
        .catch((err: IApiError) => {
          toast({
            title: "Login Failed 😥",
            description: err?.message || "Invalid credentials",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        });
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          as={"form"}
          onSubmit={handleSubmit}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={user.email}
                name={"email"}
                onChange={handleChange}
                isInvalid={isEmail}
              />
              {isEmail && (
                <Text color="red.500" fontSize="sm" mt="2">
                  Email is required
                </Text>
              )}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={user.password}
                  onChange={handleChange}
                  name={"password"}
                  isInvalid={isPassword}
                />

                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {isPassword && (
                <Text color="red.500" fontSize="sm" mt="2">
                  Password is required
                </Text>
              )}
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Button
                isLoading={loading}
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
