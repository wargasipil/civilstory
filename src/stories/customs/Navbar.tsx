
import { Button, Flex, Menu, Portal } from "@chakra-ui/react";
import { FiAlignJustify } from "react-icons/fi";

interface MenuItem {
  key: string
  name: string 
  href: string
  
  onlyMobile?: boolean
  props?: Menu.ItemProps
  isLogin?: boolean
}

const menus: MenuItem[] = [
  {
    key: "home",
    href:"#",
    name: "Home",
  },
  {
    key: "services",
    href:"#",
    name: "Services",
  },
  {
    key: "product",
    href:"#",
    name: "Product",
  },
  {
    key: "profile",
    href:"#",
    name: "Profile",
    onlyMobile: true,
    isLogin: true
  },
  {
    key: "logout",
    href:"#",
    name: "Logout",
    onlyMobile: true,
    isLogin: true,
    props: {
      value: "logout",
      color:"fg.error",
      _hover: { bg: "bg.error", color: "fg.error" }
    }
  },
]

interface NavbarProps {
  isLogin: boolean
}

function MobileNav({isLogin}: NavbarProps) {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="xs">
        <FiAlignJustify />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {
              menus.filter(menu => {
                if(menu.isLogin !== undefined) {
                  return isLogin === menu.isLogin
                }

                return true

              }).map(menu => {
                if (menu.props == undefined) {
                  return <Menu.Item value={menu.key}>{menu.name}</Menu.Item>
                } else {
                  return <Menu.Item {...menu.props}>{menu.name}</Menu.Item>
                }
              })
            }
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}


export default function Navbar(props: NavbarProps) {
  return <>
    {/* untuk tampilan mobile */}
    <Flex hideFrom="md">
      <MobileNav {...props} />
    </Flex>
    {/* untuk tampilan Browser  */}
    <Flex gapX={2} hideBelow="md">
      {
        menus.filter(menu => menu.onlyMobile !== true).map(menu => {
          return <Button variant="ghost">
            {menu.name}
          </Button>
        })
      }
    </Flex>
  </>
}

