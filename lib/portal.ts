export type PortalMode = "office" | "guest";

export type PortalConfig = {
  mode: PortalMode;
  label: string;
  showMicrosoftLogin: boolean;
  title: string;
  description: string;
};

const CONFIG: Record<PortalMode, PortalConfig> = {
  office: {
    mode: "office",
    label: "OFFICE WIFI",
    showMicrosoftLogin: true,
    title: "สภาเภสัชกรรม - Office WiFi",
    description: "The Pharmacy Council of Thailand - Office WiFi Portal",
  },
  guest: {
    mode: "guest",
    label: "GUEST WIFI",
    showMicrosoftLogin: false,
    title: "สภาเภสัชกรรม - Guest WiFi",
    description: "The Pharmacy Council of Thailand - Guest WiFi Portal",
  },
};

export function getPortalConfig(mode: PortalMode): PortalConfig {
  return CONFIG[mode];
}

/** Resolve portal from Host header / env. */
export function resolvePortalMode(
  host: string,
  cookieMode?: string | null,
): PortalMode {
  if (cookieMode === "office" || cookieMode === "guest") {
    return cookieMode;
  }

  const hostname = host.toLowerCase().split(":")[0].trim();

  const officeHosts = parseHostList(process.env.OFFICE_HOSTS);
  const guestHosts = parseHostList(process.env.GUEST_HOSTS);

  if (officeHosts.includes(hostname)) return "office";
  if (guestHosts.includes(hostname)) return "guest";

  if (hostname.includes("office")) return "office";
  if (hostname.includes("guest")) return "guest";

  const fallback = process.env.PORTAL_MODE;
  if (fallback === "office" || fallback === "guest") return fallback;

  return "guest";
}

function parseHostList(value: string | undefined): string[] {
  return (value ?? "")
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}
