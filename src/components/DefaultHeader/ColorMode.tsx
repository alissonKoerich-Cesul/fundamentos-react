import { IconButton } from "@chakra-ui/react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useColorMode } from "../ui/color-mode";

export function ColorMode() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (

    <IconButton variant="ghost" rounded={"full"} onClick={toggleColorMode}>
      {colorMode === "dark" ? <IoMoon /> : <IoSunny />}
    </IconButton>
  );
}
