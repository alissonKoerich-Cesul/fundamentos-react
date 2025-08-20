import {
  Button,
  Flex,
  Group,
  IconButton,
  Image,
  Separator,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import {
  IoIosMenu,
  IoMdHelpCircle,
  IoMdNotifications,
  IoMdSettings,
} from "react-icons/io";
import { IoMoon, IoSunny } from "react-icons/io5";
import logoLaranja from "@/assets/logo-cesul.png";
import logoPreta from "@/assets/logo-preta.png";
import { Avatar } from "@/components/ui/avatar";
import { useColorMode } from "@/components/ui/color-mode";

type DefaultLayoutProps = {
  children: ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex flexDir="column" >
      <Flex
        borderBottomWidth={1}
        w="full"
        justify="space-between"
        py={2}
        px={4}
      >
        <Flex align="center" gap={4}>
          <IconButton variant="outline">
            <IoIosMenu />
          </IconButton>

          {colorMode === "dark" ? (
            <Image w="130px" height="60px" src={logoLaranja.src} />
          ) : (
            <Image w="130px" height="60px" src={logoPreta.src} />
          )}
        </Flex>

        <Group align="center">
          <IconButton variant="ghost">
            <IoMdNotifications />
          </IconButton>
          <IconButton variant="ghost">
            <IoMdHelpCircle  />
          </IconButton>
          <IconButton variant="ghost">
            <IoMdSettings  />
          </IconButton>
          <IconButton
            variant="ghost"
            rounded={"full"}
            onClick={toggleColorMode}
          >
            {colorMode === "dark" ? <IoMoon /> : <IoSunny />}
          </IconButton>

          <Separator h="6" orientation="vertical" mx={2} />

          <Avatar src="https://avatars.githubusercontent.com/u/107716288?v=4" />
        </Group>
      </Flex>

      {children}
    </Flex>
  );
}
