import { Box, Badge, Button, Container, Heading, LightMode, Text } from "@chakra-ui/react";
import SlideFadeOnScroll from "./SlideFadeOnScroll";
const GetStarted = () => {
  return (
    <LightMode>
      <Box as="section" textAlign="center" bg="teal.900" py="20" color="white" id="buy-now">
        <Container maxWidth="container.md">
          <SlideFadeOnScroll>
            <Badge
              as="span"
              textTransform="uppercase"
              fontSize="12px"
              colorScheme="whiteAlpha"
              borderRadius="2xl"
              fontWeight="bold"
              mb={6}
              paddingX={2}
              paddingY={1}
            >
              Get Started
            </Badge>

            <Heading mb="6" fontFamily="special">
              Get AlyraKit and save your time
            </Heading>
            <Text fontSize="lg" mb="6">
              Stop wasting time trying to do it the "right way" and build a site from scratch. AlyraKit is faster,
              easier, and you still have complete control.
            </Text>
            <Button colorScheme="teal" size="lg">
              Buy now
            </Button>
          </SlideFadeOnScroll>
        </Container>
      </Box>
    </LightMode>
  );
};

export default GetStarted;
