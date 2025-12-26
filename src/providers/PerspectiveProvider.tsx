"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Perspective = "red-team" | "neutral" | "blue-team";

interface PerspectiveContextType {
  perspective: Perspective;
  setPerspective: (perspective: Perspective) => void;
  perspectiveLabel: string;
}

const PerspectiveContext = createContext<PerspectiveContextType | undefined>(
  undefined
);

const perspectiveLabels: Record<Perspective, string> = {
  "red-team": "Red Team",
  neutral: "Neutral",
  "blue-team": "Blue Team",
};

export function PerspectiveProvider({ children }: { children: ReactNode }) {
  const [perspective, setPerspective] = useState<Perspective>("neutral");

  return (
    <PerspectiveContext.Provider
      value={{
        perspective,
        setPerspective,
        perspectiveLabel: perspectiveLabels[perspective],
      }}
    >
      {children}
    </PerspectiveContext.Provider>
  );
}

export function usePerspective() {
  const context = useContext(PerspectiveContext);
  if (context === undefined) {
    throw new Error("usePerspective must be used within a PerspectiveProvider");
  }
  return context;
}
