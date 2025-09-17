import { Button, Menu, Portal } from "@chakra-ui/react";



export function FilterMenu() {
   return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="md" width={100}>
          Filtro
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )





}
