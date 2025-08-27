import { Flex, Group, IconButton, Image, Separator } from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";
import { ColorMode } from "./ColorMode";
import { Help } from "./Help";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import { Settings } from "./Settings";

export function DefaultHeader() {
  return (
    <Flex flexDir="column">
      <Flex
        borderBottomWidth={1}
        w="full"
        justify="space-between"
        py={2}
        px={4}
      >
        <Flex align="center" gap={4}>
          <Menu />

          <Logo />
        </Flex>

        <Group align="center">
          <Notifications />

          <Help />

          <Settings />

          <ColorMode />

          <Separator h="6" orientation="vertical" mx={2} />

          <Profile />
        </Group>
      </Flex>
    </Flex>
  );
}
