"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Birbisa",
    href: "/category/capsula",
    description:
      "Un Birbisa es un cálido café que combina un ambiente acogedor con sabores únicos y una experiencia personalizada.",
  },
  {
    title: "African Citrus Blend",
    href: "/category/molido",
    description:
      "Granos de café africano con un toque cítrico que despierta los sentidos.",
  },
  {
    title: "Bright Citrus Roast",
    href: "/category/molido",
    description:
      "Café molido con un perfil cítrico, perfecto para un café fresco y revitalizante.",
  },
  {
    title: "Caramel Delight",
    href: "/category/capsula",
    description: "Cápsula de café dulce con notas de vainilla y caramelo.",
  },
  {
    title: "Espresso Intense",
    href: "/category/capsula",
    description:
      "Cápsula de café con un sabor dulce y notas de caramelo. Ideal para un espresso fuerte y aromático.",
  },
  {
    title: "Sweet Colombian Aroma",
    href: "/category/grano",
    description:
      "Granos de café colombiano de sabor dulce con un aroma envolvente.",
  },
]

const  MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nostros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    
                    <div className="mb-2 mt-4 text-lg font-medium">
                        jbaxax
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      aeamongols
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu informacion 
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Seccion dedicada a promocion y que se
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Productos aea
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafes</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/accesorios" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


