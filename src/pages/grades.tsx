import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Grades() {
  return (
     <DefaultLayout
      title="NOTAS DO ACADEMICO"
      description= "Visão geral das notas universitárias"
    >
      <Heading> GRADES DO BIANAKTI</Heading>
    </DefaultLayout>
  );
}
