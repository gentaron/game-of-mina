import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "./navigation"

export const metadata: Metadata = {
  title: "Game of Mina",
  description:
    "Game of Mina — E16連星系の人類史と世界観を辿る百科プロジェクト",
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning className="dark">
      <body className="antialiased bg-background text-foreground">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
