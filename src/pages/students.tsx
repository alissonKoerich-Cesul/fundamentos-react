import { HStack } from "@chakra-ui/react";
import { StudentsHeader } from "@/components/StudentsHeader";
import { DefaultLayout } from "@/layouts/DefaultLayout";


type Student = {
  name: string;
};

const defaultStudents: Student[] = [
  { name: "João" },
  { name: "Maria" },
];

type Course = {
  name: string;
};

const defaultCourses: Course[] = [
  { name: "Engenharia de Software" },
  { name: "Medicina" },
];

type Semester = {
  name: string;
};

const defaultSemesters: Semester[] = [
  { name: "1º Semestre" },
  { name: "2º Semestre" },
];

type Enrollment = {
  id: number;
  student: Student;
  course: Course;
  semester: Semester;
};

const defaultEnrollments: Enrollment[] = [
  {
    id: 1,
    student: { name: "João" },
    course: { name: "Engenharia de Software" },
    semester: { name: "1º Semestre" },
  },
];


export default function Students() {
  return (
    <DefaultLayout
      title="GESTAO DOS ESTUDANTES"
      description="Gerencialmento geral dos estudantes universitários"
    >
      <HStack>
        <StudentsHeader />

        {/* ESTUDANTE / CURSO / SEMESTRE / MATRICULA / ACOES */}


      </HStack>
    </DefaultLayout>
  );
}
