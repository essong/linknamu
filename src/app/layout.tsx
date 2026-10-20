import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Choco | 링크나무",
  description: "풀스택개발자 Choco의 링크 모음",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard: 페이지에 쓰인 글자만 내려받는 dynamic subset */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
