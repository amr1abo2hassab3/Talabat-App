import {
  Card,
  CardBody,
  CardFooter,
  Skeleton,
  SkeletonText,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";

const ProductCardSkeleton = () => {
  return (
    <Card>
      <CardBody>
        {/* image */}
        <Skeleton height="200px" borderRadius="lg" />

        {/* text */}
        <Stack mt="6" spacing="3">
          <Skeleton height="20px" width="60%" />
          <SkeletonText noOfLines={3} spacing="4" />
          <Skeleton height="24px" width="40%" />
        </Stack>
      </CardBody>

      <CardFooter>
        <ButtonGroup spacing="2" width="100%">
          <Skeleton height="40px" flex="1" borderRadius="md" />
          <Skeleton height="40px" flex="1" borderRadius="md" />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;
