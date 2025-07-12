import { Grid, Center, Text } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import useGetDataQuery from "../hooks/useAuthenticatedQuery";
import ProductCardSkeleton from "../components/ui/ProductCardSkeleton";
import type { IDataProduct, IProduct } from "../interfaces";

const ProductsPage = () => {
  // handler
  const { data, isLoading, error } = useGetDataQuery<IDataProduct>({
    queryKey: ["getAllProducts"],
    url: `/api/Products`,
  });

  if (isLoading)
    return (
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="6">
        {Array.from({ length: 10 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </Grid>
    );

  if (error)
    return (
      <Center h="100vh">
        <Text fontSize="xl" color="red.500">
          Something went wrong!
        </Text>
      </Center>
    );

  // render
  const renderProducts = data?.data.map((product: IProduct) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="6">
      {renderProducts}
    </Grid>
  );
};

export default ProductsPage;
