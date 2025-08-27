import { Button, CloseButton, Drawer, IconButton, Kbd, Portal } from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";


export function Menu(){
return(

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
                    Press the <Kbd>esc</Kbd> key to close the drawer.
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Drawer.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Drawer.ActionTrigger>
                    <Button>Save</Button>
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
