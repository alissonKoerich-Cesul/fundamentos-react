import { Button, HStack } from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";



export function ActionButton() {
    return(
    <HStack>
      <Button colorPalette="purple" variant="solid" w={"200px"}>
        <IoIosAddCircleOutline /> Novo Estudante
      </Button>
    </HStack>



    )


}
