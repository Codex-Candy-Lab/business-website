import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgriPilot FarmOS",
  description: "Farm management dashboard with dummy hardware and IoT sensor data.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
