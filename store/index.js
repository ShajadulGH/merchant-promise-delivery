import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "red",
      setTheme: (theme) => set({ theme }),
    }),

    {
      name: "theme-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useSidebar = create(
  persist(
    (set) => ({
      collapsed: false,
      setCollapsed: (value) => set({ collapsed: value }),
    }),
    {
      name: "sidebar-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
