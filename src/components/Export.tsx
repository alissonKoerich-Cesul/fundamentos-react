import { Button, DownloadTrigger } from "@chakra-ui/react";
import { LuDownload } from "react-icons/lu";

const data = "leu me deu"

export function Export() {
   return (
    <DownloadTrigger
      data={data}
      fileName="koerich.txt"
      mimeType="text/plain"
      asChild
    >
      <Button variant="outline" size={"md"}>
        <LuDownload />
      </Button>
    </DownloadTrigger>
  )


}
