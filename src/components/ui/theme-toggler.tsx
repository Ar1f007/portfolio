"use client"

import { useTheme } from "next-themes"
import { TbMoon, TbSun } from "react-icons/tb"

const ThemeToggler = () => {

  const { theme, setTheme } = useTheme();

  const isDark = theme == "dark";

  return (
    <button
      className="ml-auto px-4 border-l text-primary hover:text-foreground"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {
        isDark
          ? <TbSun className="text-2xl" />
          : <TbMoon className="text-2xl" />
      }
    </button>
  )
}

export default ThemeToggler