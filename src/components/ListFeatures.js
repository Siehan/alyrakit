import working from "../assets/working.svg";
import { Heading } from "@chakra-ui/react";
//import { Image, Heading, Container, SimpleGrid, Stack, Box } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { List, ListItem, ListIcon } from "@chakra-ui/react";

const ListFeatures = () => {
  const list = ["Lifetime updates", "Tons of assets", "Tech support", "Integration ready"];
  return (
    <div>
      <img src={working} alt="Illustration with a computer on the desk" width="400" height="295" />

      <Heading fontSize="4xl">The most useful resource ever created for designers</Heading>

      <List spacing={3} p="6">
        {list.map((el, index) => {
          return (
            <ListItem key={index}>
              <ListIcon as={CheckCircleIcon} color="teal.300" />
              {el}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default ListFeatures;

/*
import working from "../assets/working.svg"

const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ]
  return (
    <div>
      <img
        src={working}
        alt="Illustration with a computer on the desk"
        width="400"
        height="295"
      />

      <h2>The most useful resource ever created for designers</h2>
      <ul>
        {list.map((el, index) => {
          return <li key={index}>{el}</li>
        })}
      </ul>
    </div>
  )
}

export default ListFeatures
*/
