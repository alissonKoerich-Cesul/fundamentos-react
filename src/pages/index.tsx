import { Card, Flex, FormatNumber, HStack, Icon, Stat } from "@chakra-ui/react";
import { FaBookOpen } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
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
              <Stat.UpIndicator alignSelf="start">
                +12% este mes
              </Stat.UpIndicator>
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

        <Card.Root>
          <Card.Body flexDir="row" alignItems="center" gap={6}>
            <Stat.Root>
              <Stat.Label>Total de Professores</Stat.Label>
              <Stat.ValueText>
                <FormatNumber value={121} />
              </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start">
                +1% este mes
              </Stat.UpIndicator>
            </Stat.Root>

            <Flex
              justify={"center"}
              align="center"
              backgroundColor={"yellow.100"}
              rounded={"lg"}
              p={4}
            >
              <Icon size="xl" color={"yellow.700"}>
                <LiaChalkboardTeacherSolid />
              </Icon>
            </Flex>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body flexDir="row" alignItems="center" gap={6}>
            <Stat.Root>
              <Stat.Label>Cursos Oferecidos</Stat.Label>
              <Stat.ValueText>
                <FormatNumber value={24} />
              </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start">
                +1% este mes
              </Stat.UpIndicator>
            </Stat.Root>

            <Flex
              justify={"center"}
              align="center"
              backgroundColor={"blue.100"}
              rounded={"lg"}
              p={4}
            >
              <Icon size="xl" color={"purple.700"}>
                <FaBookOpen />
              </Icon>
            </Flex>
          </Card.Body>
        </Card.Root>

        <Card.Root>
          <Card.Body flexDir="row" alignItems="center" gap={6}>
            <Stat.Root>
              <Stat.Label>Taxa de Aprovação</Stat.Label>
              <Stat.ValueText>
                <FormatNumber value={24} />
              </Stat.ValueText>
              <Stat.UpIndicator alignSelf="start">
                +2.8% este mes
              </Stat.UpIndicator>
            </Stat.Root>

            <Flex
              justify={"center"}
              align="center"
              backgroundColor={"blue.100"}
              rounded={"lg"}
              p={4}
            >
              <Icon size="xl" color={"red.700"}>
                <FaArrowTrendUp />
              </Icon>
            </Flex>
          </Card.Body>
        </Card.Root>
      </HStack>
    </DefaultLayout>
  );
}
