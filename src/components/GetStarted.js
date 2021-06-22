import { Box, Badge, Button, Container, Heading, LightMode, Text } from "@chakra-ui/react";
const GetStarted = () => {
  return (
    <LightMode>
      <Box as="section" textAlign="center" bg="teal.900" py="20" color="white" id="buy-now">
        <Container maxWidth="container.md">
          <Badge colorScheme="whiteAlpha">Get Started</Badge>
          <Heading mb="6" fontFamily="special">
            Get AlyraKit and save your time
          </Heading>
          <Text fontSize="lg" mb="6">
            Stop wasting time trying to do it the "right way" and build a site from scratch. AlyraKit is faster, easier,
            and you still have complete control.
          </Text>
          <Button colorScheme="teal" size="lg">
            Buy now
          </Button>
        </Container>
      </Box>
    </LightMode>
  );
};

export default GetStarted;

/*
import { Button, Box, Heading, Text, Container, Badge } from "@chakra-ui/react";

const GetStarted = () => {
  return (
    <Box as="section" id="buy-now" py={20} align="center" bg="teal.900" color="white" w="100%">
      <Container maxW="container.md">
        <Badge
          as="span"
          textTransform="uppercase"
          bg="teal.800"
          fontSize="12px"
          colorSheme="whiteAlpha"
          borderRadius="2xl"
          fontWeight="bold"
          mb={6}
          pt={1}
        >
          Get Started
        </Badge>
        <Heading mb="6">Get AlyraKit and save your time</Heading>
        <Text fontSize="lg" mb={6}>
          Stop wasting time trying to do it the "right way" and build a site from scratch. AlyraKit is faster, easier,
          and you still have complete control.
        </Text>
        <Button href="#buy-now" size="lg" colorScheme="teal">
        <Button size="lg" colorScheme="teal">
          Buy now
        </Button>
      </Container>
    </Box>
  );
};

export default GetStarted;
*/

/*
const GetStarted = () => {
  return (
    <section id="buy-now">
      <span>Get Started</span>
      <h2>Get AlyraKit and save your time</h2>
      <p>
        Stop wasting time trying to do it the "right way" and build a site from
        scratch. AlyraKit is faster, easier, and you still have complete
        control.
      </p>
      <button>Buy now</button>
    </section>
  )
}

export default GetStarted
*/

/*

const GetStarted = () => {
  return (
    <section id="buy-now">
      <span>Get Started</span>
      <h2>Get AlyraKit and save your time</h2>
      <p>
        Stop wasting time trying to do it the "right way" and build a site from
        scratch. AlyraKit is faster, easier, and you still have complete
        control.
      </p>
      <button>Buy now</button>
    </section>
  )
}

export default GetStarted
*/
