import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }: { title?: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    margin="20px"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
  >
    <Heading textTransform="capitalize" fontSize="6vw">
      {title}
    </Heading>
  </Flex>
);
