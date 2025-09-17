import { Input, InputGroup, Kbd } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";



export function Search() {
  return (
   <InputGroup flex="1" startElement={<LuSearch />}>
    <Input placeholder="Pesquisar alunos" />
  </InputGroup>
  )


}
