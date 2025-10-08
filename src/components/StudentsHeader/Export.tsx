import { Button, ButtonProps, DownloadTrigger } from "@chakra-ui/react";
import { LuDownload } from "react-icons/lu";

const data = "leu me deu"

export function Export({ ...rest }: ButtonProps) {
   return (
    <Button variant="outline" {...rest}>
      <LuDownload /> Exportar
    </Button>
  )
}


