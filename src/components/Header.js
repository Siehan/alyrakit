import { Container, Heading, Text, Button, Stack, Box } from "@chakra-ui/react";
import monitor from "../assets/monitor.svg";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Header = () => {
  return (
    <Container as="header" maxW="container.lg" pt="28" pb="10">
      <SlideFadeOnScroll>
        <Stack
          direction={["column-reverse", null, "row"]}
          sx={{
            gap: "2rem",
          }}
          alignItems="center"
        >
          <Box flex="1">
            <Heading as="h1" mb="6" fontFamily="special">
              Welcome to{" "}
              <Text as="span" color="teal">
                AlyraKit.
              </Text>{" "}
              Develop anything.
            </Heading>
            <Text fontSize="xl" mb="6">
              Build a beautiful, modern website with React and Chakra UI.
            </Text>

            <Button as="a" href="#buy-now" size="lg" colorScheme="teal">
              Buy it now
            </Button>
          </Box>
          <Box flex="1">
            <img src={monitor} alt="Illustration with a computer on the desk" width="500" height="378" />
          </Box>
        </Stack>
      </SlideFadeOnScroll>
    </Container>
  );
};

export default Header;
/*
import monitor from "../assets/monitor.svg"

const Header = () => {
  return (
    <header>
      <h1>
        Welcome to <span>AlyraKit.</span> Develop anything.
      </h1>
      <p>Build a beautiful, modern website with React and Chakra UI.</p>

      <a href="#buy-now">Buy it now</a>

      <img
        src={monitor}
        alt="Illustration with a computer on the desk"
        width="500"
        height="378"
      />
    </header>
  )
}

export default Header
*/
