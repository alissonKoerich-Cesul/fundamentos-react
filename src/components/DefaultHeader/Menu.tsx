import {
  CloseButton,
  Drawer,
  IconButton,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { IoIosCalendar, IoIosLogOut, IoIosMenu } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { MdAppRegistration, MdOutlineSpeakerNotes } from "react-icons/md";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";
import { signOut } from "@/contexts/SessionContext";
import { NavigationItem } from "./NavigationItem";

export function Menu() {
  const router = useRouter();

  return (
    <Drawer.Root size="md" placement="start">
      <Drawer.Trigger asChild>
        <IconButton variant="ghost">
          <IoIosMenu />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
              <VStack>
                <NavigationItem
                  icon={<RiDashboardFill />}
                  label="Dashboard"
                  onClick={() => router.push("/")}
                  defaultChecked={router.asPath === "/"}
                />

                <NavigationItem
                  icon={<IoPeopleOutline />}
                  label="Estudantes"
                  onClick={() => router.push("/students")}
                  defaultChecked={router.asPath === "/students"}
                />

                <NavigationItem
                  icon={<PiChalkboardTeacherLight />}
                  label="Professores"
                  onClick={() => router.push("/teachers")}
                  defaultChecked={router.asPath === "/teachers"}
                />

                <NavigationItem
                  icon={<HiOutlineAcademicCap />}
                  label="Cursos"
                  onClick={() => router.push("/courses")}
                  defaultChecked={router.asPath === "/courses"}
                />

                <NavigationItem
                  icon={<MdOutlineSpeakerNotes />}
                  label="Notas"
                  onClick={() => router.push("/grades")}
                  defaultChecked={router.asPath === "/grades"}
                />

                <NavigationItem
                  icon={<MdAppRegistration />}
                  label="Matriculas"
                  onClick={() => router.push("/enrollment")}
                  defaultChecked={router.asPath === "/enrollment"}
                />

                <NavigationItem
                  icon={<IoIosCalendar />}
                  label="Calendario"
                  onClick={() => router.push("/calendar")}
                  defaultChecked={router.asPath === "/calendar"}
                />
              </VStack>
            </Drawer.Body>

            <Drawer.Footer>
              <NavigationItem
                icon={<IoIosLogOut />}
                label="Sair"
                onClick={signOut}
              />
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
