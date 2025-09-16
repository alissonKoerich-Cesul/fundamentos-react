import {  Flex, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";


interface RecentActivityProps {
  title: string;
  icon: IconType;
  colorPallet: string;
  dateTime: string;


}
export function CardBase({title, icon, colorPallet, dateTime}: RecentActivityProps) {
  return(

    <HStack _hover={{backgroundColor:"gray.50", rounded:"md", _dark:{backgroundColor:"gray.900"}}} p={4} rounded="md" gap={6}>
        <Flex
          justify={"center"}
          align={"center"}
          backgroundColor={`${colorPallet}.100`}
          rounded={"lg"}
          p={2}
        >
          <Icon as={icon} size="xl" color={`${colorPallet}.700`}></Icon>
        </Flex>
        <VStack align={"start"} gap={1}>
          <Heading>
            {title}
          </Heading>
          <Text fontSize={"sm"} color={"gray.500"}>
            {dateTime}
          </Text>
        </VStack>
   </HStack>
  );
}
