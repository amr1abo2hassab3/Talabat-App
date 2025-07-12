import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Tag, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import type { IProduct } from "../interfaces";

interface IProductCard {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCard) => {
  const {
    id,
    name,
    pictureUrl,
    price,
    description,
    productBrand,
    productType,
  } = product;

  return (
    <Card>
      <CardBody>
        <Image
          src={pictureUrl}
          alt={name}
          borderRadius="lg"
          objectFit="cover"
          height="300px"
          width="100%"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text noOfLines={3}>{description}</Text>

          <Text color="blue.600" fontSize="2xl">
            {price}$
          </Text>

          <HStack spacing="4">
            <HStack>
              <Tag size={16} />
              <Text fontSize="sm" color="gray.600">
                {productBrand}
              </Text>
            </HStack>
            <HStack>
              <Coffee size={16} />
              <Text fontSize="sm" color="gray.600">
                {productType}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </CardBody>

      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            as={Link}
            to={`/products/productDetails/${id}`}
            variant="solid"
            colorScheme="blue"
            cursor="pointer"
          >
            View Details
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
