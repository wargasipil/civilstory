
import { Stack } from "@chakra-ui/react";
import Service from "./Service";

interface Service {
  title: string
}

const services: Service[] = [
  {
    title: "Stock Software"
  },
  {
    title: "Pelatihan Programming"
  },
  {
    title: "CCTV Setup"
  },
  {
    title: "Internet Service"
  },
]


export default function ServiceList() {
  return (
  <Stack>
    {
    services.map(service => {
      return <Service />
    })
  }
  </Stack>
)
}