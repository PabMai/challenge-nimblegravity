import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { type Candidate } from "@/shared/models";

type State = {
  candidate: Candidate | null;
};

type Action = {
  setCandidate: (candidate: State["candidate"]) => void;
};

export const useCandidateStore = create<State & Action>()(
  devtools(
    (set) => ({
      candidate: null,
      setCandidate: (candidate: Candidate | null) => set({ candidate }),
    }),
    { name: "CandidateStore" },
  ),
);