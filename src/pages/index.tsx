import { Card, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiAward, BiCalendar } from "react-icons/bi";
import { FaBookOpen, FaGraduationCap } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosBook, IoMdPeople } from "react-icons/io";
import { IndicatorCard } from "@/components/indicatorCard";
import { RecentActivity } from "@/components/recentActivity";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Home() {
  const recentActivities = [
    {
      id: 1,
      type: "enrollment",
      title: "Nova matrícula: Maria Silva - Engenharia de Software",
      time: "2 min atrás",
    },
    {
      id: 2,
      type: "grade",
      title: "Notas lançadas: Cálculo I - Prof. João Santos",
      time: "15 min atrás",
    },
    {
      id: 3,
      type: "course",
      title: "Novo curso criado: Análise de Ddoas",
      time: "1 hora atrás",
    },
    {
      id: 4,
      type: "calendar",
      title: "Evento adicionado: Semana da Computação",
      time: "2 min atrás",
    },
  ];

  const iconMap: Record<string, IconType> = {
    enrollment: IoMdPeople,
    grade: BiAward,
    course: IoIosBook,
    calendar: BiCalendar,
  };

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

      <HStack mt={8}>
        <Card.Root>
          <Card.Header>
            <Card.Title>Atividades Recentes</Card.Title>
          </Card.Header>
          <Card.Body gap={10}>
            {recentActivities.map((activity) => {
              const ActivityIcon = iconMap[activity.type] ?? AiFillQuestionCircle;
              return(
                   <RecentActivity
                      key={activity.id}
                      dateTime={"2 minutos atrás"}
                      icon={ActivityIcon}
                      title={activity.title}
                      colorPallet="blue"
            />
            )}
          )}

          </Card.Body>
        </Card.Root>
      </HStack>
    </DefaultLayout>
  );
}
