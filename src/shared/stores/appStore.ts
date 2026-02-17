import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  isLoading: boolean;
};

type Action = {
  setIsLoading: (isLoading: State["isLoading"]) => void;
};

export const useAppStore = create<State & Action>()(
  devtools(
    (set) => ({
      isLoading: false,
      setIsLoading: (isLoading: boolean) => set({ isLoading }),
    }),
    { name: "AppStore" },
  ),
);
