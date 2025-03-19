import { Button, Flex } from "@chakra-ui/react";

const menus: {name: string, href: string}[] = [
  {
    href:"#",
    name: "Home",
  },
  {
    href:"#",
    name: "Services",
  },
  {
    href:"#",
    name: "Product",
  }
]


export default function Navbar() {
  return <Flex gapX={2}>
    {
      menus.map(menu => {
        return <Button variant="ghost">
          {menu.name}
        </Button>
      })
    }
  </Flex>
}

