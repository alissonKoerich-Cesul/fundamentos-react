import { Card, Flex, FormatNumber, HStack, Icon, Stat } from "@chakra-ui/react";
import { IoMdPeople } from "react-icons/io";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout
      title="DASHBOARD ACADEMICO"
      description="Visão geral do sistema universitário"
    >
    <HStack>
        <Card.Root>
          <Card.Body flexDir="row" alignItems="center" gap={6}>
            <Stat.Root>
              <Stat.Label>Total de Estudantes</Stat.Label>
              <Stat.ValueText>
                <FormatNumber value={1340} />
              </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start">+12% este mes</Stat.UpIndicator>
            </Stat.Root>

            <Flex
              justify={"center"}
              align="center"
              backgroundColor={"blue.100"}
              rounded={"lg"}
              p={4}
            >
              <Icon size="xl" color={"blue.700"}>
                <IoMdPeople />
              </Icon>
            </Flex>
          </Card.Body>
        </Card.Root>
    </HStack>
    </DefaultLayout>
  );
}
