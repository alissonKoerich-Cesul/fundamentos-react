import { Image } from "@chakra-ui/react";
import logoLaranja from "@/assets/logo-cesul.png";
import logoPreta from "@/assets/logo-preta.png";
import { useColorMode } from "../ui/color-mode";

export function Logo() {
  const { colorMode } = useColorMode();

  return colorMode === "dark" ? (
    <Image w="130px" height="60px" src={logoLaranja.src} />
  ) : (
    <Image w="130px" height="60px" src={logoPreta.src} />
  );
}
