import { Card, Flex, FormatNumber, HStack, Icon, Stat } from "@chakra-ui/react";
import { FaBookOpen, FaGraduationCap } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IndicatorCard } from "@/components/indicatorCard";
import { DefaultLayout } from "@/layouts/DefaultLayout";


export default function Home() {
  return (
    <DefaultLayout
      title="DASHBOARD ACADEMICO"
      description="Visão geral do sistema universitário"
    >
      <HStack gap={8}>
        <IndicatorCard
          label="Total de Estudantes"
          value={2814}
          indicator="+12% este mes"
          icon={IoMdPeople}
          colorPallet="blue"
        />

           <IndicatorCard
          label="Total de Professores"
          value={121}
          indicator="+1% este mes"
          icon={FaGraduationCap}
          colorPallet="yellow"
        />

           <IndicatorCard
          label="Cursos Oferecidos"
          value={24}
          indicator="-2 este mes"
          icon={FaBookOpen}
          colorPallet="purple"
        />

            <IndicatorCard
          label="Taxa de Aprovação"
          value={0.892}
          style="percent"
          maximumFractionDigits={2}
          minimumFractionDigits={2}
          indicator="+2.8% este mes"
          icon={FaArrowTrendUp}
          colorPallet="red"
        />



      </HStack>
    </DefaultLayout>
  );
}
