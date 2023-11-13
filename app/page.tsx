"use client";
import { useAppSelector } from "@/redux/hooks";

import { setTheme } from "@/redux/features/themeSlice";
import ThemeToggle from "@/components/ThemeToggle";
import ViewBox from "@/components/ViewBox";
export default function Home() {
  const currentTheme = useAppSelector((state) => state.theme);

  return (
    <main
      style={{ backgroundColor: currentTheme.theme.background }}
      className={`w-full h-screen`}
    >
      <div className="w-1/3 mx-auto flex items-center py-16 flex-col">
        <ThemeToggle />
        <ViewBox />
      </div>
    </main>
  );
}
