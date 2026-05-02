import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LIN, SHU-JEN | Systems Architect",
  description:
    "Digital Twins & Embodied AI Infrastructure. NVIDIA GTC 2026 Exhibitor. Partnering with MSI Innovation Center.",
  openGraph: {
    title: "LIN, SHU-JEN | Systems Architect",
    description:
      "Digital Twins & Embodied AI Infrastructure. NVIDIA GTC 2026 Exhibitor. Partnering with MSI Innovation Center.",
    url: "https://lin-shu-jen.example.com",
    siteName: "LIN, SHU-JEN Portfolio",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Profile portrait of LIN, SHU-JEN",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    site: "shujenlin",
    creator: "shujenlin",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-bg">
        {children}
      </body>
    </html>
  );
}
