import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Line-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("Line-theme", theme);
    set({ theme });
  },
}));