import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Center,
  Badge,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGetDataQuery from "../hooks/useAuthenticatedQuery";
import type { IProduct } from "../interfaces";
import ProductCardSkeleton from "../components/ui/ProductCardSkeleton";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const BASE_URL = import.meta.env.VITE_SERVER_URL;

  const { data, isLoading, error } = useGetDataQuery<IProduct>({
    queryKey: ["getProductDetails", `${id}`],
    url: `${BASE_URL}/api/Products/${id}`,
  });

  if (isLoading)
    return (
      <Box maxW="800px" mx="auto" p="6">
        <ProductCardSkeleton />
      </Box>
    );
  if (error)
    return (
      <Center h="100vh">
        <Text fontSize="xl" color="red.500">
          Something went wrong!
        </Text>
      </Center>
    );

  return (
    <Box maxW="800px" mx="auto" p="6">
      <Image
        src={data?.pictureUrl}
        alt={data?.name}
        borderRadius="lg"
        objectFit="contain"
        w="100%"
        h="400px"
        mb="6"
      />

      <Stack spacing="4" textAlign={"center"}>
        <Heading textAlign={"center"}>{data?.name}</Heading>
        <Text fontSize="lg" color="gray.700">
          {data?.description}
        </Text>
        <Text
          fontSize="3xl"
          fontWeight="bold"
          bgGradient="linear(to-r, green.400, blue.500)"
          bgClip="text"
        >
          Price: {data?.price}$
        </Text>

        <HStack spacing="4">
          <Badge colorScheme="purple" px="3" py="1" borderRadius="md">
            Brand: {data?.productBrand}
          </Badge>
          <Badge colorScheme="green" px="3" py="1" borderRadius="md">
            Type: {data?.productType}
          </Badge>
        </HStack>
        <Button colorScheme="blue" size="lg" mt="4">
          Add to Cart
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductDetailsPage;
