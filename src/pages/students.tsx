import { VStack } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { StudentsHeader } from "@/components/StudentsHeader";
import { Table } from "@/components/Table";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { api } from "@/services/apiClient";

type Student = {
  fullName: string;
  email: string;
  course: string;
  semester: string;
  status: string;
  enrollment: string;
};

export default function Students() {
  const data: Student[] = [
    {
      fullName: "Ana Beatriz Silva",
      email: "ana.silva@email.com",
      course: "Análise e Desenvolvimento de Sistemas",
      semester: "4º",
      status: "Ativo",
      enrollment: "ADS20230101",
    },
    {
      fullName: "Lucas Andrade Pereira",
      email: "lucas.andrade@email.com",
      course: "Engenharia de Software",
      semester: "6º",
      status: "Ativo",
      enrollment: "ES20220245",
    },
    {
      fullName: "Mariana Costa Oliveira",
      email: "mariana.costa@email.com",
      course: "Ciência da Computação",
      semester: "2º",
      status: "Trancado",
      enrollment: "CC20240218",
    },
    {
      fullName: "João Pedro Almeida",
      email: "joao.almeida@email.com",
      course: "Sistemas de Informação",
      semester: "5º",
      status: "Ativo",
      enrollment: "SI20220309",
    },
    {
      fullName: "Carla Menezes Rocha",
      email: "carla.rocha@email.com",
      course: "Redes de Computadores",
      semester: "3º",
      status: "Formado",
      enrollment: "RC20200112",
    },
    {
      fullName: "Felipe Santos Nogueira",
      email: "felipe.santos@email.com",
      course: "Gestão da Tecnologia da Informação",
      semester: "7º",
      status: "Ativo",
      enrollment: "GTI20210187",
    },
    {
      fullName: "Julia Ramos Ferreira",
      email: "julia.ramos@email.com",
      course: "Análise e Desenvolvimento de Sistemas",
      semester: "1º",
      status: "Ativo",
      enrollment: "ADS20250254",
    },
    {
      fullName: "Rafael Lima Duarte",
      email: "rafael.lima@email.com",
      course: "Engenharia de Software",
      semester: "8º",
      status: "Ativo",
      enrollment: "ES20200111",
    },
    {
      fullName: "Bruna Torres Carvalho",
      email: "bruna.torres@email.com",
      course: "Ciência da Computação",
      semester: "6º",
      status: "Trancado",
      enrollment: "CC20210329",
    },
    {
      fullName: "Diego Matos Barros",
      email: "diego.barros@email.com",
      course: "Sistemas de Informação",
      semester: "3º",
      status: "Ativo",
      enrollment: "SI20230271",
    },
  ];
  const columnHelper = createColumnHelper<Student>();

  const columns = [
    columnHelper.accessor("fullName", {
      header: "Estudante",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("course", {
      header: "Curso",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("semester", {
      header: "Semestre",
      cell: (info) => `$${info.getValue()}`,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("enrollment", {
      header: "Matricula",
      cell: (info) => info.getValue(),
    }),
  ];

  const[students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    async function laod() {
      const { data } = await api.get("/students");

      console.log(data);
    }
    laod();
  }, []);

  return (
    <DefaultLayout
      title="GESTAO DOS ESTUDANTES"
      description="Gerencialmento geral dos estudantes universitários"
    >
      <VStack align="start">
        <StudentsHeader />

        <Table columns={columns} data={data} />
      </VStack>
    </DefaultLayout>
  );
}
