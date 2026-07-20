import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import { cookies, headers } from "next/headers";
import { PortalProvider } from "./components/PortalProvider";
import { getPortalConfig, resolvePortalMode } from "@/lib/portal";
import "./globals.css";

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const cookieStore = await cookies();
  const mode = resolvePortalMode(
    headerStore.get("host") ?? "",
    cookieStore.get("portal-mode")?.value,
  );
  const portal = getPortalConfig(mode);

  return {
    title: portal.title,
    description: portal.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const cookieStore = await cookies();
  const mode = resolvePortalMode(
    headerStore.get("host") ?? "",
    cookieStore.get("portal-mode")?.value,
  );

  return (
    <html lang="th" className={`${sarabun.variable} ${sarabun.className}`}>
      <body>
        <PortalProvider mode={mode}>{children}</PortalProvider>
      </body>
    </html>
  );
}
