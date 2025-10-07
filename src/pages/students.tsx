import { Card, HStack, InputGroup, SimpleGrid } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { ActionButton } from "@/components/ActionButton";
import { Export } from "@/components/Export";
import { FilterMenu } from "@/components/filterMenu";
import { Search } from "@/components/search";
import { StatusFilter } from "@/components/statusFilter";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Students() {
  return (
    <DefaultLayout
      title="GESTAO DOS ESTUDANTES"
      description="Gerencialmento geral dos estudantes universitários"
    >
      <HStack>
        <Card.Root>
          <Card.Body>
            <SimpleGrid row={2} rowGap={4}>
              <InputGroup flex="1" startElement={<LuSearch />}>
                <Search />
              </InputGroup>

              <HStack mt={6} direction={"column"}>

                <StatusFilter />
                <FilterMenu />
                <Export />
                <ActionButton />

              </HStack>

            </SimpleGrid>
          </Card.Body>
        </Card.Root>
      </HStack>

    </DefaultLayout>
  );
}
