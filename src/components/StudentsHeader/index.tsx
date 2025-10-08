import {
  Card,
  createListCollection,
  HStack,
  InputGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { ActionButton } from "./ActionButton";
import { Export } from "./Export";
import { FilterMenu } from "./filterMenu";
import { Search } from "./search";
import { StatusFilter } from "./statusFilter";

export function StudentsHeader() {

  const status = createListCollection({
    items: [
      { label: "Inátivo", value: "inativo" },
      { label: "Atívo", value: "ativo" },
      { label: "Formado", value: "formado" },
    ],
  });

  const [valueFilter, setValueFilter] = useState<string[]>([]);

  return (
    <HStack>
      <Card.Root>
        <Card.Body>
          <SimpleGrid row={2} rowGap={4}>
            <InputGroup flex="1" startElement={<LuSearch />}>
              <Search
                placeholder="Buscar por nome, email ou curso..."
                value=""
                onChange={(e) => console.log(e.target.value)}
              />
            </InputGroup>

            <HStack mt={6} direction={"column"}>
              <StatusFilter

              placeholder="Todos os status"
              collection={status}
              value={valueFilter}
              onValueChange={(e) => setValueFilter(e.value)}
            />
              <FilterMenu />
              <Export onClick={() => console.log()} />
              <ActionButton />
            </HStack>
          </SimpleGrid>
        </Card.Body>
      </Card.Root>
    </HStack>
  );
}
