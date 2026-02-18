import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { type ToastData } from "@/shared/types";

type State = {
  isLoading: boolean;
  toastData: ToastData | null;
};

type Action = {
  setIsLoading: (isLoading: State["isLoading"]) => void;
  setToast: (toastData: State["toastData"]) => void;
  clearToast: () => void;
};

export const useAppStore = create<State & Action>()(
  devtools(
    (set) => ({
      isLoading: false,
      toastData: null,
      setIsLoading: (isLoading: boolean) => set({ isLoading }),
      setToast: (toastData: ToastData | null) => set({ toastData }),
      clearToast: () => set({ toastData: null }),
    }),
    { name: "AppStore" },
  ),
);
