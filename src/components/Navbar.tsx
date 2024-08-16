import { useTheme } from "@/context/ThemeProvider"
import { Home, Moon, Package, PanelLeft, ShoppingCartIcon, Sun, Type, UserIcon } from "lucide-react"
import { Link } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import logoImage from "../assets/Images/logo.png"
import { PopoverContent, PopoverTrigger } from "./ui/popover"
import { Popover } from "@radix-ui/react-popover"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet"

export default function Navbar() {
  const { setTheme } = useTheme()
  return (
    <header className="top-0 z-30 w-full absolute h-14 items-center gap-4 border-border/40 border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 */}
      {/* sticky top-0 z-50 w-full border-border/40 */}
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-4 flex items-center space-x-2 lg:mr-6" href="#">
            <img src={logoImage} alt="logo" className="w-8 h-8 rounded-full " />
          </a>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">
              Doc
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">
              components
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">
              Blocks
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#">
              charts
            </a>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <p className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:text-base">
                <img src={logoImage} alt="logo" className="w-8 h-8 rounded-full " />
              </p>
              <SheetClose asChild>
                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Home
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Type className="h-5 w-5" />
                  Contact Us
                </a>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none"></div>
          <nav className="flex items-center">
            <Popover>
              <PopoverTrigger>
                <a href="#">
                  <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0">
                    <ShoppingCartIcon className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </div>
                </a>
              </PopoverTrigger>
              <PopoverContent>
                <div>
                  <p>test the card</p>
                </div>
              </PopoverContent>
            </Popover>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="border-none inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0"
                >
                  <UserIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <a href="/">
                  <DropdownMenuItem>profile</DropdownMenuItem>
                </a>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className=" border-none inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0"
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}
