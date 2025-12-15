import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { FloatingBusButton } from "@/components/floating-bus-button";
// 1. 여기서 방금 만든 파일을 가져옵니다.
import { ThemeProvider } from "@/components/theme-provider";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProBus - 버스 대절 서비스",
  description: "신뢰할 수 있는 버스 대절 서비스",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. suppressHydrationWarning을 꼭 넣어줘야 에러가 안 납니다.
    <html lang="ko" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {/* 3. ThemeProvider로 전체를 감싸줍니다. */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingBusButton />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
