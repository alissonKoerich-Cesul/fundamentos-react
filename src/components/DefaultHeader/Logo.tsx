import { Image } from "@chakra-ui/react";
import logoBranca from "@/assets/logo-branco.png";
import logoPreta from "@/assets/logo-preta.png";
import { useColorMode } from "../ui/color-mode";

export function Logo() {
  const { colorMode } = useColorMode();

  return colorMode === "dark" ? (
    <Image w="130px" height="60px" src={logoBranca.src} />
  ) : (
    <Image w="130px" height="60px" src={logoPreta.src} />
  );
}
