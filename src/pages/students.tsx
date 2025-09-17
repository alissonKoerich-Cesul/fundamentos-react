import { HStack } from "@chakra-ui/react";
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

      </HStack>

      <HStack mt={6} direction={"column"}>
        <Search />
        <StatusFilter />
        <FilterMenu />
        <Export />
        <ActionButton />
      </HStack>
    </DefaultLayout>
  );
}
