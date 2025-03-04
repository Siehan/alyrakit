import { Box, Container, Link, useMediaQuery, useColorModeValue } from "@chakra-ui/react";
import MobileNavigationDrawer from "./MobileNavigationDrawer";
import NavigationListItems from "./NavigationListItems";
import SwitchColorMode from "./SwitchColorMode";

const Navigation = () => {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  console.log(isMobile);
  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.200");
  return (
    <Box position="fixed" py="3" w="100%" bg={bg} zIndex="sticky">
      <Container
        alignItems="center"
        as="nav"
        maxW="container.lg"
        d="flex"
        sx={{
          "a:hover": {
            textDecoration: "none",
          },
        }}
      >
        <Link href="/" fontWeight="bold" fontSize="2xl" mr="auto">
          AlyraKit
        </Link>
        {isMobile ? (
          <MobileNavigationDrawer>
            <NavigationListItems />
          </MobileNavigationDrawer>
        ) : (
          <NavigationListItems sx={{ display: "flex" }} />
        )}
        <SwitchColorMode />
      </Container>
    </Box>
  );
};

export default Navigation;

/*
const Navigation = () => {
  return (
    <nav>
      <a href="/">AlyraKit</a>
      <ul>
        <li>
          <a href="/#sample">Sample</a>
        </li>
        <li>
          <a href="/#pricing">Pricing</a>
        </li>
        <li>
          <a href="/#buy-now">Buy now</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
*/
