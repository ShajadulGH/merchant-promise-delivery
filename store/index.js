import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
