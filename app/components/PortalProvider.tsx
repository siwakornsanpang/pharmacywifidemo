"use client";

import { createContext, useContext, type ReactNode } from "react";
import { getPortalConfig, type PortalConfig, type PortalMode } from "@/lib/portal";

const PortalContext = createContext<PortalConfig>(getPortalConfig("guest"));

export function PortalProvider({
  mode,
  children,
}: {
  mode: PortalMode;
  children: ReactNode;
}) {
  return (
    <PortalContext.Provider value={getPortalConfig(mode)}>
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal() {
  return useContext(PortalContext);
}
