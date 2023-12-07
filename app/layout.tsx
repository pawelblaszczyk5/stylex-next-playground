import { Metadata } from "next";

import "#/app/globals.css";

export const metadata = {
  title: "Next.js + StyleX playground",
  description: "Hello",
} satisfies Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
